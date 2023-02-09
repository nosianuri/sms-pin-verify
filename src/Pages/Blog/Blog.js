import React from 'react'
import './Blog.css'
import BlogCards from './BlogCards'

const Blog = () => {
    return (
        <div className='bg-[#f8f9fa]'>
            <div className='max-w-7xl mx-auto py-10'>
                <div className='blogbody'>
                    <div>
                        <h1 className='text-3xl'>Blog about 5SIM — service for receiving SMS and activating accounts on any site that require SMS verification</h1>
                        <BlogCards />
                    </div>
                    <div>
                        <div className='bg-white shadow-xl p-5'>
                            <h2>Recent Posts</h2>
                            <ul className='ul-article'>
                                <li><a className='hover:text-[#5bc0de]' href="/">Brazil virtual numbers</a></li>
                                <li><a className='hover:text-[#5bc0de]' href="/">How to create a Classic Rummy account without a phone number</a></li>
                                <li><a className='hover:text-[#5bc0de]' href="/">How to create a new account without a phone number</a></li>
                                <li><a className='hover:text-[#5bc0de]' href="/">How to create a Mail.ru account without a phone number</a></li>
                                <li><a className='hover:text-[#5bc0de]' href="/">How to create an Eneba account without a phone number</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Blog