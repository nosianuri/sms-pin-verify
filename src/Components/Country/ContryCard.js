import React from 'react'

const ContryCard = (props) => {
    const { name, img, link } = props.product;
    return (
        <div className='border-2 rounded'>
        <a href="/">
            <button>
            <div className='flex p-2 gap-1 justify-between items-center '>
            <img className='w-8 rounded' src={img} alt="" />
                <p className='text-sm hover:text-[#BD902D]'>{name}</p>
            </div>
            </button>
        </a>
            
        </div>
    )
}

export default ContryCard