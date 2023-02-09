import React, { useEffect, useState } from 'react'

const GoToTop = () => {
    const [isVisible, setIsVisible] = useState(false);
    const goToBtn = () => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
    }

    const listenToScroll = () => {

        let heightToHidden = 250;
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        if (winScroll > heightToHidden) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };
    
    useEffect(() => {
        window.addEventListener("scroll", listenToScroll);
        return () => window.removeEventListener("scroll", listenToScroll);
    }, []);

    return (
        <div>
        {isVisible && (
            <div id='myBtn' className='top-btn' onClick={goToBtn}><i class="fa-solid fa-arrow-up text-xl icon"></i></div>
        )}
        
        </div>
    )
}

export default GoToTop