import React from 'react'

const Manual = () => {
  return (
    <div>
        <h3 className='font-semibold text-center'>Manual</h3>
        <p>The process of buying a phone number for receiving SMS text message:</p>
        <ul className='ul-article'>
            <li>You need to login or register.</li>
            <li>Click on the link next to the username (balance) and recharge account.</li>
            <li>On the side menu select a country and operator from drop-down list.</li>
            <li>Then select product and click "Buy" button in left menu. If you don't find needed service among the names submitted by the services, you can select product - "Other".</li>
            <li>Use bought number: click "Copy" button and insert a phone number in destined box:</li>
            <ul>
                <li>- Click "Сomplete" button, if SMS verification code arrived and code is right.</li>
                <li>- Click "Сancel" button, if you need to cancel the purchase.</li>
                <li>- Click "Ban" button, if phone number is used already.</li>
            </ul>
            <li>After purchasing a virtual number, you can receive an unlimited number of SMS from one service within 15 minutes. IMPORTANT! If SMS does not arrive within 5 minutes, the order is canceled automatically.</li>
        </ul>
        <p>If you got error and can't solve by yourself - write to support by ticket system (top right, question icon).</p>
    </div>
  )
}

export default Manual