import React from 'react'
import Country from '../Country/Country'

const LeftBody = () => {
    return (
        <div className='left-contanier'>
            <div className='border-2 border-gray-300 p-2 rounded'>
                <input className='px-2 rounded w-full py-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-[#BD902D] border-2 border-[#BD902D]' type="text" placeholder='Search for a Country' />
                <div className=' my-4'>
                    <Country />
                    
                </div>
            </div>
            
            
        </div>
    )
}

export default LeftBody