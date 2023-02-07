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
                                <li>Brazil virtual numbers</li>
                                <li>How to create a Classic Rummy account without a phone number</li>
                                <li>How to create a Dahadaha account without a phone number</li>
                                <li>How to create a Mail.ru account without a phone number</li>
                                <li>How to create an Eneba account without a phone number</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Blog