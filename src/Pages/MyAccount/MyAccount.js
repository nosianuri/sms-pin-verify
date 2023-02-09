import React from 'react'

const MyAccount = () => {
    return (
        <div className='max-w-7xl mx-auto px-3'>
            <div className='mt-8'>
                <h3 className='text-3xl mb-2'>Account Settings</h3>
                <hr />
            </div>
            <form>
                <div className='grid lg;grid-cols-3 grid-cols-1 gap-10 mt-10 mb-5'>
                    <div>
                        <label htmlFor="">Full Name</label>
                        <br />
                        <input className='px-2 rounded w-full py-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-[#5bc0de] border-2 border-[#5bc0de]' type="text" />
                    </div>
                    <div>
                        <label htmlFor="">Email</label>
                        <br />
                        <input className='px-2 rounded w-full py-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-[#5bc0de] border-2 border-[#5bc0de]' type="text" />
                    </div>
                    <div>
                        <label htmlFor="">Username</label>
                        <br />
                        <input className='px-2 rounded w-full py-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-[#5bc0de] border-2 border-[#5bc0de]' type="text" />
                    </div>

                </div>
                <div className='grid grid-cols-2 gap-10'>
                    <div>
                        <label htmlFor="">Country <em className='text-[#c85f5f]'>*</em></label>
                        <br />
                        <input className='px-2 rounded w-full py-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-[#5bc0de] border-2 border-[#5bc0de]' type="text" />
                    </div>
                    <div>
                        <label htmlFor="">Mobile Number <em className='text-[#c85f5f]'>*</em></label>
                        <br />
                        <input className='px-2 rounded w-full py-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-[#5bc0de] border-2 border-[#5bc0de]' type="text" />
                    </div>
                </div>
                <div className='mt-8'>
                    <h3 className='text-3xl mb-2'>Change Password</h3>
                    <hr />
                </div>
                <div className='grid lg:grid-cols-3 grid-cols-1 gap-10 mt-10 mb-5'>
                    <div>
                        <label htmlFor="">Current Password</label>
                        <br />
                        <input className='px-2 rounded w-full py-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-[#5bc0de] border-2 border-[#5bc0de]' type="text" />
                    </div>
                    <div>
                        <label htmlFor="">New Password</label>
                        <br />
                        <input className='px-2 rounded w-full py-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-[#5bc0de] border-2 border-[#5bc0de]' type="text" />
                    </div>
                    <div>
                        <label htmlFor="">Confirm New Password</label>
                        <br />
                        <input className='px-2 rounded w-full py-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-[#5bc0de] border-2 border-[#5bc0de]' type="text" />
                    </div>

                </div>
                <div className='flex gap-8 justify-center items-center my-8'>
                    <a href="/">
                        <button className='bg-[#349cbc] py-1 px-3 rounded font-semibold hover:bg-[#5bc0de] text-white'><i class="fa-solid fa-check pr-1"></i>Submit</button>
                    </a>
                    <a href="/">
                        <button className='hover:text-[#5bc0de] font-semibold'><i class="fa-solid fa-xmark pr-1"></i>Cancel</button>
                    </a>

                </div>
            </form>
        </div>
    )
}

export default MyAccount