import React from 'react'
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
        price: '3.50',
        img: "⭐"
    },
    {
        _id: 3,
        name: 'Google Voice 3',
        link: '/',
        price: '3.00',
        img: "⭐"
    },
    {
        _id: 4,
        name: 'Chispa',
        link: '/',
        price: '0.75',
        img: "⭐"
    },
    {
        _id: 5,
        name: 'Chispa 3',
        link: '/',
        price: '0.40',
        img: "⭐"
    },
    {
        _id: 6,
        name: 'Chispa 2',
        link: '/',
        price: '0.50',
        img: "⭐"
    },
    {
        _id: 7,
        name: 'Gmail',
        link: '/',
        price: '0.20',
        img: "⭐"
    },
    {
        _id: 8,
        name: 'Amazon',
        link: '/',
        price: '0.20',
        img: "⭐"
    },
    {
        _id: 9,
        name: 'Survey Junkie',
        link: '/',
        price: '0.25',
        img: "⭐"
    },
    {
        _id: 10,
        name: 'Survey Junkie 2',
        link: '/',
        price: '0.38',
        img: "⭐"
    },
    {
        _id: 11,
        name: 'Amazon 2',
        link: '/',
        price: '0.20',
        img: "⭐"
    },
    {
        _id: 12,
        name: 'Survey Junkie 3',
        link: '/',
        price: '0.38',
        img: "⭐"
    },
    {
        _id: 13,
        name: 'Craigslist',
        link: '/',
        img: "⭐"
    },
    {
        _id: 14,
        name: 'Craigslist 2',
        link: '/',
        price: '0.20',
        img: "⭐"
    },
    {
        _id: 15,
        name: 'Craigslist 7',
        link: '/',
        price: '1.20',
        img: "⭐"
    },
    {
        _id: 16,
        name: 'Google Voice',
        link: '/',
        img: "⭐"
    },
    {
        _id: 17,
        name: 'Google Voice',
        link: '/',
        img: "⭐"
    },
    {
        _id: 18,
        name: 'Google Voice',
        link: '/',
        img: "⭐"
    },
    {
        _id: 19,
        name: 'Google Voice',
        link: '/',
        img: "⭐"
    },
    {
        _id: 20,
        name: 'Google Voice',
        link: '/',
        img: "⭐"
    },
    {
        _id: 1,
        name: 'Google Voice',
        link: '/',
        img: "⭐"
    },
    {
        _id: 1,
        name: 'Google Voice',
        link: '/',
        img: "⭐"
    },
    {
        _id: 1,
        name: 'Google Voice',
        link: '/',
        img: "⭐"
    },
    {
        _id: 1,
        name: 'Google Voice',
        link: '/',
        img: "⭐"
    },
    {
        _id: 1,
        name: 'Google Voice',
        link: '/',
        img: "⭐"
    },
    {
        _id: 1,
        name: 'Google Voice',
        link: '/',
        img: "⭐"
    },
    {
        _id: 1,
        name: 'Google Voice',
        link: '/',
        img: "⭐"
    },
    {
        _id: 1,
        name: 'Google Voice',
        link: '/',
        img: "⭐"
    },
    {
        _id: 1,
        name: 'Google Voice',
        link: '/',
        img: "⭐"
    },
    {
        _id: 1,
        name: 'Google Voice',
        link: '/',
        img: "⭐"
    },
    {
        _id: 1,
        name: 'Google Voice',
        link: '/',
        img: "⭐"
    },
    {
        _id: 1,
        name: 'Google Voice',
        link: '/',
        img: "⭐"
    },
  ]
  return (
    <div className='grid lg:grid-cols-1 md:grid-cols-1 grid-cols-1 lg:gap-6 country'>
        {
            apps.map(app => <AppCard
             key={app._id}
             app={app}
             ></AppCard>)
        }
    </div>
  )
}

export default App