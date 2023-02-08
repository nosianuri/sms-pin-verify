import React, { useState } from 'react'

const Message = ({setModal}) => {
  
  return (
    <div className='w-screen h-screen bg-black bg-opacity-30 fixed top-0 right-0 flex justify-center items-center'>
        <div className='bg-white p-10 rounded-md shadow-md'>
            <h1 className='font-bold text-lg my-5'>Send a Message to Support</h1>
            <hr />
            <label htmlFor="">Subject</label>
            <br />
            <input className='px-2 rounded w-96 py-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-[#5bc0de] border-2 border-[#5bc0de]' type="text" />
            <br />
            <label htmlFor="">Message</label>
            <br />
            <textarea className='px-2 rounded w-96 py-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-[#5bc0de] border-2 border-[#5bc0de]' type="text" />
            <div className='flex justify-between mt-5'>
                <button className='outline outline-1 outline-[#101f20] bg-[#101f20] text-white py-2 px-4 hover:bg-transparent hover:text-black' onClick={() => setModal(false)}>Cancel</button>
                <button className='outline outline-1 outline-[#101f20] hover:bg-[#101f20] hover:text-white py-2 px-4 bg-transparent text-black'>Delete</button>
            </div>
        </div>
    </div>
  )
}

export default Message