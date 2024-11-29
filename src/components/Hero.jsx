import React, { useRef, useState } from 'react'

const Hero = () => {
  // Index of the video that is playing
  const [currentIndex, setCurrentIndex] = useState(1);
  // We like to know if the user has click anything
  const [hasClicked, setHasClicked] = useState(false)
  // A video does take a long to start
  const [isLoading, setIsLoading] = useState(true)
  // The numbers of videos that has loaded
  const [loadedVideos, setLoadedVideos] = useState(0)

  const totalVideos = 4;

  // We need to add a Reference which allows us to switch between thos videos or target the player wich i 
  const nextVideoRef = useRef(null);

  /*const getIndex = () => {
    setCurrentIndex((prevIndex) => prevIndex + 1)
  }*/

  const miniVideoClick = () => {
    // When we click in this
    setHasClicked(true);

    setCurrentIndex((prevIndex) => prevIndex +1);    
  }

  // Path of the videos
  const getVideosSrc = (index) => `videos/hero-${index}.mp4`;

  return (
    <div className='relative h-dvh w-screen overflow-x-hidden border-4'>
        <div id='video-frame' className='relative z-10 h-dvh w-screen overflow-hidden rounded-lg bg-bluey-75 border-4 border-red-400'>
          <div>
            <div onClick={miniVideoClick} className='mask-clip-path absolute-center absolute z-50 size-64 cursor-pointer overflow-hidden rounded-lg border-4'>
              <video 
                ref={nextVideoRef} 
                src={getVideosSrc(currentIndex + 1)}
                loop
                muted
                id='current-index'
                className='size-64 origin-center scale-150 object-cover object-center border-red-700 border-4'>
                
              </video>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Hero