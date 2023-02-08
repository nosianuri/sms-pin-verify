import React from 'react'

const CreditBody = () => {
  return (
    <div className=' '>
    <div className='shadow-md p-5'>
        <div className='flex justify-between items-center'>
            <h3 className='text-2xl'>Your Numbers</h3>
            <input className='px-2 rounded w-46 py-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-[#5bc0de] border-2 border-[#5bc0de]' type="text" placeholder='Search Number' />
        </div>
        <hr />
        <div className='flex justify-between mt-5'>
            <h2 className='text-[#993c3c] font-semibold'>Click refresh button next to Number to get Code.</h2>
            <h2 className='text-black '><a className='hover:text-[#5bc0de]' href="/history">Credit Deduction History</a></h2>
            </div>
            <div className='flex justify-between mt-5 bg-base-300 px-3 font-semibold py-1'>
                <div className='flex gap-5'>
                    <p>Number</p>
                    <p>Codes</p>
                    <p>Time</p>
                </div>
                <div className='flex gap-5'>
                    <p>Country</p>
                    <p>App</p>
                    <p>Refresh</p>
                    <p>Reuse</p>
                    <p>Verify</p>
                </div>
        </div>
        <div className='text-center'>
            <p className='py-1'>No Numbers</p>
        </div>
        <hr />
        <div>
            <p className='text-center py-3'><a className='hover:text-[#5bc0de]' href="/codes">View All Codes</a></p>
        </div>
        </div>
    </div>
  )
}

export default CreditBody