import React from 'react'
import HeroBanner from './components/hero'
import './assets/sass/home.scss'
import LogisticsCapabilities from './components/logisticsCapabilities'
import FeaturesSlider from './components/featuresSlider'
import ServiceSteps from './components/serviceSteps'

const HomePage = () => {
  return (
    <>
      <main>
        <HeroBanner />
        <LogisticsCapabilities />
        <FeaturesSlider />
        <ServiceSteps />
      </main>
    </>
  )
}

export default HomePage