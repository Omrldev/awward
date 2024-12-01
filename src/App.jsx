import React, { useState } from 'react'
import Hero from './components/Hero'
import Prueba from './components/Prueba'

const App = () => {

  return (
    <main className='relative min-h-screen w-screen overflow-x-hidden'>
      <Hero />
      <Prueba />
    </main>
  )
}

export default App