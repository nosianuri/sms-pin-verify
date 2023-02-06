import React from 'react'

const Api = () => {
    return (
        <div className='max-w-7xl mx-auto my-10'>
            <h2 className='text-5xl'>API Access</h2>
            <p>YOUR API KEY: XXXXXXXX</p>
            <h4 className='text-3xl mt-3'>Get Number</h4>
            <p className='mt-2'>https://api.smspinverify.com/user/get_number.php?customer=apikey&app=appname&country=countryname</p>
            <p className='mt-2'>Example : http://api.smspinverify.com/user/get_number.php?customer=apikey&app=Google+Voice&country=USA&number=</p>
            <p className='mt-2 font-semibold'>Error Messages:</p>
            <ol className='ul-article'>
                <li>Customer Not Found.</li>
                <li>App Not Found.</li>
                <li>Country Not Found.</li>
                <li>New Numbers registration in progress, please wait or check back later.</li>
                <li>Error 102, check back later.</li>
            </ol>
            <p className='text-[#b85454]'>5 NUMBER PER MINUTE</p>
            <h2 className='text-3xl mt-2'>Get History</h2>
            <p className='mt-1'>https://api.smspinverify.com/user/get_history.php?customer=apikey</p>
            <p className='font-semibold mt-2'>Error Messages:</p>
            <ul className='ul-article'>
                <li>Customer Not Found.</li>
            </ul>
            <h2 className='text-3xl'>Check Balance</h2>
            <p className='mt-1'>https://api.smspinverify.com/user/get_balance.php?customer=apikey</p>
            <p className='font-semibold mt-2'>Error Messages:</p>
            <ul className='ul-article'>
                <li>Customer Not Found.</li>
            </ul>
            <h2 className='text-3xl'>Get SMS</h2>
            <p className='mt-1'>https://api.smspinverify.com/user/get_sms.php?customer=apikey&number=number&country=countryname&app=appname
            </p>
            <p className='mt-2'>Example : https://api.smspinverify.com/user/get_sms.php?customer=apikey&number=112869xxx&country=malaysia&app=google</p>
            <p className='font-semibold mt-2'>Error Messages:</p>
            <ol className='pl-10'>
                <li>Customer Not Found.</li>
                <li>Number Not Found.</li>
                <li>You have not received any code yet.</li>
                <li>Your balance is expired.</li>
                <li>Error 102, check back later.</li>
            </ol>
            <p className='text-lg mt-2'>3 MINUTES PER NUMBER</p>
        </div>
    )
}

export default Api