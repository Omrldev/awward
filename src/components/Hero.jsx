import React, { useRef, useState } from 'react'

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [hasClicked, setHasClicked] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [loadedVideos, setLoadedVideos] = useState(0)

  const totalVideos = 3;

  const nextVideoRef = useRef(null);

  const handleVideoLoad = () => {
    setLoadedVideos(prev => prev + 1);
  }

  const upComingVideos = (currentIndex % totalVideos) + 1;

  const handleMiniVideoClick = () => {
    setHasClicked(true);

    setCurrentIndex(upComingVideos);    
  }

  const getVideosSrc = (index) => `videos/hero-${index}.mp4`;

  return (
    <div className='relative h-dvh w-screen overflow-x-hidden'>
        <div id='video-frame' className='relative z-10 h-dvh w-screen overflow-hidden rounded-lg bg-bluey-75'>
          <div>
            <div className='mask-clip-path absolute-center absolute z-50 size-64 cursor-pointer overflow-hidden rounded-lg'>
              <div onClick={handleMiniVideoClick}  className='origin-center scale-50 opacity-0 transition-all duration-500 ease-in hover:scale-100 hover:opacity-100'>
                <video
                  ref={nextVideoRef}
                  src={getVideosSrc(upComingVideos)}
                  loop
                  muted
                  id='current-index'
                  className='size-64 origin-center scale-150 object-cover object-center'
                  onLoadedData={handleVideoLoad}
                  >     
                </video>
              </div>
            </div>

            <video 
                ref={nextVideoRef}
                src={getVideosSrc(currentIndex)}
                loop
                muted
                id='next-video'
                className='absolute-center invisible absolute z-20 object-cover object-center size-64'
                onLoadedData={handleVideoLoad}
            >                
            </video>     

            <video 
              src={getVideosSrc(currentIndex === totalVideos - 1 ? 1 : currentIndex)}
              autoPlay
              loop 
              muted
              className='absolute top-0 left-0 size-full object-cover object-center'
            ></video>

            <h1 className='special-font hero-heading absolute z-40 bottom-5 right-5 text-bluey-75'>
              G<b>a</b>ming
            </h1>

            <div className='absolute z-40 left-0 top-0 size-full'>
              <div className='mt-24 px-5 sm:px-10 text-bluey-100'>
                <h1 className='special-font hero-heading'>
                  Redi<b>n</b>e
                </h1>
                <p className='mb-5 max-w-64 font-robert-regular'>
                  Enter the Meta Game Layer <br />
                  Unleash the Play Economy
                </p>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Hero