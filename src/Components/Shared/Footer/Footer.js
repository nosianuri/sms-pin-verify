import React from 'react'
import './footer.css'

const Footer = () => {
 
  return (
    <div className='text-center py-10 bg-[#f8f9fa]'>
        <h5><span className='text-[#6c757d]'><a href="/terms">Terms & Conditions</a></span> | <span className='text-[#6c757d]'><a href="/privacy">Privacy Policy</a></span> | © 2023</h5>
        <p><span>SMS Pin Verify</span> | <span>SMS code verification</span> | Temporary number to SMS receive …</p>
    </div>
  )
}

export default Footer