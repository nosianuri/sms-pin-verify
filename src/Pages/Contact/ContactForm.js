import React from 'react'
import './Contact.css'

const ContactForm = () => {
    return (
        <div className='lg:w-[600px] mx-auto'>
            <div className='mb-16 bg-[#f0f0f0] border-8 border-[#f0f0f0] rounded-t-xl shadow-xl'>
                <div className='p-5'>
                    <div className='grid grid-cols-1 py-5 lg:gap-4'>
                        <div>
                            <label htmlFor="">Your Name <em className='text-[#f37777]'>*</em></label>
                            <input className='mt-1 px-2 rounded w-full py-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-[#5bc0de]' type="text" name='name'  />
                        </div>
                        <div>
                            <label htmlFor="">Your Email <em className='text-[#f37777]'>*</em></label>
                            <input className='mt-1 px-2 rounded w-full py-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-[#5bc0de]' type="text" name='email'  />
                        </div>
                        <div>
                            <label htmlFor="">Phone Number</label>
                            <input className='mt-1 px-2 rounded w-full py-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-[#5bc0de]' type="text" name='phone'  />
                        </div>
                        <div>
                            <label htmlFor="">Subject</label>
                            <input className='mt-1 px-2 rounded w-full py-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-[#5bc0de]' type="text" name='subject'  />
                        </div>
                        <div>
                            <label htmlFor="">Message</label>
                            <textarea className='mt-1 rounded w-full p-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-[#5bc0de]' name="message" id="" cols="50" rows="3"  ></textarea>
                        </div>
                    </div>
                    <div className='text-center  rounded my-5'>
                        <a href="/">
                            <button className='uppercase text-xl py-2 px-4 font-semibold text-white bg-[#5bc0de]'>Submit </button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactForm