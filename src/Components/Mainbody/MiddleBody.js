import React, { useState } from 'react'
import FreeTab from '../Tabs/FreeTab';
import MainTab from '../Tabs/MainTab';
import Manual from '../Tabs/Manual';
import NewsTab from '../Tabs/NewsTab';
import Referrals from '../Tabs/Referrals';
import RulesTab from '../Tabs/RulesTab';
import Service from '../Tabs/Service';
import SupportTab from '../Tabs/SupportTab';
import './MainBody.css';

const MiddleBody = () => {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    };
  return (
    <div className="right-container lg:mt-0 mt-5">
            <div className="bloc-tabs">
                <button
                    className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
                    onClick={() => toggleTab(1)}
                >
                    Main
                </button>
                <button
                    className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
                    onClick={() => toggleTab(2)}
                >
                    News
                </button>
                
                <button
                    className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
                    onClick={() => toggleTab(3)}
                >
                    Manual
                </button>
                
                <button
                    className={toggleState === 4 ? "tabs active-tabs" : "tabs"}
                    onClick={() => toggleTab(4)}
                >
                    Service
                </button>
                <button
                    className={toggleState === 5 ? "tabs active-tabs" : "tabs"}
                    onClick={() => toggleTab(5)}
                >
                    Support
                </button>
                
            </div>

            <div className="content-tabs">
                <div
                    className={toggleState === 1 ? "content  active-content" : "content"}
                >
                <MainTab />
                    {/* <h2>Smspinverify.com is a service providing a phone number you can send any SMS on and get a text of it.</h2>
                   <div className='pl-4 my-5'>
                   <p>
                    1.Just choose your country, select app, and you will get your number,
                    </p>
                    <p>2.Send code from app and you will receive your OTP.
                    </p>
                   </div> */}
                    
                    {/* <p>Its easy and fast.</p>
                    <div className='text-center mt-5'>
                        <h2>Contact us</h2>
                        <p>Whatsapp: <i class="fa-brands fa-whatsapp"></i> +442070971402</p>
                    </div> */}
                </div>

                <div
                    className={toggleState === 2 ? "content  active-content" : "content"}
                >
                    <NewsTab />
                    {/* <hr />
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
                        voluptatum qui adipisci.
                    </p> */}
                </div>

                <div
                    className={toggleState === 3 ? "content  active-content" : "content"}
                >
                    <Manual />
                </div>
                
                <div
                    className={toggleState === 4 ? "content  active-content" : "content"}
                >
                    
                   <Service />
                </div>
                <div
                    className={toggleState === 5 ? "content  active-content" : "content"}
                >
                    <SupportTab />
                </div>
                
            </div>
        </div>
  )
}

export default MiddleBody