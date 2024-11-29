import React from 'react'

const Hero = () => {
  return (
    <div className='relative h-dvh w-screen overflow-x-hidden border-4'>
        <div id='video-frame' className='relative z-10 h-dvh w-screen overflow-hidden rounded-lg bg-bluey-75 border-4 border-red-400'>
          <div>
            <div className='mask-clip-path absolute-center absolute z-50 size-64 cursor-pointer overflow-hidden rounded-lg border-4'>

            </div>
          </div>
        </div>
    </div>
  )
}

export default Hero