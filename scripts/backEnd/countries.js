/* Countries.js
 * This list simply provides a json
 * list of countries along with their
 * alpha-3 code (as defined in ISO-3166)
 */

var backEnd = backEnd || {};

backEnd.countryList = [
	new types.Country("Afghanistan","AFG"),
	new types.Country("Åland Islands","ALA"),
	new types.Country("Albania","ALB"),
	new types.Country("Algeria","DZA"),
	new types.Country("American Samoa","ASM"),
	new types.Country("Andorra","AND"),
	new types.Country("Angola","AGO"),
	new types.Country("Anguilla","AIA"),
	new types.Country("Antarctica","ATA"),
	new types.Country("Antigua and Barbuda","ATG"),
	new types.Country("Argentina","ARG"),
	new types.Country("Armenia","ARM"),
	new types.Country("Aruba","ABW"),
	new types.Country("Australia","AUS"),
	new types.Country("Austria","AUT"),
	new types.Country("Azerbaijan","AZE"),
	new types.Country("Bahamas","BHS"),
	new types.Country("Bahrain","BHR"),
	new types.Country("Bangladesh","BGD"),
	new types.Country("Barbados","BRB"),
	new types.Country("Belarus","BLR"),
	new types.Country("Belgium","BEL"),
	new types.Country("Belize","BLZ"),
	new types.Country("Benin","BEN"),
	new types.Country("Bermuda","BMU"),
	new types.Country("Bhutan","BTN"),
	new types.Country("Bolivia","BOL"),
	new types.Country("Bonaire, Sint Eustatius and Saba","BES"),
	new types.Country("Bosnia and Herzegovina","BIH"),
	new types.Country("Botswana","BWA"),
	new types.Country("Bouvet Island","BVT"),
	new types.Country("Brazil","BRA"),
	new types.Country("British Indian Ocean Territory","IOT"),
	new types.Country("Brunei Darussalam","BRN"),
	new types.Country("Bulgaria","BGR"),
	new types.Country("Burkina Faso","BFA"),
	new types.Country("Burundi","BDI"),
	new types.Country("Cambodia","KHM"),
	new types.Country("Cameroon","CMR"),
	new types.Country("Canada","CAN"),
	new types.Country("Cape Verde","CPV"),
	new types.Country("Cayman Islands","CYM"),
	new types.Country("Central African Republic","CAF"),
	new types.Country("Chad","TCD"),
	new types.Country("Chile","CHL"),
	new types.Country("China","CHN"),
	new types.Country("Christmas Island","CXR"),
	new types.Country("Cocos (Keeling) Islands","CCK"),
	new types.Country("Colombia","COL"),
	new types.Country("Comoros","COM"),
	new types.Country("Congo","COG"),
	new types.Country("Congo, the Democratic Republic of the","COD"),
	new types.Country("Cook Islands","COK"),
	new types.Country("Costa Rica","CRI"),
	new types.Country("Côte d'Ivoire","CIV"),
	new types.Country("Croatia","HRV"),
	new types.Country("Cuba","CUB"),
	new types.Country("Curaçao","CUW"),
	new types.Country("Cyprus","CYP"),
	new types.Country("Czech Republic","CZE"),
	new types.Country("Denmark","DNK"),
	new types.Country("Djibouti","DJI"),
	new types.Country("Dominica","DMA"),
	new types.Country("Dominican Republic","DOM"),
	new types.Country("Ecuador","ECU"),
	new types.Country("Egypt","EGY"),
	new types.Country("El Salvador","SLV"),
	new types.Country("Equatorial Guinea","GNQ"),
	new types.Country("Eritrea","ERI"),
	new types.Country("Estonia","EST"),
	new types.Country("Ethiopia","ETH"),
	new types.Country("Falkland Islands (Malvinas)","FLK"),
	new types.Country("Faroe Islands","FRO"),
	new types.Country("Fiji","FJI"),
	new types.Country("Finland","FIN"),
	new types.Country("France","FRA"),
	new types.Country("French Guiana","GUF"),
	new types.Country("French Polynesia","PYF"),
	new types.Country("French Southern Territories","ATF"),
	new types.Country("Gabon","GAB"),
	new types.Country("Gambia","GMB"),
	new types.Country("Georgia","GEO"),
	new types.Country("Germany","DEU"),
	new types.Country("Ghana","GHA"),
	new types.Country("Gibraltar","GIB"),
	new types.Country("Greece","GRC"),
	new types.Country("Greenland","GRL"),
	new types.Country("Grenada","GRD"),
	new types.Country("Guadeloupe","GLP"),
	new types.Country("Guam","GUM"),
	new types.Country("Guatemala","GTM"),
	new types.Country("Guernsey","GGY"),
	new types.Country("Guinea","GIN"),
	new types.Country("Guinea-Bissau","GNB"),
	new types.Country("Guyana","GUY"),
	new types.Country("Haiti","HTI"),
	new types.Country("Heard Island and McDonald Islands","HMD"),
	new types.Country("Holy See (Vatican City State)","VAT"),
	new types.Country("Honduras","HND"),
	new types.Country("Hong Kong","HKG"),
	new types.Country("Hungary","HUN"),
	new types.Country("Iceland","ISL"),
	new types.Country("India","IND"),
	new types.Country("Indonesia","IDN"),
	new types.Country("Iran, Islamic Republic of","IRN"),
	new types.Country("Iraq","IRQ"),
	new types.Country("Ireland","IRL"),
	new types.Country("Isle of Man","IMN"),
	new types.Country("Israel","ISR"),
	new types.Country("Italy","ITA"),
	new types.Country("Jamaica","JAM"),
	new types.Country("Japan","JPN"),
	new types.Country("Jersey","JEY"),
	new types.Country("Jordan","JOR"),
	new types.Country("Kazakhstan","KAZ"),
	new types.Country("Kenya","KEN"),
	new types.Country("Kiribati","KIR"),
	new types.Country("Korea, Democratic People's Republic of","PRK"),
	new types.Country("Korea, Republic of","KOR"),
	new types.Country("Kuwait","KWT"),
	new types.Country("Kyrgyzstan","KGZ"),
	new types.Country("Lao People's Democratic Republic","LAO"),
	new types.Country("Latvia","LVA"),
	new types.Country("Lebanon","LBN"),
	new types.Country("Lesotho","LSO"),
	new types.Country("Liberia","LBR"),
	new types.Country("Libya","LBY"),
	new types.Country("Liechtenstein","LIE"),
	new types.Country("Lithuania","LTU"),
	new types.Country("Luxembourg","LUX"),
	new types.Country("Macao","MAC"),
	new types.Country("Macedonia","MKD"),
	new types.Country("Madagascar","MDG"),
	new types.Country("Malawi","MWI"),
	new types.Country("Malaysia","MYS"),
	new types.Country("Maldives","MDV"),
	new types.Country("Mali","MLI"),
	new types.Country("Malta","MLT"),
	new types.Country("Marshall Islands","MHL"),
	new types.Country("Martinique","MTQ"),
	new types.Country("Mauritania","MRT"),
	new types.Country("Mauritius","MUS"),
	new types.Country("Mayotte","MYT"),
	new types.Country("Mexico","MEX"),
	new types.Country("Micronesia, Federated States of","FSM"),
	new types.Country("Moldova","MDA"),
	new types.Country("Monaco","MCO"),
	new types.Country("Mongolia","MNG"),
	new types.Country("Montenegro","MNE"),
	new types.Country("Montserrat","MSR"),
	new types.Country("Morocco","MAR"),
	new types.Country("Mozambique","MOZ"),
	new types.Country("Myanmar","MMR"),
	new types.Country("Namibia","NAM"),
	new types.Country("Nauru","NRU"),
	new types.Country("Nepal","NPL"),
	new types.Country("Netherlands","NLD"),
	new types.Country("New Caledonia","NCL"),
	new types.Country("New Zealand","NZL"),
	new types.Country("Nicaragua","NIC"),
	new types.Country("Niger","NER"),
	new types.Country("Nigeria","NGA"),
	new types.Country("Niue","NIU"),
	new types.Country("Norfolk Island","NFK"),
	new types.Country("Northern Mariana Islands","MNP"),
	new types.Country("Norway","NOR"),
	new types.Country("Oman","OMN"),
	new types.Country("Pakistan","PAK"),
	new types.Country("Palau","PLW"),
//	new types.Country("Palestine, State of","PSE"),
	new types.Country("Panama","PAN"),
	new types.Country("Papua New Guinea","PNG"),
	new types.Country("Paraguay","PRY"),
	new types.Country("Peru","PER"),
	new types.Country("Philippines","PHL"),
	new types.Country("Pitcairn","PCN"),
	new types.Country("Poland","POL"),
	new types.Country("Portugal","PRT"),
	new types.Country("Puerto Rico","PRI"),
	new types.Country("Qatar","QAT"),
	new types.Country("Réunion","REU"),
	new types.Country("Romania","ROU"),
	new types.Country("Russian Federation","RUS"),
	new types.Country("Rwanda","RWA"),
	new types.Country("Saint Barthélemy","BLM"),
	new types.Country("Saint Helena","SHN"),
	new types.Country("Saint Kitts and Nevis","KNA"),
	new types.Country("Saint Lucia","LCA"),
	new types.Country("Saint Martin (French part)","MAF"),
	new types.Country("Saint Pierre and Miquelon","SPM"),
	new types.Country("Saint Vincent and the Grenadines","VCT"),
	new types.Country("Samoa","WSM"),
	new types.Country("San Marino","SMR"),
	new types.Country("Sao Tome and Principe","STP"),
	new types.Country("Saudi Arabia","SAU"),
	new types.Country("Senegal","SEN"),
	new types.Country("Serbia","SRB"),
	new types.Country("Seychelles","SYC"),
	new types.Country("Sierra Leone","SLE"),
	new types.Country("Singapore","SGP"),
	new types.Country("Sint Maarten","SXM"),
	new types.Country("Slovakia","SVK"),
	new types.Country("Slovenia","SVN"),
	new types.Country("Solomon Islands","SLB"),
	new types.Country("Somalia","SOM"),
	new types.Country("South Africa","ZAF"),
	new types.Country("South Georgia and the South Sandwich Islands","SGS"),
	new types.Country("South Sudan","SSD"),
	new types.Country("Spain","ESP"),
	new types.Country("Sri Lanka","LKA"),
	new types.Country("Sudan","SDN"),
	new types.Country("Suriname","SUR"),
	new types.Country("Svalbard and Jan Mayen","SJM"),
	new types.Country("Swaziland","SWZ"),
	new types.Country("Sweden","SWE"),
	new types.Country("Switzerland","CHE"),
	new types.Country("Syrian Arab Republic","SYR"),
	new types.Country("Taiwan","TWN"),
	new types.Country("Tajikistan","TJK"),
	new types.Country("Tanzania, United Republic of","TZA"),
	new types.Country("Thailand","THA"),
	new types.Country("Timor-Leste","TLS"),
	new types.Country("Togo","TGO"),
	new types.Country("Tokelau","TKL"),
	new types.Country("Tonga","TON"),
	new types.Country("Trinidad and Tobago","TTO"),
	new types.Country("Tunisia","TUN"),
	new types.Country("Turkey","TUR"),
	new types.Country("Turkmenistan","TKM"),
	new types.Country("Turks and Caicos Islands","TCA"),
	new types.Country("Tuvalu","TUV"),
	new types.Country("Uganda","UGA"),
	new types.Country("Ukraine","UKR"),
	new types.Country("United Arab Emirates","ARE"),
	new types.Country("United Kingdom","GBR"),
	new types.Country("United States","USA"),
	new types.Country("United States Minor Outlying Islands","UMI"),
	new types.Country("Uruguay","URY"),
	new types.Country("Uzbekistan","UZB"),
	new types.Country("Vanuatu","VUT"),
	new types.Country("Venezuela","VEN"),
	new types.Country("Viet Nam","VNM"),
	new types.Country("Virgin Islands, British","VGB"),
	new types.Country("Virgin Islands, U.S.","VIR"),
	new types.Country("Wallis and Futuna","WLF"),
	new types.Country("Western Sahara","ESH"),
	new types.Country("Yemen","YEM"),
	new types.Country("Zambia","ZMB"),
	new types.Country("Zimbabwe","ZWE")
];