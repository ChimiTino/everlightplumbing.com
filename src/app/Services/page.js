"use client"
import React from 'react'
import Navigation from '../../../Components/Nav/navigation'
import { useState } from 'react'
import Service from '../../../Components/ServicePg/Service'
import Footer from '../../../Components/Footer/Footer'
function Services() {
    const [active1 , setActive1] = useState(false)
    const [active2 , setActive2] = useState(true)
    const [active3 , setActive3] = useState(false)
   return (
     <>
       <Navigation
         active1={active1}
         active2={active2}
         active3={active3}
       />
       <Service/>
       <Footer
        active1={active1}
        active2={active2}
        active3={active3}
      />
    </>
  )
}

export default Services