import React from 'react'
import LeftBody from '../../Components/Mainbody/LeftBody'
import Rightbody from '../../Components/Mainbody/Rightbody'
import CreditBody from './CreditBody'

const CreditNumber = () => {
  return (
    <div className='bg-[#f8f9fa]'>
    <div className='mainbody lg:space-x-10 lg:px-8 py-10'>
        <LeftBody />
        <CreditBody />
        <Rightbody />
    </div>
    </div>
  )
}

export default CreditNumber