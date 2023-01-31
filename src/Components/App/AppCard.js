import React from 'react'

const AppCard = (props) => {
  const { name, img, link, price } = props.app;
  return (
    <div className='border-2 rounded'>
      <div className='overflow-x-hidden'>
        <div className='flex p-2 gap-1 justify-between items-center'>
          <a href="/">
            <p className='text-sm hover:text-[#BD902D]'>{name}</p>
          </a>
          <div className='flex justify-center items-center'>
          <i class="fa-solid fa-star text-[#e0a423] border-1 border-gray-400 pr-2"></i>
          <a href="/">
            <div className='border-2 border-gray-300 rounded px-2' >{price}</div>
          </a>
          </div>
          
          
        </div>
      </div>


    </div>
  )
}

export default AppCard