import React from 'react'
import HeroBanner from './components/hero'
import './assets/sass/home.scss'
import LogisticsCapabilities from './components/logisticsCapabilities'
import FeaturesSlider from './components/featuresSlider'
import ServiceSteps from './components/serviceSteps'
import ChooseUs from './components/chooseUs'
import Navbar from '../../components/navbar'
import CarouselSlider from './components/slider'

const HomePage = () => {
  return (
    <>
      <Navbar />
      <main>
        <HeroBanner />
        <LogisticsCapabilities />
        <FeaturesSlider />
        <ServiceSteps />
        <ChooseUs />
        <CarouselSlider />
      </main>
    </>
  )
}

export default HomePage