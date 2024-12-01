import React from 'react'

const Buttom = ({id, title, leftIcon, containerClass}) => {
  return (
    <button
        id={id}
        className={`group relative z-10 w-fit cursor-pointer overflow-hidden rounded-full bg-violet-50 text-black px-7 py-3 ${containerClass}`}
    >
        {leftIcon}
        <span className='relative inline-flexP overflow-hidden font-general text-xs uppercase'>
            <div>
                {title}
            </div>
        </span>
    </button>
  )
}

export default Buttom