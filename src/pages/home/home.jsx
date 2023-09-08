import React from 'react'
import HeroBanner from './components/hero'
import './assets/sass/home.scss'
import LogisticsCapabilities from './components/logisticsCapabilities'

const HomePage = () => {
  return (
    <>
      <main>
        <HeroBanner />
        <LogisticsCapabilities />
      </main>
    </>
  )
}

export default HomePage