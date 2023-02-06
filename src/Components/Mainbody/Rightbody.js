import React, { useState } from 'react';
import App from '../App/App';
import './MainBody.css';

const Rightbody = () => {

    return (
        <div className='left-contanier rounded-md'>
            <div className='border-2 border-gray-300 p-2 my-2 rounded'>
                <input className='px-2 rounded w-full py-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-[#BD902D] border-2 border-[#BD902D]' type="text" placeholder='Search for a App' />
                <div className='my-4'>
                    <App />

                </div>
            </div>
        </div>
    )
}

export default Rightbody