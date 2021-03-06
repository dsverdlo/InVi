﻿/* File:      gui.js              *
 * Project:   InfoVis Project     *
 * Author(s): Trieu Thanh Ngoan   *
              Kenny Deschuyteneer */

var backEnd = backEnd || {};
var gui = gui || {};
var map = map || {};

// This script builds the bulk of our visualization page: the map that
// shows data about musical trends around the globe.

map.json_topology = "data/datamaps.world.min.json";
map.searchFound = false;

map.width = parseInt(window.getComputedStyle(body).width, 10);
map.height = parseInt(window.getComputedStyle(body).height, 10);
map.active = d3.select(null);

map.scale = d3.scale.sqrt()
    .domain([0, 100])
    .range([0, 30]);

map.scaleColor = d3.scale.sqrt()
    .domain([0, 1.0])
    .range([0, 7]);

map.basecolor = "#FFE8CC";
map.colors = ["#FFDDB2", "#FFD699", "#FFC97F", "#FFBC66", "#FFAE4C", "#FF9F32", "#FF9019", "#FF8300"];
map.colorsCity = ["#deebf7", "#c6dbef", "#9ecae1", "#6baed6", "#4292c6", "#2171b5", "#08519c", "#08306b"];
	
map.projection = d3.geo.mercator().translate([0, 0]).scale(map.width / 2 / Math.PI);  

map.zoom = d3.behavior.zoom().scaleExtent([1, 8]).on("zoom", move);

map.path = d3.geo.path().projection(map.projection);

map.svg = d3.select("body").append("svg")
        .attr("width", map.width).attr("height", map.height)
    .append("g")
        .attr("transform", "translate(" + map.width / 2 + "," + map.height / 2 + ")")
        .on("click", map.stopped, true);

map.svg.append("rect").attr("class", "overlay")
    .attr("x", -map.width / 2).attr("y", -map.height / 2)
    .attr("width", map.width).attr("height", map.height)
    .on("click", map.reset);

map.g = map.svg.append("g").style("stroke-width", 1)
    .attr("transform", "translate(0, 100)scale(1)");
    
map.svg.call(map.zoom).call(map.zoom.event);

map.div = d3.select("body").append("div")
    .attr("class", "tooltip")
    .style("opacity", 0);
	
gui.colorMapDefault = function() {
    // Remove any old paths there may be.
    map.g.selectAll("path").remove();
	
    // Draw paths in default map color.
    d3.json(map.json_topology, function(error, world) {
        map.g.selectAll("path")
            .data(topojson.feature(world, world.objects.countries).features)
            .enter().append("path")
                .attr("d", map.path)
                .attr("class", "feature")
                .on("click", map.clicked);

        map.g.append("path").datum(
                topojson.mesh(world, world.objects.countries,
                        function(a, b) {
                            return a !== b;
                        })).attr("class", "boundary").attr("d", map.path);
		
		if (map.searchFound){
			map.g.selectAll("circle").remove();
		}else{
			gui.loadTrackBubbles();
		}
    });
};

gui.colorMapDefault();

gui.loadTrackBubbles = function() {
    map.g.selectAll("circle")
        .remove();

    backEnd.countryList.map(function(country) {
        var toppesttrack = country.trackChart[0];

        if (toppesttrack != undefined) {
            var longitude  = country.longitude ;
            var latitude   = country.latitude ;
            var popularity = toppesttrack.popularity;
            var name       = toppesttrack.name;

			var countriesName = ["United States", "Belgium", "Austalia", "China", "France", "Italy", "Canada", "Sweden", "Finland"];
			for(var i = 0; i<10; i++){
				if(countriesName[i] == country.name){
					gui.drawBubble(name, longitude, latitude, popularity);
				}
			}
        };
    });
};

// Periodically check whether the backend has loaded yet.
map.loading = function() {
    if (backEnd.world.tracksReady()) {
        gui.loadTrackBubbles();
    } else {
        setTimeout(map.loading, 500);
    };
};

 map.loading();

gui.drawBubble = function(name, cx, cy, radius) {
    map.g.append("circle")
        .attr("class", "map-marker")
        .attr("cx", cx)
        .attr("cy", cy)
        .attr("r", map.scale(radius*30))
		 .on("mouseover", function(d){ 
					   map.div.transition()        
								   .duration(200)      
								   .style("opacity", .9);      
							   map.div.html(name)  
								   .style("left", (d3.event.pageX) + "px")     
								   .style("top", (d3.event.pageY - 28) + "px"); })
					   .on("mouseout", function(d) {       
						   map.div.transition()        
								   .duration(200)      
								   .style("opacity", 0);   
						   });
};

function containCountry(tracks, artists, countries, name){
	map.index = -1;
	for (var i = 0; i < countries.length; i++) {
		map.index = countries.indexOf(name);
		if( map.index > -1 ){
            switch (gui.searchType) {
                case "track":
                    return Math.round(map.scaleColor(tracks[map.index].popularity));
                case "artist":
                    return Math.round(map.scaleColor(artists[map.index].popularity));
                default:
                    return -1;
            };
		}else{
			return -1;
		};
	};
};

map.search = function(input) {
    // Stacks to draw appropriate heatmap later.
    var country_stack = [];
    var artist_stack  = [];
    var track_stack   = [];
	
    switch (gui.searchType) {
        // Find each instance of track and push on stack if found.
        case "track":
            backEnd.countryList.map(function(country) {
                var track = country.findTrack(input);
                if (track != null) {
					map.searchFound = true;
                    country_stack.push(country.name); 
                    track_stack.push(track);
                };
            });
            break;

        // Find each instance of artist and push on stack if found.
        case "artist":
            backEnd.countryList.map(function(country) {
                var artist = country.findArtist(input);
                if (artist != null) {
					map.searchFound = true;
                    country_stack.push(country.name); 
                    artist_stack.push(artist);
                };
            });
            break;
    };
	
	if(country_stack.length == 0){
		map.searchFound = false;
	};
	
	//remove old paths
	map.g.selectAll("path").remove();
	
	//add new paths
	d3.json(map.json_topology, function(error, world) {
		map.g.selectAll("path")
			.data(topojson.feature(world, world.objects.countries).features)
			.enter().append("path")
				  .attr("d", map.path)
				  .style("fill", function(d){ 
							var tempColorIndex = containCountry(track_stack, artist_stack, country_stack, d.properties.name);
							if( tempColorIndex >= 0 && tempColorIndex <= 7 ) { return map.colors[tempColorIndex];}; 
							if( tempColorIndex == -1 ) { return map.basecolor; };
							return "#9F8170"})
				   .style("stroke", "#FFF")
				   .style("stroke-width", "0.75")
				  .on("click", map.clicked)
				  .on("mouseover", function(d){ 
					   map.div.transition()        
								   .duration(200)      
								   .style("opacity", .9);      
							   map.div.html(d.properties.name)  
								   .style("left", (d3.event.pageX) + "px")     
								   .style("top", (d3.event.pageY - 28) + "px"); })
					   .on("mouseout", function(d) {       
						   map.div.transition()        
								   .duration(200)      
								   .style("opacity", 0);   
						   });

		map.g.append("path").datum(
				topojson.mesh(world, world.objects.countries,
						function(a, b) {
							return a !== b;
						})).attr("class", "boundary").attr("d", map.path);
						
		if (map.searchFound){
			map.g.selectAll("circle").remove();
		}else{
			gui.loadTrackBubbles();
		}
	});
	
};
    
function move() {
    map.t = d3.event.translate;
	map.s = d3.event.scale;
    map.t[0] = Math.min(map.width / 2 * (map.s - 1), Math.max(map.width / 2 * (1 - map.s),
            map.t[0]));
    map.t[1] = Math.min(map.height / 2 * (map.s - 1) + 230 * map.s, Math.max(map.height / 2
            * (1 - map.s) - 230 * map.s, map.t[1]));
    map.zoom.translate(map.t);
    map.g.style("stroke-width", 1 / map.s).attr("transform",
            "translate(" + map.t + ")scale(" + map.s + ")");
};

map.clicked = function(d) {
	if (map.active.node() === this) {
		return map.reset();
	}; 
	  map.active.classed("active", false);
	  map.active = d3.select(this).classed("active", true);

	  map.g.selectAll("#country").remove();

      // Get default coloring for rest of map.
      gui.colorMapDefault();
	   
      var countrycolor = map.basecolor;
      if (gui.mapMode == "all") { countrycolor = "#684F38"; };

	  country = "data/" + d.id + ".json";
		//create map for country
	  d3.json(country, function(error, country) {
		  map.g.append("g")
		  	.attr("id","country")
		  	.on("click", map.reset)
		  		.selectAll("path")
				.data(topojson.feature(country, country.objects.layer1).features)
				.enter().append("path")
				      .attr("d", map.path)
				      .style("fill", countrycolor);
						      
		  map.g.append("g")
		  	.attr("id","country")
		  	.on("click", map.reset)
		  		.append("path").datum(
					topojson.mesh(country, country.objects.layer1,
							function(a, b) {
								return a !== b;
							})).attr("class", "boundary")
							.attr("d", map.path).style("fill", countrycolor);

		});
		
		var input = document.getElementById("searchinput").value;
		if (input == "" | d.id != 'BEL'){
		} else {
			map.metrosname = [];
			map.metroArtists = [];
			map.metroTracks = [];
			
			var belgium = backEnd.getCountryByName('Belgium');
			for(var i = 0; i< belgium.metros.length; i++){
				var metro = belgium.metros[i];
				metro.fetchArtistChart();
				metro.fetchTrackChart();
				
				if(gui.searchType == "artist"){
					//metro.artistChart
					for(var j = 0; j < metro.artistChart.length; j++){
						if(metro.artistChart[j].name.indexOf(input) > -1 ){
							map.metroArtists.push(metro.artistChart[j]);
							map.metrosname.push(metro.name);
						};
					};
				} else {
					//metro.trackChart
					for(var j = 0; j < metro.trackChart.length; j++){
						if(metro.trackChart[j].name.indexOf(input) > -1 ){ 
							map.metroTracks.push(metro.trackChart[j]);
							map.metrosname.push(metro.name);
						};
					};
				};
			};
			
			if(map.metrosname.length > 0 ){
				if(gui.searchType == "artist"){
					for(var i = 0; i < map.metroArtists.length; i++){
						var tempColorIndex1 = Math.round(map.scaleColor(map.metroArtists[i].popularity));
						var tempColor = map.colorsCity[tempColorIndex1];
										
						var cityname = map.metrosname[i];
						var cityfile = "data/" + cityname + ".json";
						//create map for city
						drawCity(cityfile, tempColor, cityname);
					};
				} else {
					for(var i = 0; i < map.metroTracks.length; i++){
						var tempColorIndex1 = Math.round(map.scaleColor(map.metroTracks[i].popularity));
						var tempColor = map.colorsCity[tempColorIndex1];
										
						var cityname = map.metrosname[i];
						var cityfile = "data/" + cityname + ".json";
						//create map for city
						drawCity(cityfile, tempColor, cityname);
					};
				};
			};
		};
		
	    map.bounds = map.path.bounds(d);
	    map.dx = map.bounds[1][0] - map.bounds[0][0];
	    map.dy = map.bounds[1][1] - map.bounds[0][1];
	    map.x = (map.bounds[0][0] + map.bounds[1][0]) / 2;
	    map.y = (map.bounds[0][1] + map.bounds[1][1]) / 2;
	    map.scaleZoom = .9 / Math.max(map.dx / map.width, map.dy / map.height);
	    map.translate = [map.width / 2 - map.scaleZoom * map.x - 500, map.height / 2 - map.scaleZoom * map.y - 300];

		map.g.selectAll("path").style("stroke-width", 0.1);
		map.svg.transition()
          .duration(750)
          .call(map.zoom.translate(map.translate).scale(map.scaleZoom).event);
};

function drawCity(cityfile, color, cityname){
	d3.json(cityfile, function(error, city) {
		map.g.append("g")
			.attr("id", "country")
			.on("click", map.reset)
			.selectAll("path")
			.data(topojson.feature(city, city.objects.layer1).features)
			.enter().append("path")
				  .attr("d", map.path)
				  .style("fill", color)
				  .on("mouseover", function(d){ 
					   map.div.transition()        
								   .duration(200)      
								   .style("opacity", .9);      
							   map.div.html(cityname)  
								   .style("left", (d3.event.pageX) + "px")     
								   .style("top", (d3.event.pageY - 28) + "px"); })
					   .on("mouseout", function(d) {       
						   map.div.transition()        
								   .duration(200)      
								   .style("opacity", 0);   
						   });
								  
			map.g.append("g")
			.attr("id", "country")
			.on("click", map.reset)
			.append("path").datum(
			topojson.mesh(city, city.objects.layer1,
				function(a, b) {
					return a !== b;
				})).attr("class", "boundary")
				.attr("d", map.path)
				.style("fill", color);
	}); 
}
			
map.reset = function() {
		
	  map.active.classed("active", false);
	  map.active = d3.select(null);

	  map.g.selectAll("#country").remove();

      gui.changeMode();
		 
	  map.svg.transition()
	      .duration(750)
	      .call(map.zoom.translate([0, 0]).scale(1).event);
	map.g.selectAll("path").style("stroke-width", 0.75);
};
		
		
// If the drag behavior prevents the default click,
// also stop propagation so we don’t click-to-zoom.
map.stopped = function() {
  if (d3.event.defaultPrevented) d3.event.stopPropagation();
};