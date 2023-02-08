import React, { useState } from 'react'
import AppCard from './AppCard'

const App = () => {
    const apps = [
        {
            _id: 1,
            name: 'Google Voice',
            link: '/',
            price: '3.50',
            img: "⭐"
        },
        {
            _id: 2,
            name: 'Google Voice 2',
            link: '/',
            price: '3.00',
            img: "⭐"
        },
        {
            _id: 3,
            name: 'Google Voice 3',
            link: '/',
            price: '2.00',
            img: "⭐"
        },
        {
            _id: 4,
            name: 'Google Voice 4',
            link: '/',
            price: '1.30',
            img: "⭐"
        },
        {
            _id: 5,
            name: 'Google Voice 5',
            link: '/',
            price: '1.30',
            img: "⭐"
        },
        {
            _id: 6,
            name: 'Chispa',
            link: '/',
            price: '0.75',
            img: "⭐"
        },
        {
            _id: 7,
            name: 'Chispa 3',
            link: '/',
            price: '0.40',
            img: "⭐"
        },
        {
            _id: 8,
            name: 'Chispa 2',
            link: '/',
            price: '0.50',
            img: "⭐"
        },
        {
            _id: 9,
            name: 'Chispa 4',
            link: '/',
            price: '0.50',
            img: "⭐"
        },
        {
            _id: 10,
            name: 'Gmail',
            link: '/',
            price: '0.20',
            img: "⭐"
        },
        {
            _id: 11,
            name: 'Amazon',
            link: '/',
            price: '0.20',
            img: "⭐"
        },
        {
            _id: 12,
            name: 'Survey Junkie',
            link: '/',
            price: '0.25',
            img: "⭐"
        },

        {
            _id: 13,
            name: 'Amazon 2',
            link: '/',
            price: '0.20',
            img: "⭐"
        },
        {
            _id: 14,
            name: 'Survey Junkie 3',
            link: '/',
            price: '0.40',
            img: "⭐"
        },
        {
            _id: 15,
            name: 'Craigslist',
            link: '/',
            price: '0.25',
            img: "⭐"
        },
        {
            _id: 16,
            name: 'Craigslist 7',
            link: '/',
            price: '1.00',
            img: "⭐"
        },
        {
            _id: 17,
            name: 'Craigslist 3',
            link: '/',
            price: '1.70',
            img: "⭐"
        },
        {
            _id: 18,
            name: 'Gmail 2',
            link: '/',
            price: '0.60',
            img: "⭐"
        },
        {
            _id: 19,
            name: 'Gmail 4',
            link: '/',
            price: '0.20',
            img: "⭐"
        },
        {
            _id: 20,
            name: 'Gmail 3',
            link: '/',
            price: '0.25',
            img: "⭐"
        },
        {
            _id: 21,
            name: 'Gmail 5',
            link: '/',
            price: '0.30',
            img: "⭐"
        },
        {
            _id: 22,
            name: 'Gmail USA',
            link: '/',
            price: '0.25',
            img: "⭐"
        },
        {
            _id: 23,
            name: 'Gmail USA 2',
            link: '/',
            price: '1.00',
            img: "⭐"
        },
        {
            _id: 24,
            name: 'Gmail USA 3',
            link: '/',
            price: '0.20',
            img: "⭐"
        },
        {
            _id: 25,
            name: 'Gmail / youtube 2',
            link: '/',
            price: '3.00',
            img: "⭐"
        },
        {
            _id: 26,
            name: 'Bumble',
            link: '/',
            price: '0.30',
            img: "⭐"
        },
        {
            _id: 27,
            name: 'Tinder',
            link: '/',
            price: '0.40',
            img: "⭐"
        },
        {
            _id: 28,
            name: 'Tinder 2',
            link: '/',
            price: '1.00',
            img: "⭐"
        },
        {
            _id: 29,
            name: 'Tinder 6',
            link: '/',
            price: '1.00',
            img: "⭐"
        },
        {
            _id: 30,
            name: 'Tinder 1',
            link: '/',
            price: '1.50',
            img: "⭐"
        },
        {
            _id: 31,
            name: 'Tinder 3',
            link: '/',
            price: '0.50',
            img: "⭐"
        },
        {
            _id: 32,
            name: 'Tinder 4',
            link: '/',
            price: '0.20',
            img: "⭐"
        },
        {
            _id: 33,
            name: 'Whatsapp',
            link: '/',
            price: '2.50',
            img: "⭐"
        },
        {
            _id: 34,
            name: 'Whatsapp 2',
            link: '/',
            price: '0.30',
            img: "⭐"
        },
        {
            _id: 35,
            name: 'Whatsapp USA',
            link: '/',
            price: '0.70',
            img: "⭐"
        },
        {
            _id: 36,
            name: 'Line',
            link: '/',
            price: '0.15',
            img: "⭐"
        },
        {
            _id: 37,
            name: 'OkCupid',
            link: '/',
            price: '0.20',
            img: "⭐"
        },
        {
            _id: 38,
            name: 'OkCupid 2',
            link: '/',
            price: '0.20',
            img: "⭐"
        },
        {
            _id: 39,
            name: 'Telegram',
            link: '/',
            price: '0.20',
            img: "⭐"
        },
        {
            _id: 40,
            name: 'Telegram 2',
            link: '/',
            price: '3.50',
            img: "⭐"
        },
        {
            _id: 41,
            name: 'Telegram 6',
            link: '/',
            price: '0.20',
            img: "⭐"
        },
        {
            _id: 42,
            name: 'telegram 3',
            link: '/',
            price: '1.00',
            img: "⭐"
        },
        {
            _id: 43,
            name: 'Telegram 4',
            link: '/',
            price: '1.10',
            img: "⭐"
        },
        {
            _id: 44,
            name: 'Whatsapp 7',
            link: '/',
            price: '0.30',
            img: "⭐"
        },
        {
            _id: 45,
            name: 'BLK',
            link: '/',
            price: '0.35',
            img: "⭐"
        },
        {
            _id: 46,
            name: 'BLK 2',
            link: '/',
            price: '0.40',
            img: "⭐"
        },
        {
            _id: 47,
            name: 'BLK 4',
            link: '/',
            price: '1.00',
            img: "⭐"
        },
        {
            _id: 48,
            name: 'Zogo',
            link: '/',
            price: '0.25',
            img: "⭐"
        },
        {
            _id: 49,
            name: 'Offer Up',
            link: '/',
            price: '0.30',
            img: "⭐"
        },
        {
            _id: 50,
            name: 'Albert 2',
            link: '/',
            price: '1.10',
            img: "⭐"
        },
        {
            _id: 51,
            name: 'LinkedIn',
            link: '/',
            price: '1.00',
            img: "⭐"
        },
        {
            _id: 52,
            name: 'LinkedIn 2',
            link: '/',
            price: '0.15',
            img: "⭐"
        },
        {
            _id: 53,
            name: 'LinkedIn 4',
            link: '/',
            price: '0.15',
            img: "⭐"
        },
        {
            _id: 54,
            name: 'LinkedIn 5',
            link: '/',
            price: '0.60',
            img: "⭐"
        },
        {
            _id: 55,
            name: 'LinkedIn 7',
            link: '/',
            price: '0.75',
            img: "⭐"
        },
        {
            _id: 56,
            name: 'Freecash.com',
            link: '/',
            price: '1.10',
            img: "⭐"
        },
        {
            _id: 57,
            name: 'Gmail new1',
            link: '/',
            price: '0.20',
            img: "⭐"
        },
        {
            _id: 58,
            name: 'Telegram 2x',
            link: '/',
            price: '0.40',
            img: "⭐"
        },
        {
            _id: 59,
            name: 'Yahoo',
            link: '/',
            price: '0.40',
            img: "⭐"
        },
        {
            _id: 60,
            name: 'bid.yahoo',
            link: '/',
            price: '0.40',
            img: "⭐"
        },
        {
            _id: 61,
            name: 'Yahoo 2',
            link: '/',
            price: '0.40',
            img: "⭐"
        },
        {
            _id: 62,
            name: 'Yahoo 2x',
            link: '/',
            price: '0.25',
            img: "⭐"
        },
        {
            _id: 63,
            name: 'Yahoo 3',
            link: '/',
            price: '0.85',
            img: "⭐"
        },
        {
            _id: 64,
            name: 'Yahoo 5',
            link: '/',
            price: '1.00',
            img: "⭐"
        },
        {
            _id: 65,
            name: 'Yahoo 6',
            link: '/',
            price: '0.20',
            img: "⭐"
        },
        {
            _id: 66,
            name: 'Yahoo 7',
            link: '/',
            price: '0.35',
            img: "⭐"
        },
        {
            _id: 67,
            name: 'Yahoo 8',
            link: '/',
            price: '0.35',
            img: "⭐"
        },
        {
            _id: 68,
            name: 'Yahoo usa',
            link: '/',
            price: '0.40',
            img: "⭐"
        },
        {
            _id: 69,
            name: 'All App in USA',
            link: '/',
            price: '1.25',
            img: "⭐"
        },
        {
            _id: 70,
            name: 'AsianDating - P',
            link: '/',
            price: '0.30',
            img: "⭐"
        },
        {
            _id: 71,
            name: 'Vercel - P',
            link: '/',
            price: '0.30',
            img: "⭐"
        },
        {
            _id: 72,
            name: 'xpaylife',
            link: '/',
            price: '0.30',
            img: "⭐"
        },
        {
            _id: 73,
            name: 'edge cloud',
            link: '/',
            price: '0.30',
            img: "⭐"
        },
        {
            _id: 74,
            name: 'kickcash',
            link: '/',
            price: '0.30',
            img: "⭐"
        },
        {
            _id: 75,
            name: 'AT&T Mail',
            link: '/',
            price: '0.30',
            img: "⭐"
        },
        {
            _id: 76,
            name: 'hrblock',
            link: '/',
            price: '0.30',
            img: "⭐"
        },
        {
            _id: 77,
            name: 'bizimtoptan',
            link: '/',
            price: '0.30',
            img: "⭐"
        },
        {
            _id: 78,
            name: 'HyperPay',
            link: '/',
            price: '0.30',
            img: "⭐"
        },
        {
            _id: 79,
            name: 'EFL',
            link: '/',
            price: '0.30',
            img: "⭐"
        },
        {
            _id: 80,
            name: 'nuvama',
            link: '/',
            price: '0.30',
            img: "⭐"
        },
        {
            _id: 81,
            name: 'Whatsapp 5',
            link: '/',
            price: '0.40',
            img: "⭐"
        },
        {
            _id: 82,
            name: 'cellfin',
            link: '/',
            price: '0.30',
            img: "⭐"
        },
        {
            _id: 83,
            name: 'laki2',
            link: '/',
            price: '0.30',
            img: "⭐"
        },
        {
            _id: 84,
            name: 'WhatsApp 3',
            link: '/',
            price: '0.20',
            img: "⭐"
        },
        {
            _id: 85,
            name: 'A101pluslu',
            link: '/',
            price: '0.30',
            img: "⭐"
        },
        {
            _id: 86,
            name: 'Kraio',
            link: '/',
            price: '0.30',
            img: "⭐"
        },
        {
            _id: 87,
            name: 'WhatsApp USA 2',
            link: '/',
            price: '1.00',
            img: "⭐"
        },
        {
            _id: 88,
            name: 'WhatsApp 1',
            link: '/',
            price: '1.00',
            img: "⭐"
        },
        {
            _id: 89,
            name: 'kukufm',
            link: '/',
            price: '0.30',
            img: "⭐"
        },
        {
            _id: 90,
            name: 'Craigslist 4',
            link: '/',
            price: '1.10',
            img: "⭐"
        },
        {
            _id: 91,
            name: 'HUD',
            link: '/',
            price: '0.70',
            img: "⭐"
        },
        {
            _id: 92,
            name: 'Paypal 2',
            link: '/',
            price: '1.50',
            img: "⭐"
        },
        {
            _id: 93,
            name: 'Dialpad',
            link: '/',
            price: '0.50',
            img: "⭐"
        },
        {
            _id: 94,
            name: 'Dialpad 3',
            link: '/',
            price: '1.20',
            img: "⭐"
        },
        {
            _id: 95,
            name: 'firstcard',
            link: '/',
            price: '0.30',
            img: "⭐"
        },
        {
            _id: 96,
            name: 'Freecash',
            link: '/',
            price: '0.30',
            img: "⭐"
        },
        {
            _id: 97,
            name: 'Freshcash 2',
            link: '/',
            price: '0.80',
            img: "⭐"
        },
        {
            _id: 98,
            name: '1688 -3',
            link: '/',
            price: '0.50',
            img: "⭐"
        },
        {
            _id: 99,
            name: 'cashew',
            link: '/',
            price: '0.30',
            img: "⭐"
        },
        {
            _id: 100,
            name: 'weibo',
            link: '/',
            price: '0.20',
            img: "⭐"
        },
        {
            _id: 101,
            name: 'bigcrazy',
            link: '/',
            price: '0.30',
            img: "⭐"
        },
        {
            _id: 102,
            name: 'Chispa 4',
            link: '/',
            price: '1.20',
            img: "⭐"
        },
        {
            _id: 103,
            name: 'cineplex',
            link: '/',
            price: '0.30',
            img: "⭐"
        },
        {
            _id: 104,
            name: 'Fiverr 4',
            link: '/',
            price: '0.75',
            img: "⭐"
        },
        {
            _id: 105,
            name: 'AWS',
            link: '/',
            price: '0.30',
            img: "⭐"
        },
        {
            _id: 106,
            name: 'Facebook 3',
            link: '/',
            price: '0.20',
            img: "⭐"
        },
        {
            _id: 107,
            name: 'Flash Rewards 3',
            link: '/',
            price: '0.75',
            img: "⭐"
        },
        {
            _id: 108,
            name: 'airbnb - 6',
            link: '/',
            price: '0.50',
            img: "⭐"
        },
        {
            _id: 109,
            name: 'OpenPhone 4',
            link: '/',
            price: '0.40',
            img: "⭐"
        },
        {
            _id: 110,
            name: 'Instagram',
            link: '/',
            price: '0.20',
            img: "⭐"
        },
        {
            _id: 111,
            name: 'DasherDirect',
            link: '/',
            price: '1.15',
            img: "⭐"
        },
        {
            _id: 112,
            name: 'Chase Bank 2',
            link: '/',
            price: '1.10',
            img: "⭐"
        },
        {
            _id: 113,
            name: 'CoinDCX',
            link: '/',
            price: '0.20',
            img: "⭐"
        },
        {
            _id: 114,
            name: 'imo',
            link: '/',
            price: '0.20',
            img: "⭐"
        },
        {
            _id: 115,
            name: 'Kwai 2',
            link: '/',
            price: '1.00',
            img: "⭐"
        },
        {
            _id: 116,
            name: 'dialpad - P',
            link: '/',
            price: '0.30',
            img: "⭐"
        },
        {
            _id: 117,
            name: 'foodpanda 3',
            link: '/',
            price: '1.00',
            img: "⭐"
        },
        {
            _id: 118,
            name: 'Fotka.pl',
            link: '/',
            price: '0.30',
            img: "⭐"
        },
        {
            _id: 119,
            name: 'Kormo',
            link: '/',
            price: '0.20',
            img: "⭐"
        },
        {
            _id: 120,
            name: 'SoFl 2',
            link: '/',
            price: '1.20',
            img: "⭐"
        },
        {
            _id: 121,
            name: 'Probo',
            link: '/',
            price: '0.15',
            img: "⭐"
        },
        {
            _id: 122,
            name: 'swagbucks 3',
            link: '/',
            price: '0.75',
            img: "⭐"
        },
        {
            _id: 123,
            name: 'swagbucks 2',
            link: '/',
            price: '1.00',
            img: "⭐"
        },
        {
            _id: 124,
            name: 'fairplayfantasy',
            link: '/',
            price: '0.30',
            img: "⭐"
        },
        {
            _id: 125,
            name: 'Freecash - P',
            link: '/',
            price: '0.30',
            img: "⭐"
        },
        {
            _id: 126,
            name: 'Flash Rewards - P',
            link: '/',
            price: '0.30',
            img: "⭐"
        },
        {
            _id: 127,
            name: 'CALLME',
            link: '/',
            price: '0.30',
            img: "⭐"
        },
        {
            _id: 128,
            name: 'Dialpad',
            link: '/',
            price: '0.30',
            img: "⭐"
        },
        {
            _id: 129,
            name: 'Airtel',
            link: '/',
            price: '0.30',
            img: "⭐"
        },
        {
            _id: 130,
            name: 'Ourtime - P',
            link: '/',
            price: '0.30',
            img: "⭐"
        },
        {
            _id: 131,
            name: 'Dream11',
            link: '/',
            price: '0.30',
            img: "⭐"
        },
        {
            _id: 132,
            name: 'Gamekit - P',
            link: '/',
            price: '0.30',
            img: "⭐"
        },
        {
            _id: 133,
            name: 'hamrahaval - P',
            link: '/',
            price: '0.30',
            img: "⭐"
        },
        {
            _id: 134,
            name: 'Sikayet var - P',
            link: '/',
            price: '0.30',
            img: "⭐"
        },
        {
            _id: 135,
            name: 'Alfa - P',
            link: '/',
            price: '0.30',
            img: "⭐"
        },
        {
            _id: 136,
            name: 'Faberlic - P',
            link: '/',
            price: '0.30',
            img: "⭐"
        },
        {
            _id: 137,
            name: 'Cryptovoucher - P',
            link: '/',
            price: '0.30',
            img: "⭐"
        },
        {
            _id: 138,
            name: 'CafeBazaar - P',
            link: '/',
            price: '0.30',
            img: "⭐"
        },
        {
            _id: 139,
            name: 'humblebundle - P',
            link: '/',
            price: '0.30',
            img: "⭐"
        },
        {
            _id: 140,
            name: 'Nordstrom - P',
            link: '/',
            price: '0.30',
            img: "⭐"
        },
        {
            _id: 141,
            name: 'swagbucks - P',
            link: '/',
            price: '0.30',
            img: "⭐"
        },
        {
            _id: 142,
            name: 'Tinder - P',
            link: '/',
            price: '0.30',
            img: "⭐"
        },
        {
            _id: 143,
            name: 'MeetMe - P',
            link: '/',
            price: '0.30',
            img: "⭐"
        },
        {
            _id: 144,
            name: 'Omiai - P',
            link: '/',
            price: '0.30',
            img: "⭐"
        },
        {
            _id: 145,
            name: 'Snapchat - P',
            link: '/',
            price: '0.30',
            img: "⭐"
        },
        {
            _id: 146,
            name: 'doordash - P',
            link: '/',
            price: '0.30',
            img: "⭐"
        },
        {
            _id: 147,
            name: 'OffGamers - P',
            link: '/',
            price: '0.30',
            img: "⭐"
        },
        {
            _id: 148,
            name: 'Zuvio - P',
            link: '/',
            price: '0.30',
            img: "⭐"
        },
        {
            _id: 149,
            name: 'yemeksepeti - P',
            link: '/',
            price: '0.30',
            img: "⭐"
        },
        {
            _id: 150,
            name: 'Bumble - P',
            link: '/',
            price: '0.30',
            img: "⭐"
        },
        {
            _id: 151,
            name: 'Wedate - P',
            link: '/',
            price: '0.30',
            img: "⭐"
        },
        {
            _id: 152,
            name: 'Wish - P',
            link: '/',
            price: '0.30',
            img: "⭐"
        },
        {
            _id: 153,
            name: 'Instagram - P',
            link: '/',
            price: '0.30',
            img: "⭐"
        },
        {
            _id: 154,
            name: 'PayPal - P',
            link: '/',
            price: '0.30',
            img: "⭐"
        },
        {
            _id: 155,
            name: 'Keybase - P',
            link: '/',
            price: '0.30',
            img: "⭐"
        },
        {
            _id: 156,
            name: 'Hinge - P',
            link: '/',
            price: '0.30',
            img: "⭐"
        },
        {
            _id: 157,
            name: 'Telegram - P',
            link: '/',
            price: '0.30',
            img: "⭐"
        },
        {
            _id: 158,
            name: 'EASI - P',
            link: '/',
            price: '0.30',
            img: "⭐"
        },
        {
            _id: 159,
            name: 'zoho - p',
            link: '/',
            price: '0.30',
            img: "⭐"
        },
        {
            _id: 160,
            name: 'Aol -P',
            link: '/',
            price: '0.30',
            img: "⭐"
        },
        {
            _id: 161,
            name: 'Venmo -p',
            link: '/',
            price: '0.30',
            img: "⭐"
        },
        {
            _id: 162,
            name: 'yandex - P',
            link: '/',
            price: '0.30',
            img: "⭐"
        },
        {
            _id: 163,
            name: 'Pairs - P',
            link: '/',
            price: '0.30',
            img: "⭐"
        },
        {
            _id: 164,
            name: 'VK',
            link: '/',
            price: '0.30',
            img: "⭐"
        },
        {
            _id: 165,
            name: 'Line - P',
            link: '/',
            price: '0.30',
            img: "⭐"
        },
        {
            _id: 166,
            name: 'kapten - P',
            link: '/',
            price: '0.30',
            img: "⭐"
        },
        {
            _id: 167,
            name: 'Apple ID',
            link: '/',
            price: '0.30',
            img: "⭐"
        },
        {
            _id: 168,
            name: 'Bolt - P',
            link: '/',
            price: '0.30',
            img: "⭐"
        },
        {
            _id: 169,
            name: 'Yahoo - P',
            link: '/',
            price: '0.30',
            img: "⭐"
        },
        {
            _id: 170,
            name: 'Signal - P',
            link: '/',
            price: '0.30',
            img: "⭐"
        },
        {
            _id: 171,
            name: 'Google gmail',
            link: '/',
            price: '0.30',
            img: "⭐"
        },
        {
            _id: 172,
            name: 'Gmail - P',
            link: '/',
            price: '0.30',
            img: "⭐"
        },
    ];
    const [searchApp, setSearchApp] = useState("");
    return (
        <div className='border-2 border-gray-300 p-2 my-2 rounded'>
            <input className='px-2 rounded w-full py-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-[#5bc0de] border-2 border-[#5bc0de]' type="text" placeholder='Search for a App' onChange={(event) => {setSearchApp(event.target.value)}} />
            <div className='my-4'>
                <div className='grid lg:grid-cols-1 md:grid-cols-1 grid-cols-1 lg:gap-3 country'>
                    {
                        apps.filter((val)=> {
                if(searchApp == "") {
                    return val
                } else if (val.name.toLowerCase().includes(searchApp.toLowerCase())) {
                    return val
                }
            }).map(app => <AppCard
                            key={app._id}
                            app={app}
                        ></AppCard>)
                    }
                </div>

            </div>
        </div>

    )
}

export default App