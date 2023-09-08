import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { EffectCoverflow, Pagination, Navigation } from 'swiper';
import slideImageOne from '../assets/image/slide_1.jpg'
import slideImageTwo from '../assets/image/slide_2.jpg'
import slideImageThree from '../assets/image/slide_3.jpg'
import slideImageFour from '../assets/image/slide_4.jpg'
import SlideRoundMask from '../assets/svg/side-round-mask.svg'
import '../assets/sass/hero.scss'

const HeroBanner = () => {
  return (
    <>
      <section className='hero_banner relative h-screen bg-red-500 w-screen overflow-hidden'>
        <img src={SlideRoundMask} width={'75%'} className='absolute top-0 left-0 bottom-0' alt="slide round mask svg" />
        <h1>Hello world</h1>
      </section>
    </>
  )
}

export default HeroBanner