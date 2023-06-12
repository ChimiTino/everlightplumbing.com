"use client"
import Image from 'next/image'
import Navigation from '../../Components/Nav/navigation'
import { useState } from 'react'
import Slider from '../../Components/Slider/Slider'
import AboutUs from '../../Components/AboutUs/AboutUs'
import Services from '../../Components/Services/Services'
import Locations from '../../Components/Locations/Locations'
import Footer from '../../Components/Footer/Footer'

export default function Home() {
  const [active1 , setActive1] = useState(true)
   const [active2 , setActive2] = useState(false)
   const [active3 , setActive3] = useState(false)
  return (
    <>
      <Navigation
        active1={active1}
        active2={active2}
        active3={active3}
      />
      <Slider/>
      <AboutUs/>
      <Services/>
      <Locations/>
      <Footer
        active1={active1}
        active2={active2}
        active3={active3}
      />
    </>
  )
}
