import React, { useState } from 'react'
import CountryCard from './ContryCard'
import usa from '../../assets/usa_unefee.png';
import India from '../../assets/india_ftrnr7.png';
import France from '../../assets/france_ntx7mf.png';
import Russia from '../../assets/Russia_i6mhzq.png';
import Bangladesh from '../../assets/bangladesh_b1db8z.png';
import Brazil from '../../assets/brazil_blkhvy.png';
import Mozambique from '../../assets/mozambue_doizgn.png';
import SouthAfrica from '../../assets/South_Africa_j99z8p.png';
import Venezuela from '../../assets/Venezuela_gqx58r.png';
import Swaziland from '../../assets/Swaziland_zb9qnf.png';
import Pakistan from '../../assets/pakisthan_ijzppm.png';
import Malawi from '../../assets/malawi_wchalq.png';
import Nigeria from '../../assets/Nigeria_bt4bs2.png';
import China from '../../assets/china_evcoaw.png';
import Lesotho from '../../assets/Lesotho_gmfox4.png';
import Zambia from '../../assets/Zambia_ibtaeg.png';
import Egypt from '../../assets/Egypt_yrrfy9.png';
import Peru from '../../assets/Peru_xs0epw.png';
import Mexico from '../../assets/Mexico_krpbhu.png';
import Spain from '../../assets/Spain_ababqa.png';
import Ghana from '../../assets/Ghana_mkzj7z.png';
import Morocco from '../../assets/Morocco_hmib3a.png';
import Gabon from '../../assets/Gabon_yxky02.png';
import Algeria from '../../assets/Algeria_wjjptz.png';
import Myanmar from '../../assets/Myanmar_qygtaj.png';
import Argentina from '../../assets/argentina_upcsls.png';
import Romania from '../../assets/romania_uxpnxt.png';
import Ukraine from '../../assets/ukrian_g8dh4o.png';
import UnitedKingdom from '../../assets/uk_myiod3.png';
import Vietnam from '../../assets/Vietnam_zqmyck.png';
import Canada from '../../assets/canada_ut9mqs.png';
import Tanzania from '../../assets/tanzania_mpwzyv.png';
import Namibia from '../../assets/Namibia_q0nlo2.png';
import Switzerland from '../../assets/Switzerland_plwuwl.png';
import Angola from '../../assets/Angola_kqqbb7.png';
import Italy from '../../assets/Italy_s9e8f3.png';
import Colombia from '../../assets/Colombia_zfqijj.png';
import Germany from '../../assets/Germany_wg6vps.png';
import Botswana from '../../assets/Botswana_hongax.png';
import Sweden from '../../assets/usa_unefee.png';
import Denmark from '../../assets/blank.gif';
import Netherland from '../../assets/usa_unefee.png';
import Ecuador from '../../assets/usa_unefee.png';
import Austria from '../../assets/usa_unefee.png';
import Czech from '../../assets/usa_unefee.png';
import Norway from '../../assets/usa_unefee.png';
import Luxembourg from '../../assets/usa_unefee.png';
import Belgium from '../../assets/usa_unefee.png';
import Poland from '../../assets/usa_unefee.png';
import Finland from '../../assets/usa_unefee.png';
import Hungary from '../../assets/usa_unefee.png';
import Ireland from '../../assets/usa_unefee.png';
import Portugal from '../../assets/usa_unefee.png';
import Greece from '../../assets/usa_unefee.png';
import Bosnia from '../../assets/usa_unefee.png';
import Bulgaria from '../../assets/usa_unefee.png';
import Slovakia from '../../assets/usa_unefee.png';
import Belarus from '../../assets/usa_unefee.png';
import Serbia from '../../assets/usa_unefee.png';
import Croatia from '../../assets/usa_unefee.png';
import Moldova from '../../assets/usa_unefee.png';
import Israel from '../../assets/usa_unefee.png';
import Albania from '../../assets/usa_unefee.png';
import Lithuania from '../../assets/usa_unefee.png';
import Northmacedor from '../../assets/usa_unefee.png';
import Slovenia from '../../assets/usa_unefee.png';
import Latvia from '../../assets/usa_unefee.png';
import Estonia from '../../assets/usa_unefee.png';
import Montenegro from '../../assets/usa_unefee.png';
import Malta from '../../assets/usa_unefee.png';
import Iceland from '../../assets/usa_unefee.png';
import Andorra from '../../assets/usa_unefee.png';
import Monaco from '../../assets/usa_unefee.png';
import Liechtenstein from '../../assets/usa_unefee.png';
import SanMarino from '../../assets/usa_unefee.png';
import Holysee from '../../assets/usa_unefee.png';
import Australia from '../../assets/usa_unefee.png';
import Newzealand from '../../assets/usa_unefee.png';
import Fiji from '../../assets/usa_unefee.png';
import Paraguay from '../../assets/usa_unefee.png';
import Cuba from '../../assets/usa_unefee.png';
import Japan from '../../assets/usa_unefee.png';
import Hongkong from '../../assets/usa_unefee.png';
import Macao from '../../assets/usa_unefee.png';
import Taiwan from '../../assets/usa_unefee.png';
import Quatar from '../../assets/usa_unefee.png';
import Singapore from '../../assets/usa_unefee.png';
import Uae from '../../assets/usa_unefee.png';
import Kazakhstan from '../../assets/usa_unefee.png';
import Malaysia from '../../assets/usa_unefee.png';
import Philippines from '../../assets/usa_unefee.png';
import Turkey from '../../assets/usa_unefee.png';
import Uzbekistan from '../../assets/usa_unefee.png';
import Srilanka from '../../assets/usa_unefee.png';
import Cambodia from '../../assets/usa_unefee.png';
import NorthKorea from '../../assets/usa_unefee.png';
import Indonesia from '../../assets/usa_unefee.png';
import Iran from '../../assets/usa_unefee.png';
import Thailand from '../../assets/usa_unefee.png';
import SouthKorea from '../../assets/usa_unefee.png';
import Iraq from '../../assets/usa_unefee.png';
import Afghanistan from '../../assets/usa_unefee.png';
import Saudiarabia from '../../assets/usa_unefee.png';
import Yemen from '../../assets/usa_unefee.png';
import Nepal from '../../assets/usa_unefee.png';
import Syria from '../../assets/usa_unefee.png';
import Jordan from '../../assets/usa_unefee.png';
import Azerbaijan from '../../assets/usa_unefee.png';
import Tajikistan from '../../assets/usa_unefee.png';
import Laos from '../../assets/usa_unefee.png';
import Lebanon from '../../assets/usa_unefee.png';
import Kyrgyzstan from '../../assets/usa_unefee.png';
import Turkmenistan from '../../assets/usa_unefee.png';
import Oman from '../../assets/usa_unefee.png';
import Palestaine from '../../assets/usa_unefee.png';
import Kuwait from '../../assets/usa_unefee.png';
import Georgia from '../../assets/usa_unefee.png';
import Mongolia from '../../assets/usa_unefee.png';
import Armenia from '../../assets/usa_unefee.png';
import Bahrain from '../../assets/usa_unefee.png';
import TimorLeste from '../../assets/usa_unefee.png';
import Cyprus from '../../assets/usa_unefee.png';
import Bhutan from '../../assets/usa_unefee.png';
import Maldives from '../../assets/usa_unefee.png';
import Brunei from '../../assets/usa_unefee.png';
import Chile from '../../assets/usa_unefee.png';
import Guatemala from '../../assets/usa_unefee.png';
import Bolivia from '../../assets/usa_unefee.png';
import Haiti from '../../assets/usa_unefee.png';
import Dominicana from '../../assets/usa_unefee.png';
import Ethiopia from '../../assets/usa_unefee.png';
import Honduras from '../../assets/usa_unefee.png';
import Nicaragua from '../../assets/usa_unefee.png';
import ElSalvador from '../../assets/usa_unefee.png';
import Costarica from '../../assets/usa_unefee.png';
import Panama from '../../assets/usa_unefee.png';
import Uruguay from '../../assets/usa_unefee.png';
import Jamaica from '../../assets/usa_unefee.png';
import Trinidad from '../../assets/usa_unefee.png';
import Guyana from '../../assets/usa_unefee.png';
import Suriname from '../../assets/usa_unefee.png';
import Belize from '../../assets/usa_unefee.png';
import Bahamas from '../../assets/usa_unefee.png';
import Barbados from '../../assets/usa_unefee.png';
import Saintlucia from '../../assets/usa_unefee.png';
import Grenada from '../../assets/usa_unefee.png';
import Saintvincentan from '../../assets/usa_unefee.png';
import Antiguaandbar from '../../assets/usa_unefee.png';
import Dominica from '../../assets/usa_unefee.png';
import Saintkittsan from '../../assets/usa_unefee.png';
import Papuanewguini from '../../assets/usa_unefee.png';
import Solomonisland from '../../assets/usa_unefee.png';
import Micronesia from '../../assets/usa_unefee.png';
import Vanuatu from '../../assets/usa_unefee.png';
import Samoa from '../../assets/usa_unefee.png';
import Kiribati from '../../assets/usa_unefee.png';
import Tonga from '../../assets/usa_unefee.png';
import MarshallIsland from '../../assets/usa_unefee.png';
import Palau from '../../assets/usa_unefee.png';
import Tuvalu from '../../assets/usa_unefee.png';
import Nauru from '../../assets/usa_unefee.png';
import Drcongo from '../../assets/usa_unefee.png';
import Kenya from '../../assets/usa_unefee.png';
import Uganda from '../../assets/usa_unefee.png';
import Sudan from '../../assets/usa_unefee.png';
import Madagascar from '../../assets/usa_unefee.png';
import cameroon from '../../assets/usa_unefee.png';
import CotedIvoire from '../../assets/usa_unefee.png';
import Niger from '../../assets/usa_unefee.png';
import Burkinafaso from '../../assets/usa_unefee.png';
import Mali from '../../assets/usa_unefee.png';
import Senegal from '../../assets/usa_unefee.png';
import chad from '../../assets/usa_unefee.png';
import Somalia from '../../assets/usa_unefee.png';
import Zimbabwe from '../../assets/usa_unefee.png';
import MGuinea from '../../assets/usa_unefee.png';
import Rwanda from '../../assets/usa_unefee.png';
import Benin from '../../assets/usa_unefee.png';
import Burundi from '../../assets/usa_unefee.png';
import Tunisia from '../../assets/usa_unefee.png';
import Southsudan from '../../assets/usa_unefee.png';
import Togo from '../../assets/usa_unefee.png';
import Sierraleone from '../../assets/usa_unefee.png';
import Libya from '../../assets/usa_unefee.png';
import Congo from '../../assets/usa_unefee.png';
import Liberia from '../../assets/usa_unefee.png';
import CentralAfrican from '../../assets/usa_unefee.png';
import Mauritania from '../../assets/usa_unefee.png';
import Eritrea from '../../assets/usa_unefee.png';
import Gambia from '../../assets/usa_unefee.png';
import Guineabissau from '../../assets/usa_unefee.png';
import Equatorialguin from '../../assets/usa_unefee.png';
import Mauritius from '../../assets/usa_unefee.png';
import Eswatini from '../../assets/usa_unefee.png';
import Djibouti from '../../assets/usa_unefee.png';
import Comoros from '../../assets/usa_unefee.png';
import CaboVerde from '../../assets/usa_unefee.png';
import Saotomeandpro from '../../assets/usa_unefee.png';
import Seychelles from '../../assets/usa_unefee.png';
import Monserrat from '../../assets/usa_unefee.png';
import Newcaledonia from '../../assets/usa_unefee.png';
import Puertorico from '../../assets/usa_unefee.png';
import Tit from '../../assets/usa_unefee.png';
import Turksandcaico from '../../assets/usa_unefee.png';
import Virginislands from '../../assets/usa_unefee.png';
import Reunion from '../../assets/usa_unefee.png';
import Bih from '../../assets/usa_unefee.png';
import Capeverde from '../../assets/usa_unefee.png';
import Guadeloupe from '../../assets/usa_unefee.png';
import Frenchguiana from '../../assets/usa_unefee.png';
import Easttimor from '../../assets/usa_unefee.png';
import Ivorycoast from '../../assets/usa_unefee.png';
import Anguilla from '../../assets/usa_unefee.png';
import Aruba from '../../assets/usa_unefee.png';
import Caymanislands from '../../assets/usa_unefee.png';
import './Country.css';
const Country = () => {
    const products = [
        {
            _id: 1,
            name: 'USA',
            link: '/',
            img: usa
        },
        {
            _id: 2,
            name: 'India',
            link: '/',
            img: India
        },
        {
            _id: 3,
            name: 'France',
            link: '/',
            img: France
        },
        {
            _id: 4,
            name: 'Russia',
            link: '/',
            img: Russia
        },
        {
            _id: 5,
            name: 'Bangladesh',
            link: '/',
            img: Bangladesh
        },
        {
            _id: 6,
            name: 'Brazil',
            link: '/',
            img: Brazil
        },
        {
            _id: 7,
            name: 'Mozambique',
            link: '/',
            img: Mozambique
        },
        {
            _id: 8,
            name: 'South Africa',
            link: '/',
            img: SouthAfrica
        },
        {
            _id: 9,
            name: 'Venezuela',
            link: '/',
            img: Venezuela
        },
        {
            _id: 10,
            name: 'Swaziland',
            link: '/',
            img: Swaziland
        },
        {
            _id: 11,
            name: 'Pakistan',
            link: '/',
            img: Pakistan
        },
        {
            _id: 12,
            name: 'Malawi',
            link: '/',
            img: Malawi
        },
        {
            _id: 13,
            name: 'Nigeria',
            link: '/',
            img: Nigeria
        },
        {
            _id: 14,
            name: 'China',
            link: '/',
            img: China
        },
        {
            _id: 15,
            name: 'Lesotho',
            link: '/',
            img: Lesotho
        },
        {
            _id: 16,
            name: 'Zambia',
            link: '/',
            img: Zambia
        },
        {
            _id: 17,
            name: 'Egypt',
            link: '/',
            img: Egypt
        },
        {
            _id: 18,
            name: 'Peru',
            link: '/',
            img: Peru
        },
        {
            _id: 19,
            name: 'Mexico',
            link: '/',
            img: Mexico
        },
        {
            _id: 20,
            name: 'Spain',
            link: '/',
            img: Spain
        },
        {
            _id: 21,
            name: 'Ghana',
            link: '/',
            img: Ghana
        },
        {
            _id: 22,
            name: 'Morocco',
            link: '/',
            img: Morocco
        },
        {
            _id: 23,
            name: 'Gabon',
            link: '/',
            img: Gabon
        },
        {
            _id: 24,
            name: 'Algeria',
            link: '/',
            img: Algeria
        },
        {
            _id: 25,
            name: 'Myanmar',
            link: '/',
            img: Myanmar
        },
        {
            _id: 26,
            name: 'Argentina',
            link: '/',
            img: Argentina
        },
        {
            _id: 27,
            name: 'Romania',
            link: '/',
            img: Romania
        },
        {
            _id: 28,
            name: 'Ukraine',
            link: '/',
            img: Ukraine
        },
        {
            _id: 29,
            name: 'UnitedKingdom',
            link: '/',
            img: UnitedKingdom
        },
        {
            _id: 30,
            name: 'Vietnam',
            link: '/',
            img: Vietnam
        },
        {
            _id: 31,
            name: 'Canada',
            link: '/',
            img: Canada
        },
        {
            _id: 32,
            name: 'Tanzania',
            link: '/',
            img: Tanzania
        },
        {
            _id: 33,
            name: 'Namibia',
            link: '/',
            img: Namibia
        },
        {
            _id: 34,
            name: 'Switzerland',
            link: '/',
            img: Switzerland
        },
        {
            _id: 35,
            name: 'Angola',
            link: '/',
            img: Angola
        },
        {
            _id: 37,
            name: 'Italy',
            link: '/',
            img: Italy
        },
        {
            _id: 38,
            name: 'Colombia',
            link: '/',
            img: Italy
        },
        {
            _id: 39,
            name: 'Germany',
            link: '/',
            img: Germany
        },
        {
            _id: 40,
            name: 'Botswana',
            link: '/',
            img: Botswana
        },
        {
            _id: 41,
            name: 'Sweden',
            link: '/',
            img: Sweden
        },
        {
            _id: 42,
            name: 'Denmark',
            link: '/',
            img: Denmark
        },
        {
            _id: 43,
            name: 'Netherlands',
            link: '/',
            img: Netherland
        },
        {
            _id: 44,
            name: 'Ecuador',
            link: '/',
            img: Ecuador
        },
        {
            _id: 45,
            name: 'Austria',
            link: '/',
            img: Austria
        },
        {
            _id: 46,
            name: 'Czech Republic',
            link: '/',
            img: Czech
        },
        {
            _id: 47,
            name: 'Norway',
            link: '/',
            img: Norway
        },
        {
            _id: 48,
            name: 'Luxembourg ',
            link: '/',
            img: Luxembourg 
        },
        {
            _id: 49,
            name: 'Belgium',
            link: '/',
            img: Belgium
        },
        {
            _id: 50,
            name: 'Poland',
            link: '/',
            img: Poland
        },
        {
            _id: 51,
            name: 'Finland',
            link: '/',
            img: Finland
        },
        {
            _id: 52,
            name: 'Hungary',
            link: '/',
            img: Hungary
        },
        {
            _id: 53,
            name: 'Ireland',
            link: '/',
            img: Ireland
        },
        {
            _id: 54,
            name: 'Portugal',
            link: '/',
            img: Portugal
        },
        {
            _id: 55,
            name: 'Greece',
            link: '/',
            img: Greece
        },
        {
            _id: 56,
            name: 'Bosnia and He',
            link: '/',
            img: Bosnia
        },
        {
            _id: 57,
            name: 'Bulgaria',
            link: '/',
            img: Bulgaria
        },
        {
            _id: 58,
            name: 'Slovakia',
            link: '/',
            img: Slovakia
        },
        {
            _id: 59,
            name: 'Belarus',
            link: '/',
            img: Belarus
        },
        {
            _id: 60,
            name: 'Serbia',
            link: '/',
            img: Serbia
        },
        {
            _id: 61,
            name: 'Croatia',
            link: '/',
            img: Croatia
        },
        {
            _id: 62,
            name: 'Moldova',
            link: '/',
            img: Moldova
        },
        {
            _id: 63,
            name: 'Israel',
            link: '/',
            img: Israel
        },
        {
            _id: 64,
            name: 'Albania',
            link: '/',
            img: Albania
        },
        {
            _id: 65,
            name: 'Lithuania',
            link: '/',
            img: Lithuania
        },
        {
            _id: 66,
            name: 'Northmacedor',
            link: '/',
            img: Northmacedor
        },
        {
            _id: 67,
            name: 'Slovenia',
            link: '/',
            img: Slovenia
        },
        {
            _id: 68,
            name: 'Latvia',
            link: '/',
            img: Latvia
        },
        {
            _id: 70,
            name: 'Estonia',
            link: '/',
            img: Estonia
        },
        {
            _id: 71,
            name: 'Montenegro',
            link: '/',
            img: Montenegro
        },
        {
            _id: 72,
            name: 'Malta',
            link: '/',
            img: Malta
        },
        {
            _id: 73,
            name: 'Iceland',
            link: '/',
            img: Iceland
        },
        {
            _id: 74,
            name: 'Andorra',
            link: '/',
            img: Andorra
        },
        {
            _id: 75,
            name: 'Monaco',
            link: '/',
            img: Monaco
        },
        {
            _id: 76,
            name: 'Liechtenstein',
            link: '/',
            img: Liechtenstein
        },
        {
            _id: 77,
            name: 'San Marino',
            link: '/',
            img: SanMarino
        },
        {
            _id: 78,
            name: 'Holy see',
            link: '/',
            img: Holysee
        },
        {
            _id: 79,
            name: 'Australia',
            link: '/',
            img: Australia
        },
        {
            _id: 80,
            name: 'New zealand',
            link: '/',
            img: Newzealand
        },
        {
            _id: 81,
            name: 'Fiji',
            link: '/',
            img: Fiji
        },
        {
            _id: 82,
            name: 'Paraguay',
            link: '/',
            img: Paraguay
        },
        {
            _id: 83,
            name: 'Cuba',
            link: '/',
            img: Cuba
        },
        {
            _id: 84,
            name: 'Japan',
            link: '/',
            img: Japan
        },
        {
            _id: 85,
            name: 'Hongkong',
            link: '/',
            img: Hongkong
        },
        {
            _id: 86,
            name: 'Macao',
            link: '/',
            img: Macao
        },
        {
            _id: 87,
            name: 'Taiwan',
            link: '/',
            img: Taiwan
        },
        {
            _id: 88,
            name: 'Quatar',
            link: '/',
            img: Quatar
        },
        {
            _id: 89,
            name: 'Singapore',
            link: '/',
            img: Singapore
        },
        {
            _id: 90,
            name: 'Uae',
            link: '/',
            img: Uae
        },
        {
            _id: 91,
            name: 'Kazakhstan',
            link: '/',
            img: Kazakhstan
        },
        {
            _id: 92,
            name: 'Malaysia',
            link: '/',
            img: Malaysia
        },
        {
            _id: 93,
            name: 'Philippines',
            link: '/',
            img: Philippines
        },
        {
            _id: 94,
            name: 'Turkey',
            link: '/',
            img: Turkey
        },
        {
            _id: 95,
            name: 'Uzbekistan',
            link: '/',
            img: Uzbekistan
        },
        {
            _id: 96,
            name: 'Srilanka',
            link: '/',
            img: Srilanka
        },
        {
            _id: 97,
            name: 'Cambodia',
            link: '/',
            img: Cambodia
        },
        {
            _id: 98,
            name: 'NorthKorea',
            link: '/',
            img: NorthKorea
        },
        {
            _id: 99,
            name: 'Indonesia',
            link: '/',
            img: Indonesia
        },
        {
            _id: 100,
            name: 'Iran',
            link: '/',
            img: Iran
        },
        {
            _id: 101,
            name: 'Thailand',
            link: '/',
            img: Thailand
        },
        {
            _id: 102,
            name: 'SouthKorea',
            link: '/',
            img: SouthKorea
        },
        {
            _id: 103,
            name: 'Iraq ',
            link: '/',
            img: Iraq 
        },
        {
            _id: 104,
            name: 'Afghanistan',
            link: '/',
            img: Afghanistan
        },
        {
            _id: 105,
            name: 'Saudiarabia',
            link: '/',
            img: Saudiarabia
        },
        {
            _id: 106,
            name: 'Yemen',
            link: '/',
            img: Yemen
        },
        {
            _id: 107,
            name: 'Nepal',
            link: '/',
            img: Nepal
        },
        {
            _id: 108,
            name: 'Syria',
            link: '/',
            img: Syria
        },
        {
            _id: 109,
            name: 'Jordan',
            link: '/',
            img: Jordan
        },
        {
            _id: 110,
            name: 'Azerbaijan',
            link: '/',
            img: Azerbaijan
        },
        {
            _id: 111,
            name: 'Tajikistan',
            link: '/',
            img: Tajikistan
        },
        {
            _id: 112,
            name: 'Laos',
            link: '/',
            img: Laos
        },
        {
            _id: 113,
            name: 'Lebanon',
            link: '/',
            img: Lebanon
        },
        {
            _id: 114,
            name: 'Kyrgyzstan',
            link: '/',
            img: Kyrgyzstan
        },
        {
            _id: 115,
            name: 'Turkmenistan',
            link: '/',
            img: Turkmenistan
        },
        {
            _id: 116,
            name: 'Oman',
            link: '/',
            img: Oman
        },
        {
            _id: 117,
            name: 'State of Palestaine',
            link: '/',
            img: Palestaine
        },
        {
            _id: 118,
            name: 'Kuwait',
            link: '/',
            img: Kuwait
        },
        {
            _id: 119,
            name: 'Georgia',
            link: '/',
            img: Georgia
        },
        {
            _id: 120,
            name: 'Mongolia',
            link: '/',
            img: Mongolia
        },
        {
            _id: 121,
            name: 'Armenia',
            link: '/',
            img: Armenia
        },
        {
            _id: 122,
            name: 'Bahrain',
            link: '/',
            img: Bahrain
        },
        {
            _id: 123,
            name: 'Timor-Leste',
            link: '/',
            img: TimorLeste
        },
        {
            _id: 124,
            name: 'Cyprus',
            link: '/',
            img: Cyprus
        },
        {
            _id: 125,
            name: 'Bhutan',
            link: '/',
            img: Bhutan
        },
        {
            _id: 126,
            name: 'Maldives',
            link: '/',
            img: Maldives
        },
        {
            _id: 127,
            name: 'Brunei',
            link: '/',
            img: Brunei
        },
        {
            _id: 128,
            name: 'Chile',
            link: '/',
            img: Chile
        },
        {
            _id: 129,
            name: 'Guatemala',
            link: '/',
            img: Guatemala
        },
        {
            _id: 130,
            name: 'Bolivia',
            link: '/',
            img: Bolivia
        },
        {
            _id: 131,
            name: 'Haiti',
            link: '/',
            img: Bolivia
        },
        {
            _id: 132,
            name: 'Dominicana',
            link: '/',
            img: Bolivia
        },
        {
            _id: 133,
            name: 'Ethiopia',
            link: '/',
            img: Bolivia
        },
        {
            _id: 134,
            name: 'Honduras',
            link: '/',
            img: Bolivia
        },
        {
            _id: 135,
            name: 'Nicaragua',
            link: '/',
            img: Bolivia
        },
        {
            _id: 136,
            name: 'El Salvador',
            link: '/',
            img: Bolivia
        },
        {
            _id: 137,
            name: 'Costarica',
            link: '/',
            img: Bolivia
        },
        {
            _id: 138,
            name: 'Panama',
            link: '/',
            img: Bolivia
        },
        {
            _id: 139,
            name: 'Uruguay',
            link: '/',
            img: Bolivia
        },
        {
            _id: 140,
            name: 'Jamaica',
            link: '/',
            img: Bolivia
        },
        {
            _id: 141,
            name: 'Trinidad and T',
            link: '/',
            img: Bolivia
        },
        {
            _id: 142,
            name: 'Guyana',
            link: '/',
            img: Bolivia
        },
        {
            _id: 143,
            name: 'Suriname',
            link: '/',
            img: Bolivia
        },
        {
            _id: 144,
            name: 'Belize',
            link: '/',
            img: Bolivia
        },
        {
            _id: 145,
            name: 'Bahamas',
            link: '/',
            img: Bolivia
        },
        {
            _id: 146,
            name: 'Barbados',
            link: '/',
            img: Bolivia
        },
        {
            _id: 147,
            name: 'Saintlucia',
            link: '/',
            img: Bolivia
        },
        {
            _id: 148,
            name: 'Grenada',
            link: '/',
            img: Bolivia
        },
        {
            _id: 149,
            name: 'Saintvincentan',
            link: '/',
            img: Bolivia
        },
        {
            _id: 150,
            name: 'Antiguaandbar',
            link: '/',
            img: Bolivia
        },
        {
            _id: 151,
            name: 'Dominica',
            link: '/',
            img: Bolivia
        },
        {
            _id: 152,
            name: 'Saintkittsandn',
            link: '/',
            img: Bolivia
        },
        {
            _id: 153,
            name: 'Papuanewguini',
            link: '/',
            img: Bolivia
        },
        {
            _id: 154,
            name: 'Solomonisland',
            link: '/',
            img: Bolivia
        },
        {
            _id: 155,
            name: 'Micronesia',
            link: '/',
            img: Bolivia
        },
        {
            _id: 156,
            name: 'Vanuatu',
            link: '/',
            img: Bolivia
        },
        {
            _id: 157,
            name: 'Samoa',
            link: '/',
            img: Bolivia
        },
        {
            _id: 158,
            name: 'Kiribati',
            link: '/',
            img: Bolivia
        },
        {
            _id: 159,
            name: 'Tonga',
            link: '/',
            img: Bolivia
        },
        {
            _id: 160,
            name: 'Marshall Island',
            link: '/',
            img: Bolivia
        },
        {
            _id: 161,
            name: 'Palau',
            link: '/',
            img: Bolivia
        },
        {
            _id: 162,
            name: 'Tuvalu',
            link: '/',
            img: Bolivia
        },
        {
            _id: 163,
            name: 'Nauru',
            link: '/',
            img: Bolivia
        },
        {
            _id: 164,
            name: 'Drcongo',
            link: '/',
            img: Bolivia
        },
        {
            _id: 165,
            name: 'Kenya',
            link: '/',
            img: Bolivia
        },
        {
            _id: 166,
            name: 'Uganda',
            link: '/',
            img: Bolivia
        },
        {
            _id: 167,
            name: 'Sudan',
            link: '/',
            img: Bolivia
        },
        {
            _id: 168,
            name: 'Madagascar',
            link: '/',
            img: Bolivia
        },
        {
            _id: 169,
            name: 'Cameroon',
            link: '/',
            img: Bolivia
        },
        {
            _id: 170,
            name: 'Cote dlvoire',
            link: '/',
            img: Bolivia
        },
        {
            _id: 171,
            name: 'Niger',
            link: '/',
            img: Bolivia
        },
        {
            _id: 172,
            name: 'Burkinafaso',
            link: '/',
            img: Bolivia
        },
        {
            _id: 173,
            name: 'Mali',
            link: '/',
            img: Bolivia
        },
        {
            _id: 174,
            name: 'Senegal',
            link: '/',
            img: Bolivia
        },
        {
            _id: 175,
            name: 'Chad',
            link: '/',
            img: Bolivia
        },
        {
            _id: 176,
            name: 'Somalia',
            link: '/',
            img: Bolivia
        },
        {
            _id: 177,
            name: 'Zimbabwe',
            link: '/',
            img: Bolivia
        },
        {
            _id: 178,
            name: 'Guinea',
            link: '/',
            img: Bolivia
        },
        {
            _id: 179,
            name: 'Rwanda',
            link: '/',
            img: Bolivia
        },
        {
            _id: 180,
            name: 'Benin',
            link: '/',
            img: Bolivia
        },
        {
            _id: 181,
            name: 'Burundi',
            link: '/',
            img: Bolivia
        },
        {
            _id: 182,
            name: 'Tunisia',
            link: '/',
            img: Bolivia
        },
        {
            _id: 183,
            name: 'Southsudan',
            link: '/',
            img: Bolivia
        },
        {
            _id: 184,
            name: 'Togo',
            link: '/',
            img: Bolivia
        },
        {
            _id: 185,
            name: 'Sierraleone',
            link: '/',
            img: Bolivia
        },
        {
            _id: 186,
            name: 'Libya',
            link: '/',
            img: Bolivia
        },
        {
            _id: 187,
            name: 'Congo',
            link: '/',
            img: Bolivia
        },
        {
            _id: 188,
            name: 'Liberia',
            link: '/',
            img: Bolivia
        },
        {
            _id: 189,
            name: 'Central African',
            link: '/',
            img: Bolivia
        },
        {
            _id: 190,
            name: 'Mauritania',
            link: '/',
            img: Bolivia
        },
        {
            _id: 191,
            name: 'Eritrea',
            link: '/',
            img: Bolivia
        },
        {
            _id: 192,
            name: 'Gambia',
            link: '/',
            img: Bolivia
        },
        {
            _id: 193,
            name: 'Guineabissau',
            link: '/',
            img: Bolivia
        },
        {
            _id: 194,
            name: 'Equatorialguin',
            link: '/',
            img: Bolivia
        },
        {
            _id: 195,
            name: 'Mauritius',
            link: '/',
            img: Bolivia
        },
        {
            _id: 196,
            name: 'Eswatini',
            link: '/',
            img: Bolivia
        },
        {
            _id: 197,
            name: 'Djibouti',
            link: '/',
            img: Bolivia
        },
        {
            _id: 198,
            name: 'Comoros',
            link: '/',
            img: Bolivia
        },
        {
            _id: 199,
            name: 'Cabo Verde',
            link: '/',
            img: Bolivia
        },
        {
            _id: 200,
            name: 'Saotomeandpn',
            link: '/',
            img: Bolivia
        },
        {
            _id: 201,
            name: 'Seychelles',
            link: '/',
            img: Bolivia
        },
        {
            _id: 202,
            name: 'Montserrat',
            link: '/',
            img: Bolivia
        },
        {
            _id: 203,
            name: 'Newcaledonia',
            link: '/',
            img: Bolivia
        },
        {
            _id: 204,
            name: 'Puertorico',
            link: '/',
            img: Bolivia
        },
        {
            _id: 205,
            name: 'Tit',
            link: '/',
            img: Bolivia
        },
        {
            _id: 206,
            name: 'Turksandcaico',
            link: '/',
            img: Bolivia
        },
        {
            _id: 207,
            name: 'Virginislands',
            link: '/',
            img: Bolivia
        },
        {
            _id: 208,
            name: 'Reunion',
            link: '/',
            img: Bolivia
        },
        {
            _id: 209,
            name: 'Bih',
            link: '/',
            img: Bolivia
        },
        {
            _id: 210,
            name: 'Capeverde',
            link: '/',
            img: Bolivia
        },
        {
            _id: 211,
            name: 'Guadeloupe',
            link: '/',
            img: Bolivia
        },
        {
            _id: 212,
            name: 'Frenchguiana',
            link: '/',
            img: Bolivia
        },
        {
            _id: 213,
            name: 'Easttimor',
            link: '/',
            img: Bolivia
        },
        {
            _id: 214,
            name: 'Ivorycoast',
            link: '/',
            img: Bolivia
        },
        {
            _id: 215,
            name: 'Anguilla',
            link: '/',
            img: Bolivia
        },
        {
            _id: 216,
            name: 'Aruba',
            link: '/',
            img: Bolivia
        },
        {
            _id: 217,
            name: 'Caymanislands',
            link: '/',
            img: Bolivia
        },
    ]
    const [searchCountry, setSearchCountry] = useState("");
  return (
    <div className='border-2 border-gray-300 p-2 rounded'>
    <input className='px-2 rounded w-full py-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-[#BD902D] border-2 border-[#BD902D]' type="text" placeholder='Search for a Country' onChange={(event) => {setSearchCountry(event.target.value)}} />
    <div className=' my-4'>
    <div className='grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 lg:gap-3 country'>
        {
            products.filter((val)=> {
                if(searchCountry == "") {
                    return val
                } else if (val.name.toLowerCase().includes(searchCountry.toLowerCase())) {
                    return val
                }
            }).map(product => <CountryCard
             key={product._id}
             product={product}
             ></CountryCard>)
        }
    </div>
        
    </div>
</div>
    
  )
}

export default Country