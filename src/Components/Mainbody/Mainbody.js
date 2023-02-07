import React from 'react'
import LeftBody from './LeftBody'
import MiddleBody from './MiddleBody'
import Rightbody from './Rightbody'

const Mainbody = () => {
  return (
    <div className='mainbody lg:space-x-10 '>
        <LeftBody />
        <MiddleBody />
        <Rightbody />
    </div>
  )
}

export default Mainbody