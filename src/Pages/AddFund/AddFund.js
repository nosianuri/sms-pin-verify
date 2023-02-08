import React from 'react'

const AddFund = () => {
    return (
        <div className='bg-[#f8f9fa]'>
            <div className='max-w-7xl mx-auto '>
                <div>
                    <h3 className='text-3xl mb-2 pt-8'>Create Top Up</h3>
                    <hr />
                </div>
                <div className='px-32 py-10'>
                    <div className='grid grid-cols-2 gap-5'>
                        <div>
                            <img className='w-10' src="https://i.ibb.co/F8g6WCv/binance.png" alt="" />
                            <h3 className='font-semibold text-xl mt-2'>Binance Pay (USDT-TRC20)</h3>
                            <p className='text-xs mt-1'> No extra fee.</p>
                        </div>
                        <div>
                            <img className='w-10' src="https://i.ibb.co/XkpGxcF/bitcoin.png" alt="" />
                            <h3 className='font-semibold text-xl mt-2'>Bitcoin, LTC, Doge, SHIB, USDT (ERC20)</h3>
                            <p className='text-xs mt-1'>Please copy that BTC amount and send same as BTC, if you see there 0.001123, please send same amount of BTC. </p>
                        </div>
                        <div>
                            <h3 className='font-semibold text-xl mt-2'>USDT TRC20 (Fee 1 USD)</h3>
                            <p className='text-xs mt-1'>please add +1 usd fee, when you send USDT</p>
                        </div>
                        <div>
                            <p className='font-semibold text-xl mt-2'>Perfect Money</p>
                        </div>
                        <div>
                            <p className='font-semibold text-xl mt-2'>TRC20 USDT</p>
                        </div>
                    </div>
                    <div className='text-center mt-10'>
                        <h1 className='text-3xl mb-2'>Amount to Load</h1>
                        <label htmlFor="">Amount</label>
                        <br />
                        <input className='px-2 rounded w-46 py-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-[#5bc0de] border-2 border-[#5bc0de]' type="text" />
                        <div className='flex gap-8 justify-center items-center mt-2'>
                            <a href="/">
                                <button className='bg-[#349cbc] py-1 px-3 rounded font-semibold hover:bg-[#5bc0de] text-white'><i class="fa-solid fa-check pr-1"></i>Submit</button>
                            </a>
                            <a href="/">
                                <button className='hover:text-[#5bc0de] font-semibold'><i class="fa-solid fa-xmark pr-1"></i>Cancel</button>
                            </a>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddFund