import React from 'react'

const index = (props) => {
  return (
    <div className='flex flex-col justify-center items-center relative'>
        <div className='px-5 py-5 mb-10 md:mb-0 lg:mb-10 rounded-full shadow-customInner text-5xl '>
            {props.image}
        </div>
        <p className='absolute bottom-0 md:left-28 md:bottom-[50%] md:translate-y-1/2 lg:translate-y-0 lg:left-[auto] lg:bottom-0 whitespace-nowrap'>{props.text}</p>
    </div>
  )
}

export default index