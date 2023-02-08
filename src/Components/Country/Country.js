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
import Sweden from '../../assets/sweden.png';
import Denmark from '../../assets/denmark.png';
import Netherland from '../../assets/netherlands.png';
import Ecuador from '../../assets/ecuador.png';
import Austria from '../../assets/austria.png';
import Czech from '../../assets/czech.png';
import Norway from '../../assets/norway.png';
import Luxembourg from '../../assets/luxenbourg.png';
import Belgium from '../../assets/belgium.png';
import Poland from '../../assets/poland.png';
import Finland from '../../assets/finland.png';
import Hungary from '../../assets/hungary.png';
import Ireland from '../../assets/ireland.png';
import Portugal from '../../assets/portugal.png';
import Greece from '../../assets/greece.png';
import Bosnia from '../../assets/bosnia.png';
import Bulgaria from '../../assets/bulgaria.png';
import Slovakia from '../../assets/slovakia.png';
import Belarus from '../../assets/belarus.png';
import Serbia from '../../assets/serbia.png';
import Croatia from '../../assets/croatia.png';
import Moldova from '../../assets/moldova.png';
import Israel from '../../assets/israel.png';
import Albania from '../../assets/albania.png';
import Lithuania from '../../assets/lithuania.png';
import Northmacedor from '../../assets/northmacedor.png';
import Slovenia from '../../assets/slovania.png';
import Latvia from '../../assets/latvia.png';
import Estonia from '../../assets/estonia.png';
import Montenegro from '../../assets/montenegro.png';
import Malta from '../../assets/malta.png';
import Iceland from '../../assets/iceland.png';
import Andorra from '../../assets/andora.png';
import Monaco from '../../assets/monaco.png';
import Liechtenstein from '../../assets/liechtense.png';
import SanMarino from '../../assets/sanmarino.png';
import Holysee from '../../assets/holy-see.png';
import Australia from '../../assets/australia.png';
import Newzealand from '../../assets/newzealand.png';
import Fiji from '../../assets/fiji.png';
import Paraguay from '../../assets/paraguya.png';
import Cuba from '../../assets/cuba.png';
import Japan from '../../assets/japan.png';
import Hongkong from '../../assets/hongkong.png';
import Macao from '../../assets/macao.png';
import Taiwan from '../../assets/taiwan.png';
import Quatar from '../../assets/qatar.png';
import Singapore from '../../assets/singapore.png';
import Uae from '../../assets/uae.png';
import Kazakhstan from '../../assets/kazakhstan.png';
import Malaysia from '../../assets/malaysia.png';
import Philippines from '../../assets/philippines.png';
import Turkey from '../../assets/turkey.png';
import Uzbekistan from '../../assets/uzbekistan.png';
import Srilanka from '../../assets/srilonka.png';
import Cambodia from '../../assets/cambodia.png';
import NorthKorea from '../../assets/northkorea.png';
import Indonesia from '../../assets/indonesia.png';
import Iran from '../../assets/iran.png';
import Thailand from '../../assets/thailand.png';
import SouthKorea from '../../assets/southkorea.png';
import Iraq from '../../assets/iraq.png';
import Afghanistan from '../../assets/afghanistan.png';
import Saudiarabia from '../../assets/saudiarabia.png';
import Yemen from '../../assets/yemen.png';
import Nepal from '../../assets/nepal.png';
import Syria from '../../assets/syria.png';
import Jordan from '../../assets/jordan.png';
import Azerbaijan from '../../assets/azerbaijan.png';
import Tajikistan from '../../assets/tajikistan.png';
import Laos from '../../assets/laos.png';
import Lebanon from '../../assets/lebanon.png';
import Kyrgyzstan from '../../assets/kyrgyzstan.png';
import Turkmenistan from '../../assets/turkmenistan.png';
import Oman from '../../assets/oman.png';
import Palestaine from '../../assets/palestain.png';
import Kuwait from '../../assets/kuwait.png';
import Georgia from '../../assets/georgia.png';
import Mongolia from '../../assets/mongolia.png';
import Armenia from '../../assets/armenia.png';
import Bahrain from '../../assets/bahrain.png';
import TimorLeste from '../../assets/timorleste.png';
import Cyprus from '../../assets/cyprus.png';
import Bhutan from '../../assets/bhutane.png';
import Maldives from '../../assets/maldives.png';
import Brunei from '../../assets/brunei.png';
import Chile from '../../assets/chile.png';
import Guatemala from '../../assets/guatemala.png';
import Bolivia from '../../assets/bolivia.png';
import Haiti from '../../assets/haiti.png';
import Dominicana from '../../assets/dominicana.png';
import Ethiopia from '../../assets/ethiopia.png';
import Honduras from '../../assets/honduras.png';
import Nicaragua from '../../assets/nicaragua.png';
import ElSalvador from '../../assets/elsalvador.png';
import Costarica from '../../assets/costarica.png';
import Panama from '../../assets/panama.png';
import Uruguay from '../../assets/uruguay.png';
import Jamaica from '../../assets/jamaica.png';
import Trinidad from '../../assets/trinidad.png';
import Guyana from '../../assets/guyana.png';
import Suriname from '../../assets/suriname.png';
import Belize from '../../assets/belize.png';
import Bahamas from '../../assets/bahamas.png';
import Barbados from '../../assets/barbados.png';
import Saintlucia from '../../assets/saintlucia.png';
import Grenada from '../../assets/grenada.png';
import Saintvincentan from '../../assets/saintvincentan.png';
import Antiguaandbar from '../../assets/antiguaandbar.png';
import Dominica from '../../assets/dominicana.png';
import Saintkittsan from '../../assets/saintkittsandn.png';
import Papuanewguini from '../../assets/papuanewguini.png';
import Solomonisland from '../../assets/solomonisland.png';
import Micronesia from '../../assets/micronesia.png';
import Vanuatu from '../../assets/vanuatu.png';
import Samoa from '../../assets/samoa.png';
import Kiribati from '../../assets/kiribati.png';
import Tonga from '../../assets/tonga.png';
import MarshallIsland from '../../assets/marshallisland.png';
import Palau from '../../assets/palau.png';
import Tuvalu from '../../assets/tuvalu.png';
import Nauru from '../../assets/nauru.png';
import Drcongo from '../../assets/drcongo.png';
import Kenya from '../../assets/kenya.png';
import Uganda from '../../assets/uganda.png';
import Sudan from '../../assets/sudan.png';
import Madagascar from '../../assets/madagascar.png';
import cameroon from '../../assets/cameroon.png';
import CotedIvoire from '../../assets/cotedlvoire.png';
import Niger from '../../assets/niger.png';
import Burkinafaso from '../../assets/burkinafaso.png';
import Mali from '../../assets/mali.png';
import Senegal from '../../assets/senegal.png';
import chad from '../../assets/chad.png';
import Somalia from '../../assets/somalia.png';
import Zimbabwe from '../../assets/zimbabwe.png';
import Guinea from '../../assets/guinea.png';
import Rwanda from '../../assets/rwanda.png';
import Benin from '../../assets/benin.png';
import Burundi from '../../assets/burundi.png';
import Tunisia from '../../assets/tunisia.png';
import Southsudan from '../../assets/southsudan.png';
import Togo from '../../assets/togo.png';
import Sierraleone from '../../assets/sierraleone.png';
import Libya from '../../assets/libya.png';
import Congo from '../../assets/congo.png';
import Liberia from '../../assets/liberia.png';
import CentralAfrican from '../../assets/central-africa.png';
import Mauritania from '../../assets/mauritania.png';
import Eritrea from '../../assets/eritrea.png';
import Gambia from '../../assets/gambia.png';
import Guineabissau from '../../assets/guinibassia.png';
import Equatorialguin from '../../assets/equatorialguin.png';
import Mauritius from '../../assets/mauritius.png';
import Eswatini from '../../assets/Eswatini.png';
import Djibouti from '../../assets/djibouti.png';
import Comoros from '../../assets/comors.png';
import CaboVerde from '../../assets/caboverde.png';
import Saotomeandpro from '../../assets/saotomeandp.png';
import Seychelles from '../../assets/seychelles.png';
import Monserrat from '../../assets/montserrat.png';
import Newcaledonia from '../../assets/newcaledonia.png';
import Puertorico from '../../assets/puertorico.png';
import Tit from '../../assets/tit.png';
import Turksandcaico from '../../assets/turksandcaico.png';
import Virginislands from '../../assets/virginslands.png';
import Reunion from '../../assets/reunion.png';
import Bih from '../../assets/bih.png';
import Capeverde from '../../assets/cpverde.png';
import Guadeloupe from '../../assets/guadeloupe.png';
import Frenchguiana from '../../assets/frenchguiana.png';
import Easttimor from '../../assets/eastimor.png';
import Ivorycoast from '../../assets/ivorycost.png';
import Anguilla from '../../assets/anguilla.png';
import Aruba from '../../assets/aruba.png';
import Caymanislands from '../../assets/caymanisland.png';
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
            _id: 36,
            name: 'Italy',
            link: '/',
            img: Italy
        },
        {
            _id: 37,
            name: 'Colombia',
            link: '/',
            img: Colombia
        },
        {
            _id: 38,
            name: 'Germany',
            link: '/',
            img: Germany
        },
        {
            _id: 39,
            name: 'Botswana',
            link: '/',
            img: Botswana
        },
        {
            _id: 40,
            name: 'Sweden',
            link: '/',
            img: Sweden
        },
        {
            _id: 41,
            name: 'Denmark',
            link: '/',
            img: Denmark
        },
        {
            _id: 42,
            name: 'Netherlands',
            link: '/',
            img: Netherland
        },
        {
            _id: 43,
            name: 'Ecuador',
            link: '/',
            img: Ecuador
        },
        {
            _id: 44,
            name: 'Austria',
            link: '/',
            img: Austria
        },
        {
            _id: 45,
            name: 'Czech Republic',
            link: '/',
            img: Czech
        },
        {
            _id: 46,
            name: 'Norway',
            link: '/',
            img: Norway
        },
        {
            _id: 47,
            name: 'Luxembourg ',
            link: '/',
            img: Luxembourg 
        },
        {
            _id: 48,
            name: 'Belgium',
            link: '/',
            img: Belgium
        },
        {
            _id: 49,
            name: 'Poland',
            link: '/',
            img: Poland
        },
        {
            _id: 50,
            name: 'Finland',
            link: '/',
            img: Finland
        },
        {
            _id: 51,
            name: 'Hungary',
            link: '/',
            img: Hungary
        },
        {
            _id: 52,
            name: 'Ireland',
            link: '/',
            img: Ireland
        },
        {
            _id: 53,
            name: 'Portugal',
            link: '/',
            img: Portugal
        },
        {
            _id: 54,
            name: 'Greece',
            link: '/',
            img: Greece
        },
        {
            _id: 55,
            name: 'Bosnia and He',
            link: '/',
            img: Bosnia
        },
        {
            _id: 56,
            name: 'Bulgaria',
            link: '/',
            img: Bulgaria
        },
        {
            _id: 57,
            name: 'Slovakia',
            link: '/',
            img: Slovakia
        },
        {
            _id: 58,
            name: 'Belarus',
            link: '/',
            img: Belarus
        },
        {
            _id: 59,
            name: 'Serbia',
            link: '/',
            img: Serbia
        },
        {
            _id: 60,
            name: 'Croatia',
            link: '/',
            img: Croatia
        },
        {
            _id: 61,
            name: 'Moldova',
            link: '/',
            img: Moldova
        },
        {
            _id: 62,
            name: 'Israel',
            link: '/',
            img: Israel
        },
        {
            _id: 63,
            name: 'Albania',
            link: '/',
            img: Albania
        },
        {
            _id: 64,
            name: 'Lithuania',
            link: '/',
            img: Lithuania
        },
        {
            _id: 65,
            name: 'Northmacedor',
            link: '/',
            img: Northmacedor
        },
        {
            _id: 66,
            name: 'Slovenia',
            link: '/',
            img: Slovenia
        },
        {
            _id: 67,
            name: 'Latvia',
            link: '/',
            img: Latvia
        },
        {
            _id: 68,
            name: 'Estonia',
            link: '/',
            img: Estonia
        },
        {
            _id: 69,
            name: 'Montenegro',
            link: '/',
            img: Montenegro
        },
        {
            _id: 70,
            name: 'Malta',
            link: '/',
            img: Malta
        },
        {
            _id: 71,
            name: 'Iceland',
            link: '/',
            img: Iceland
        },
        {
            _id: 72,
            name: 'Andorra',
            link: '/',
            img: Andorra
        },
        {
            _id: 73,
            name: 'Monaco',
            link: '/',
            img: Monaco
        },
        {
            _id: 74,
            name: 'Liechtenstein',
            link: '/',
            img: Liechtenstein
        },
        {
            _id: 75,
            name: 'San Marino',
            link: '/',
            img: SanMarino
        },
        {
            _id: 76,
            name: 'Holy see',
            link: '/',
            img: Holysee
        },
        {
            _id: 77,
            name: 'Australia',
            link: '/',
            img: Australia
        },
        {
            _id: 78,
            name: 'New zealand',
            link: '/',
            img: Newzealand
        },
        {
            _id: 79,
            name: 'Fiji',
            link: '/',
            img: Fiji
        },
        {
            _id: 80,
            name: 'Paraguay',
            link: '/',
            img: Paraguay
        },
        {
            _id: 81,
            name: 'Cuba',
            link: '/',
            img: Cuba
        },
        {
            _id: 82,
            name: 'Japan',
            link: '/',
            img: Japan
        },
        {
            _id: 83,
            name: 'Hongkong',
            link: '/',
            img: Hongkong
        },
        {
            _id: 84,
            name: 'Macao',
            link: '/',
            img: Macao
        },
        {
            _id: 85,
            name: 'Taiwan',
            link: '/',
            img: Taiwan
        },
        {
            _id: 86,
            name: 'Quatar',
            link: '/',
            img: Quatar
        },
        {
            _id: 87,
            name: 'Singapore',
            link: '/',
            img: Singapore
        },
        {
            _id: 88,
            name: 'Uae',
            link: '/',
            img: Uae
        },
        {
            _id: 89,
            name: 'Kazakhstan',
            link: '/',
            img: Kazakhstan
        },
        {
            _id: 90,
            name: 'Malaysia',
            link: '/',
            img: Malaysia
        },
        {
            _id: 91,
            name: 'Philippines',
            link: '/',
            img: Philippines
        },
        {
            _id: 92,
            name: 'Turkey',
            link: '/',
            img: Turkey
        },
        {
            _id: 93,
            name: 'Uzbekistan',
            link: '/',
            img: Uzbekistan
        },
        {
            _id: 94,
            name: 'Srilanka',
            link: '/',
            img: Srilanka
        },
        {
            _id: 95,
            name: 'Cambodia',
            link: '/',
            img: Cambodia
        },
        {
            _id: 96,
            name: 'NorthKorea',
            link: '/',
            img: NorthKorea
        },
        {
            _id: 97,
            name: 'Indonesia',
            link: '/',
            img: Indonesia
        },
        {
            _id: 98,
            name: 'Iran',
            link: '/',
            img: Iran
        },
        {
            _id: 99,
            name: 'Thailand',
            link: '/',
            img: Thailand
        },
        {
            _id: 100,
            name: 'SouthKorea',
            link: '/',
            img: SouthKorea
        },
        {
            _id: 101,
            name: 'Iraq ',
            link: '/',
            img: Iraq 
        },
        {
            _id: 102,
            name: 'Afghanistan',
            link: '/',
            img: Afghanistan
        },
        {
            _id: 103,
            name: 'Saudiarabia',
            link: '/',
            img: Saudiarabia
        },
        {
            _id: 104,
            name: 'Yemen',
            link: '/',
            img: Yemen
        },
        {
            _id: 105,
            name: 'Nepal',
            link: '/',
            img: Nepal
        },
        {
            _id: 106,
            name: 'Syria',
            link: '/',
            img: Syria
        },
        {
            _id: 107,
            name: 'Jordan',
            link: '/',
            img: Jordan
        },
        {
            _id: 108,
            name: 'Azerbaijan',
            link: '/',
            img: Azerbaijan
        },
        {
            _id: 109,
            name: 'Tajikistan',
            link: '/',
            img: Tajikistan
        },
        {
            _id: 110,
            name: 'Laos',
            link: '/',
            img: Laos
        },
        {
            _id: 111,
            name: 'Lebanon',
            link: '/',
            img: Lebanon
        },
        {
            _id: 112,
            name: 'Kyrgyzstan',
            link: '/',
            img: Kyrgyzstan
        },
        {
            _id: 113,
            name: 'Turkmenistan',
            link: '/',
            img: Turkmenistan
        },
        {
            _id: 114,
            name: 'Oman',
            link: '/',
            img: Oman
        },
        {
            _id: 115,
            name: 'State of Palestaine',
            link: '/',
            img: Palestaine
        },
        {
            _id: 116,
            name: 'Kuwait',
            link: '/',
            img: Kuwait
        },
        {
            _id: 117,
            name: 'Georgia',
            link: '/',
            img: Georgia
        },
        {
            _id: 118,
            name: 'Mongolia',
            link: '/',
            img: Mongolia
        },
        {
            _id: 119,
            name: 'Armenia',
            link: '/',
            img: Armenia
        },
        {
            _id: 120,
            name: 'Bahrain',
            link: '/',
            img: Bahrain
        },
        {
            _id: 121,
            name: 'Timor-Leste',
            link: '/',
            img: TimorLeste
        },
        {
            _id: 122,
            name: 'Cyprus',
            link: '/',
            img: Cyprus
        },
        {
            _id: 123,
            name: 'Bhutan',
            link: '/',
            img: Bhutan
        },
        {
            _id: 124,
            name: 'Maldives',
            link: '/',
            img: Maldives
        },
        {
            _id: 125,
            name: 'Brunei',
            link: '/',
            img: Brunei
        },
        {
            _id: 126,
            name: 'Chile',
            link: '/',
            img: Chile
        },
        {
            _id: 127,
            name: 'Guatemala',
            link: '/',
            img: Guatemala
        },
        {
            _id: 128,
            name: 'Bolivia',
            link: '/',
            img: Bolivia
        },
        {
            _id: 129,
            name: 'Haiti',
            link: '/',
            img: Haiti
        },
        {
            _id: 130,
            name: 'Dominicana',
            link: '/',
            img: Dominicana
        },
        {
            _id: 131,
            name: 'Ethiopia',
            link: '/',
            img: Ethiopia
        },
        {
            _id: 132,
            name: 'Honduras',
            link: '/',
            img: Honduras
        },
        {
            _id: 133,
            name: 'Nicaragua',
            link: '/',
            img: Nicaragua
        },
        {
            _id: 134,
            name: 'El Salvador',
            link: '/',
            img: ElSalvador
        },
        {
            _id: 135,
            name: 'Costarica',
            link: '/',
            img: Costarica
        },
        {
            _id: 136,
            name: 'Panama',
            link: '/',
            img: Panama
        },
        {
            _id: 137,
            name: 'Uruguay',
            link: '/',
            img: Uruguay
        },
        {
            _id: 138,
            name: 'Jamaica',
            link: '/',
            img: Jamaica
        },
        {
            _id: 139,
            name: 'Trinidad and T',
            link: '/',
            img: Trinidad
        },
        {
            _id: 140,
            name: 'Guyana',
            link: '/',
            img: Guyana
        },
        {
            _id: 141,
            name: 'Suriname',
            link: '/',
            img: Suriname
        },
        {
            _id: 142,
            name: 'Belize',
            link: '/',
            img: Belize
        },
        {
            _id: 143,
            name: 'Bahamas',
            link: '/',
            img: Bahamas
        },
        {
            _id: 144,
            name: 'Barbados',
            link: '/',
            img: Barbados
        },
        {
            _id: 145,
            name: 'Saintlucia',
            link: '/',
            img: Saintlucia
        },
        {
            _id: 146,
            name: 'Grenada',
            link: '/',
            img: Grenada
        },
        {
            _id: 147,
            name: 'Saintvincentan',
            link: '/',
            img: Saintvincentan
        },
        {
            _id: 148,
            name: 'Antiguaandbar',
            link: '/',
            img: Antiguaandbar
        },
        {
            _id: 149,
            name: 'Dominica',
            link: '/',
            img: Dominica
        },
        {
            _id: 150,
            name: 'Saintkittsandn',
            link: '/',
            img: Saintkittsan
        },
        {
            _id: 151,
            name: 'Papuanewguini',
            link: '/',
            img: Papuanewguini
        },
        {
            _id: 152,
            name: 'Solomonisland',
            link: '/',
            img: Solomonisland
        },
        {
            _id: 153,
            name: 'Micronesia',
            link: '/',
            img: Micronesia 
        },
        {
            _id: 154,
            name: 'Vanuatu',
            link: '/',
            img: Vanuatu
        },
        {
            _id: 155,
            name: 'Samoa',
            link: '/',
            img: Samoa
        },
        {
            _id: 156,
            name: 'Kiribati',
            link: '/',
            img: Kiribati
        },
        {
            _id: 158,
            name: 'Tonga',
            link: '/',
            img: Tonga
        },
        {
            _id: 159,
            name: 'Marshall Island',
            link: '/',
            img: MarshallIsland
        },
        {
            _id: 160,
            name: 'Palau',
            link: '/',
            img: Palau
        },
        {
            _id: 161,
            name: 'Tuvalu',
            link: '/',
            img: Tuvalu
        },
        {
            _id: 162,
            name: 'Nauru',
            link: '/',
            img: Nauru
        },
        {
            _id: 163,
            name: 'Drcongo',
            link: '/',
            img: Drcongo
        },
        {
            _id: 164,
            name: 'Kenya',
            link: '/',
            img: Kenya
        },
        {
            _id: 165,
            name: 'Uganda',
            link: '/',
            img: Uganda
        },
        {
            _id: 166,
            name: 'Sudan',
            link: '/',
            img: Sudan
        },
        {
            _id: 167,
            name: 'Madagascar',
            link: '/',
            img: Madagascar
        },
        {
            _id: 168,
            name: 'Cameroon',
            link: '/',
            img: cameroon
        },
        {
            _id: 169,
            name: 'Cote dlvoire',
            link: '/',
            img: CotedIvoire
        },
        {
            _id: 170,
            name: 'Niger',
            link: '/',
            img: Niger
        },
        {
            _id: 171,
            name: 'Burkinafaso',
            link: '/',
            img: Burkinafaso
        },
        {
            _id: 172,
            name: 'Mali',
            link: '/',
            img: Mali
        },
        {
            _id: 173,
            name: 'Senegal',
            link: '/',
            img: Senegal
        },
        {
            _id: 174,
            name: 'Chad',
            link: '/',
            img: chad
        },
        {
            _id: 175,
            name: 'Somalia',
            link: '/',
            img: Somalia
        },
        {
            _id: 176,
            name: 'Zimbabwe',
            link: '/',
            img: Zimbabwe
        },
        {
            _id: 177,
            name: 'Guinea',
            link: '/',
            img: Guinea
        },
        {
            _id: 178,
            name: 'Rwanda',
            link: '/',
            img: Rwanda
        },
        {
            _id: 179,
            name: 'Benin',
            link: '/',
            img: Benin
        },
        {
            _id: 180,
            name: 'Burundi',
            link: '/',
            img: Burundi
        },
        {
            _id: 181,
            name: 'Tunisia',
            link: '/',
            img: Tunisia
        },
        {
            _id: 182,
            name: 'Southsudan',
            link: '/',
            img: Southsudan
        },
        {
            _id: 183,
            name: 'Togo',
            link: '/',
            img: Togo
        },
        {
            _id: 184,
            name: 'Sierraleone',
            link: '/',
            img: Sierraleone
        },
        {
            _id: 185,
            name: 'Libya',
            link: '/',
            img: Libya
        },
        {
            _id: 186,
            name: 'Congo',
            link: '/',
            img: Congo
        },
        {
            _id: 187,
            name: 'Liberia',
            link: '/',
            img: Liberia
        },
        {
            _id: 188,
            name: 'Central African',
            link: '/',
            img: CentralAfrican
        },
        {
            _id: 189,
            name: 'Mauritania',
            link: '/',
            img: Mauritania
        },
        {
            _id: 190,
            name: 'Eritrea',
            link: '/',
            img: Eritrea
        },
        {
            _id: 191,
            name: 'Gambia',
            link: '/',
            img: Gambia
        },
        {
            _id: 192,
            name: 'Guineabissau',
            link: '/',
            img: Guineabissau
        },
        {
            _id: 193,
            name: 'Equatorialguin',
            link: '/',
            img: Equatorialguin
        },
        {
            _id: 194,
            name: 'Mauritius',
            link: '/',
            img: Mauritius
        },
        {
            _id: 195,
            name: 'Eswatini',
            link: '/',
            img: Eswatini
        },
        {
            _id: 196,
            name: 'Djibouti',
            link: '/',
            img: Djibouti
        },
        {
            _id: 197,
            name: 'Comoros',
            link: '/',
            img: Comoros
        },
        {
            _id: 198,
            name: 'Cabo Verde',
            link: '/',
            img: CaboVerde
        },
        {
            _id: 199,
            name: 'Saotomeandpn',
            link: '/',
            img: Saotomeandpro
        },
        {
            _id: 200,
            name: 'Seychelles',
            link: '/',
            img: Seychelles
        },
        {
            _id: 201,
            name: 'Montserrat',
            link: '/',
            img: Monserrat
        },
        {
            _id: 202,
            name: 'Newcaledonia',
            link: '/',
            img: Newcaledonia
        },
        {
            _id: 203,
            name: 'Puertorico',
            link: '/',
            img: Puertorico
        },
        {
            _id: 204,
            name: 'Tit',
            link: '/',
            img: Tit 
        },
        {
            _id: 205,
            name: 'Turksandcaico',
            link: '/',
            img: Turksandcaico
        },
        {
            _id: 206,
            name: 'Virginislands',
            link: '/',
            img: Virginislands
        },
        {
            _id: 207,
            name: 'Reunion',
            link: '/',
            img: Reunion
        },
        {
            _id: 208,
            name: 'Bih',
            link: '/',
            img: Bih
        },
        {
            _id: 209,
            name: 'Capeverde',
            link: '/',
            img: Capeverde
        },
        {
            _id: 210,
            name: 'Guadeloupe',
            link: '/',
            img: Guadeloupe
        },
        {
            _id: 211,
            name: 'Frenchguiana',
            link: '/',
            img: Frenchguiana
        },
        {
            _id: 212,
            name: 'Easttimor',
            link: '/',
            img: Easttimor
        },
        {
            _id: 213,
            name: 'Ivorycoast',
            link: '/',
            img: Ivorycoast
        },
        {
            _id: 214,
            name: 'Anguilla',
            link: '/',
            img: Anguilla
        },
        {
            _id: 215,
            name: 'Aruba',
            link: '/',
            img: Aruba
        },
        {
            _id: 216,
            name: 'Caymanislands',
            link: '/',
            img: Caymanislands
        },
    ]
    const [searchCountry, setSearchCountry] = useState("");
  return (
    <div className='border-2 border-gray-300 p-2 rounded'>
    <input className='px-2 rounded w-full py-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-[#5bc0de] border-2 border-[#5bc0de]' type="text" placeholder='Search for a Country' onChange={(event) => {setSearchCountry(event.target.value)}} />
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