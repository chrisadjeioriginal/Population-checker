const iso_codes = [
  {
    countryLabel: "Ireland",
    alpha2: "IE",
  },
  {
    countryLabel: "Finland",
    alpha2: "FI",
  },
  {
    countryLabel: "Kenya",
    alpha2: "KE",
  },
  {
    countryLabel: "Ghana",
    alpha2: "GH",
  },
  {
    countryLabel: "Iceland",
    alpha2: "IS",
  },
  {
    countryLabel: "Estonia",
    alpha2: "EE",
  },
  {
    countryLabel: "Ukraine",
    alpha2: "UA",
  },
  {
    countryLabel: "Moldova",
    alpha2: "MD",
  },
  {
    countryLabel: "North Macedonia",
    alpha2: "MK",
  },
  {
    countryLabel: "Greenland",
    alpha2: "GL",
  },
  {
    countryLabel: "Croatia",
    alpha2: "HR",
  },
  {
    countryLabel: "Azerbaijan",
    alpha2: "AZ",
  },
  {
    countryLabel: "Cyprus",
    alpha2: "CY",
  },
  {
    countryLabel: "Monaco",
    alpha2: "MC",
  },
  {
    countryLabel: "Uzbekistan",
    alpha2: "UZ",
  },
  {
    countryLabel: "Cambodia",
    alpha2: "KH",
  },
  {
    countryLabel: "Samoa",
    alpha2: "WS",
  },
  {
    countryLabel: "Fiji",
    alpha2: "FJ",
  },
  {
    countryLabel: "Paraguay",
    alpha2: "PY",
  },
  {
    countryLabel: "Guyana",
    alpha2: "GY",
  },
  {
    countryLabel: "Jamaica",
    alpha2: "JM",
  },
  {
    countryLabel: "Guatemala",
    alpha2: "GT",
  },
  {
    countryLabel: "Haiti",
    alpha2: "HT",
  },
  {
    countryLabel: "Israel",
    alpha2: "IL",
  },
  {
    countryLabel: "Yemen",
    alpha2: "YE",
  },
  {
    countryLabel: "Jordan",
    alpha2: "JO",
  },
  {
    countryLabel: "Laos",
    alpha2: "LA",
  },
  {
    countryLabel: "Maldives",
    alpha2: "MV",
  },
  {
    countryLabel: "Malaysia",
    alpha2: "MY",
  },
  {
    countryLabel: "Myanmar",
    alpha2: "MM",
  },
  {
    countryLabel: "Oman",
    alpha2: "OM",
  },
  {
    countryLabel: "Qatar",
    alpha2: "QA",
  },
  {
    countryLabel: "Sri Lanka",
    alpha2: "LK",
  },
  {
    countryLabel: "Thailand",
    alpha2: "TH",
  },
  {
    countryLabel: "Turkmenistan",
    alpha2: "TM",
  },
  {
    countryLabel: "Vietnam",
    alpha2: "VN",
  },
  {
    countryLabel: "Central African Republic",
    alpha2: "CF",
  },
  {
    countryLabel: "Togo",
    alpha2: "TG",
  },
  {
    countryLabel: "Zimbabwe",
    alpha2: "ZW",
  },
  {
    countryLabel: "Burkina Faso",
    alpha2: "BF",
  },
  {
    countryLabel: "Equatorial Guinea",
    alpha2: "GQ",
  },
  {
    countryLabel: "French Guiana",
    alpha2: "GF",
  },
  {
    countryLabel: "Faroe Islands",
    alpha2: "FO",
  },
  {
    countryLabel: "\u00c5land",
    alpha2: "AX",
  },
  {
    countryLabel: "Falkland Islands",
    alpha2: "FK",
  },
  {
    countryLabel: "Guam",
    alpha2: "GU",
  },
  {
    countryLabel: "Martinique",
    alpha2: "MQ",
  },
  {
    countryLabel: "Aruba",
    alpha2: "AW",
  },
  {
    countryLabel: "British Virgin Islands",
    alpha2: "VG",
  },
  {
    countryLabel: "French Polynesia",
    alpha2: "PF",
  },
  {
    countryLabel: "Christmas Island",
    alpha2: "CX",
  },
  {
    countryLabel: "New Caledonia",
    alpha2: "NC",
  },
  {
    countryLabel: "Saint-Martin",
    alpha2: "MF",
  },
  {
    countryLabel: "Heard Island and McDonald Islands",
    alpha2: "HM",
  },
  {
    countryLabel: "Svalbard and Jan Mayen",
    alpha2: "SJ",
  },
  {
    countryLabel: "Antarctic Treaty area",
    alpha2: "AQ",
  },
  {
    countryLabel: "Canada",
    alpha2: "CA",
  },
  {
    countryLabel: "Japan",
    alpha2: "JP",
  },
  {
    countryLabel: "Spain",
    alpha2: "ES",
  },
  {
    countryLabel: "United States",
    alpha2: "US",
  },
  {
    countryLabel: "Belgium",
    alpha2: "BE",
  },
  {
    countryLabel: "Sweden",
    alpha2: "SE",
  },
  {
    countryLabel: "Italy",
    alpha2: "IT",
  },
  {
    countryLabel: "Switzerland",
    alpha2: "CH",
  },
  {
    countryLabel: "Austria",
    alpha2: "AT",
  },
  {
    countryLabel: "Turkey",
    alpha2: "TR",
  },
  {
    countryLabel: "Portugal",
    alpha2: "PT",
  },
  {
    countryLabel: "Egypt",
    alpha2: "EG",
  },
  {
    countryLabel: "Mexico",
    alpha2: "MX",
  },
  {
    countryLabel: "Ethiopia",
    alpha2: "ET",
  },
  {
    countryLabel: "France",
    alpha2: "FR",
  },
  {
    countryLabel: "United Kingdom",
    alpha2: "GB",
  },
  {
    countryLabel: "People's Republic of China",
    alpha2: "CN",
  },
  {
    countryLabel: "Brazil",
    alpha2: "BR",
  },
  {
    countryLabel: "Latvia",
    alpha2: "LV",
  },
  {
    countryLabel: "Czech Republic",
    alpha2: "CZ",
  },
  {
    countryLabel: "Slovenia",
    alpha2: "SI",
  },
  {
    countryLabel: "Bulgaria",
    alpha2: "BG",
  },
  {
    countryLabel: "Albania",
    alpha2: "AL",
  },
  {
    countryLabel: "Andorra",
    alpha2: "AD",
  },
  {
    countryLabel: "Kazakhstan",
    alpha2: "KZ",
  },
  {
    countryLabel: "Montenegro",
    alpha2: "ME",
  },
  {
    countryLabel: "Vatican City",
    alpha2: "VA",
  },
  {
    countryLabel: "Barbados",
    alpha2: "BB",
  },
  {
    countryLabel: "Indonesia",
    alpha2: "ID",
  },
  {
    countryLabel: "South Africa",
    alpha2: "ZA",
  },
  {
    countryLabel: "Chile",
    alpha2: "CL",
  },
  {
    countryLabel: "Singapore",
    alpha2: "SG",
  },
  {
    countryLabel: "Liechtenstein",
    alpha2: "LI",
  },
  {
    countryLabel: "Bahrain",
    alpha2: "BH",
  },
  {
    countryLabel: "Armenia",
    alpha2: "AM",
  },
  {
    countryLabel: "Serbia",
    alpha2: "RS",
  },
  {
    countryLabel: "Australia",
    alpha2: "AU",
  },
  {
    countryLabel: "Argentina",
    alpha2: "AR",
  },
  {
    countryLabel: "Timor-Leste",
    alpha2: "TL",
  },
  {
    countryLabel: "India",
    alpha2: "IN",
  },
  {
    countryLabel: "Vanuatu",
    alpha2: "VU",
  },
  {
    countryLabel: "Federated States of Micronesia",
    alpha2: "FM",
  },
  {
    countryLabel: "Kiribati",
    alpha2: "KI",
  },
  {
    countryLabel: "Mongolia",
    alpha2: "MN",
  },
  {
    countryLabel: "Venezuela",
    alpha2: "VE",
  },
  {
    countryLabel: "Ecuador",
    alpha2: "EC",
  },
  {
    countryLabel: "Bolivia",
    alpha2: "BO",
  },
  {
    countryLabel: "Trinidad and Tobago",
    alpha2: "TT",
  },
  {
    countryLabel: "Grenada",
    alpha2: "GD",
  },
  {
    countryLabel: "Antigua and Barbuda",
    alpha2: "AG",
  },
  {
    countryLabel: "Honduras",
    alpha2: "HN",
  },
  {
    countryLabel: "Dominica",
    alpha2: "DM",
  },
  {
    countryLabel: "Q785",
    alpha2: "JE",
  },
  {
    countryLabel: "Iran",
    alpha2: "IR",
  },
  {
    countryLabel: "Costa Rica",
    alpha2: "CR",
  },
  {
    countryLabel: "Panama",
    alpha2: "PA",
  },
  {
    countryLabel: "Kyrgyzstan",
    alpha2: "KG",
  },
  {
    countryLabel: "Kuwait",
    alpha2: "KW",
  },
  {
    countryLabel: "Pakistan",
    alpha2: "PK",
  },
  {
    countryLabel: "United Arab Emirates",
    alpha2: "AE",
  },
  {
    countryLabel: "Mali",
    alpha2: "ML",
  },
  {
    countryLabel: "Angola",
    alpha2: "AO",
  },
  {
    countryLabel: "Tunisia",
    alpha2: "TN",
  },
  {
    countryLabel: "South Sudan",
    alpha2: "SS",
  },
  {
    countryLabel: "Comoros",
    alpha2: "KM",
  },
  {
    countryLabel: "Republic of the Congo",
    alpha2: "CG",
  },
  {
    countryLabel: "Djibouti",
    alpha2: "DJ",
  },
  {
    countryLabel: "Eritrea",
    alpha2: "ER",
  },
  {
    countryLabel: "Guinea-Bissau",
    alpha2: "GW",
  },
  {
    countryLabel: "Cape Verde",
    alpha2: "CV",
  },
  {
    countryLabel: "Lesotho",
    alpha2: "LS",
  },
  {
    countryLabel: "Morocco",
    alpha2: "MA",
  },
  {
    countryLabel: "Namibia",
    alpha2: NaN,
  },
  {
    countryLabel: "Rwanda",
    alpha2: "RW",
  },
  {
    countryLabel: "Senegal",
    alpha2: "SN",
  },
  {
    countryLabel: "Somalia",
    alpha2: "SO",
  },
  {
    countryLabel: "Sudan",
    alpha2: "SD",
  },
  {
    countryLabel: "Puerto Rico",
    alpha2: "PR",
  },
  {
    countryLabel: "Cayman Islands",
    alpha2: "KY",
  },
  {
    countryLabel: "Western Sahara",
    alpha2: "EH",
  },
  {
    countryLabel: "United States Virgin Islands",
    alpha2: "VI",
  },
  {
    countryLabel: "Montserrat",
    alpha2: "MS",
  },
  {
    countryLabel: "American Samoa",
    alpha2: "AS",
  },
  {
    countryLabel: "Guadeloupe",
    alpha2: "GP",
  },
  {
    countryLabel: "Mayotte",
    alpha2: "YT",
  },
  {
    countryLabel: "Bermuda",
    alpha2: "BM",
  },
  {
    countryLabel: "Anguilla",
    alpha2: "AI",
  },
  {
    countryLabel: "Cura\u00e7ao",
    alpha2: "CW",
  },
  {
    countryLabel: "Saint Barth\u00e9lemy",
    alpha2: "BL",
  },
  {
    countryLabel: "Sint Maarten",
    alpha2: "SX",
  },
  {
    countryLabel: "Cook Islands",
    alpha2: "CK",
  },
  {
    countryLabel: "Kingdom of the Netherlands",
    alpha2: "NL",
  },
  {
    countryLabel: "Niue",
    alpha2: "NU",
  },
  {
    countryLabel: "Saint Pierre and Miquelon",
    alpha2: "PM",
  },
  {
    countryLabel: "Cocos (Keeling) Islands",
    alpha2: "CC",
  },
  {
    countryLabel: "Tokelau",
    alpha2: "TK",
  },
  {
    countryLabel: "French Southern and Antarctic Lands",
    alpha2: "TF",
  },
  {
    countryLabel: "Trust Territory of the Pacific Islands",
    alpha2: "PC",
  },
  {
    countryLabel: "Palestine",
    alpha2: "PS",
  },
  {
    countryLabel: "Norway",
    alpha2: "NO",
  },
  {
    countryLabel: "Hungary",
    alpha2: "HU",
  },
  {
    countryLabel: "Luxembourg",
    alpha2: "LU",
  },
  {
    countryLabel: "Denmark",
    alpha2: "DK",
  },
  {
    countryLabel: "Poland",
    alpha2: "PL",
  },
  {
    countryLabel: "Lithuania",
    alpha2: "LT",
  },
  {
    countryLabel: "Greece",
    alpha2: "GR",
  },
  {
    countryLabel: "Uruguay",
    alpha2: "UY",
  },
  {
    countryLabel: "Russia",
    alpha2: "RU",
  },
  {
    countryLabel: "Germany",
    alpha2: "DE",
  },
  {
    countryLabel: "Belarus",
    alpha2: "BY",
  },
  {
    countryLabel: "Slovakia",
    alpha2: "SK",
  },
  {
    countryLabel: "Romania",
    alpha2: "RO",
  },
  {
    countryLabel: "Bosnia and Herzegovina",
    alpha2: "BA",
  },
  {
    countryLabel: "Georgia",
    alpha2: "GE",
  },
  {
    countryLabel: "Malta",
    alpha2: "MT",
  },
  {
    countryLabel: "San Marino",
    alpha2: "SM",
  },
  {
    countryLabel: "Cuba",
    alpha2: "CU",
  },
  {
    countryLabel: "Belize",
    alpha2: "BZ",
  },
  {
    countryLabel: "Algeria",
    alpha2: "DZ",
  },
  {
    countryLabel: "Peru",
    alpha2: "PE",
  },
  {
    countryLabel: "North Korea",
    alpha2: "KP",
  },
  {
    countryLabel: "Chad",
    alpha2: "TD",
  },
  {
    countryLabel: "New Zealand",
    alpha2: "NZ",
  },
  {
    countryLabel: "Tuvalu",
    alpha2: "TV",
  },
  {
    countryLabel: "Tonga",
    alpha2: "TO",
  },
  {
    countryLabel: "Solomon Islands",
    alpha2: "SB",
  },
  {
    countryLabel: "Papua New Guinea",
    alpha2: "PG",
  },
  {
    countryLabel: "Palau",
    alpha2: "PW",
  },
  {
    countryLabel: "Nauru",
    alpha2: "NR",
  },
  {
    countryLabel: "Marshall Islands",
    alpha2: "MH",
  },
  {
    countryLabel: "Suriname",
    alpha2: "SR",
  },
  {
    countryLabel: "Colombia",
    alpha2: "CO",
  },
  {
    countryLabel: "Saint Vincent and the Grenadines",
    alpha2: "VC",
  },
  {
    countryLabel: "Saint Lucia",
    alpha2: "LC",
  },
  {
    countryLabel: "Saint Kitts and Nevis",
    alpha2: "KN",
  },
  {
    countryLabel: "The Bahamas",
    alpha2: "BS",
  },
  {
    countryLabel: "Dominican Republic",
    alpha2: "DO",
  },
  {
    countryLabel: "El Salvador",
    alpha2: "SV",
  },
  {
    countryLabel: "Iraq",
    alpha2: "IQ",
  },
  {
    countryLabel: "Nicaragua",
    alpha2: "NI",
  },
  {
    countryLabel: "Lebanon",
    alpha2: "LB",
  },
  {
    countryLabel: "Nepal",
    alpha2: "NP",
  },
  {
    countryLabel: "Saudi Arabia",
    alpha2: "SA",
  },
  {
    countryLabel: "Syria",
    alpha2: "SY",
  },
  {
    countryLabel: "Tajikistan",
    alpha2: "TJ",
  },
  {
    countryLabel: "Taiwan",
    alpha2: "TW",
  },
  {
    countryLabel: "South Korea",
    alpha2: "KR",
  },
  {
    countryLabel: "Afghanistan",
    alpha2: "AF",
  },
  {
    countryLabel: "Bangladesh",
    alpha2: "BD",
  },
  {
    countryLabel: "Bhutan",
    alpha2: "BT",
  },
  {
    countryLabel: "Brunei",
    alpha2: "BN",
  },
  {
    countryLabel: "Tanzania",
    alpha2: "TZ",
  },
  {
    countryLabel: "Philippines",
    alpha2: "PH",
  },
  {
    countryLabel: "Zambia",
    alpha2: "ZM",
  },
  {
    countryLabel: "Benin",
    alpha2: "BJ",
  },
  {
    countryLabel: "Botswana",
    alpha2: "BW",
  },
  {
    countryLabel: "Burundi",
    alpha2: "BI",
  },
  {
    countryLabel: "Democratic Republic of the Congo",
    alpha2: "CD",
  },
  {
    countryLabel: "Gabon",
    alpha2: "GA",
  },
  {
    countryLabel: "The Gambia",
    alpha2: "GM",
  },
  {
    countryLabel: "Guinea",
    alpha2: "GN",
  },
  {
    countryLabel: "Ivory Coast",
    alpha2: "CI",
  },
  {
    countryLabel: "Cameroon",
    alpha2: "CM",
  },
  {
    countryLabel: "Liberia",
    alpha2: "LR",
  },
  {
    countryLabel: "Libya",
    alpha2: "LY",
  },
  {
    countryLabel: "Madagascar",
    alpha2: "MG",
  },
  {
    countryLabel: "Malawi",
    alpha2: "MW",
  },
  {
    countryLabel: "Mauritania",
    alpha2: "MR",
  },
  {
    countryLabel: "Mauritius",
    alpha2: "MU",
  },
  {
    countryLabel: "Mozambique",
    alpha2: "MZ",
  },
  {
    countryLabel: "Niger",
    alpha2: "NE",
  },
  {
    countryLabel: "Nigeria",
    alpha2: "NG",
  },
  {
    countryLabel: "Uganda",
    alpha2: "UG",
  },
  {
    countryLabel: "S\u00e3o Tom\u00e9 and Pr\u00edncipe",
    alpha2: "ST",
  },
  {
    countryLabel: "Seychelles",
    alpha2: "SC",
  },
  {
    countryLabel: "Sierra Leone",
    alpha2: "SL",
  },
  {
    countryLabel: "Eswatini",
    alpha2: "SZ",
  },
  {
    countryLabel: "Gibraltar",
    alpha2: "GI",
  },
  {
    countryLabel: "Hong Kong",
    alpha2: "HK",
  },
  {
    countryLabel: "Isle of Man",
    alpha2: "IM",
  },
  {
    countryLabel: "Macau",
    alpha2: "MO",
  },
  {
    countryLabel: "Northern Mariana Islands",
    alpha2: "MP",
  },
  {
    countryLabel: "United States Minor Outlying Islands",
    alpha2: "UM",
  },
  {
    countryLabel: "German Democratic Republic",
    alpha2: "DD",
  },
  {
    countryLabel: "R\u00e9union",
    alpha2: "RE",
  },
  {
    countryLabel: "Turks and Caicos Islands",
    alpha2: "TC",
  },
  {
    countryLabel: "Bouvet Island",
    alpha2: "BV",
  },
  {
    countryLabel: "Netherlands Antilles",
    alpha2: "AN",
  },
  {
    countryLabel: "Guernsey",
    alpha2: "GG",
  },
  {
    countryLabel: "Caribbean Netherlands",
    alpha2: "BQ",
  },
  {
    countryLabel: "Norfolk Island",
    alpha2: "NF",
  },
  {
    countryLabel: "South Georgia and the South Sandwich Islands",
    alpha2: "GS",
  },
  {
    countryLabel: "Wallis and Futuna",
    alpha2: "WF",
  },
  {
    countryLabel: "Pitcairn Islands",
    alpha2: "PN",
  },
  {
    countryLabel: "British Indian Ocean Territory",
    alpha2: "IO",
  },
  {
    countryLabel: "Saint Helena, Ascension and Tristan da Cunha",
    alpha2: "SH",
  },
];

module.exports = iso_codes;
