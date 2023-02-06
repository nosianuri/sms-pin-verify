import React from 'react'
import ContactForm from './ContactForm'

const Contact = () => {
  return (
    <div className='max-w-7xl mx-auto px-28 my-10'>
    <div className='text-center'>
    
        <h1 className='font-semibold text-4xl'>Contact Us</h1>
        <p className='mt-3'>If you have any questions or suggestions about the work of SMS Pin Verify | SMS code verification | Temporary number to SMS receive …, we would gladly answer them and do everything possible to help.</p>
        <p>To ask a question use the contacts provided below or fill in the contact form that is on the right side of the website.</p>
        <h4 className='mt-5 text-2xl'>email support</h4>
        <p>Whatsapp: <i class="fa-brands fa-whatsapp"></i> +442070971402</p>
    </div>
    <div className='mt-10'>
    <ContactForm />
    </div>
    
    </div>
  )
}

export default Contact