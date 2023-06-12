"use client"
import { useState } from 'react'
import React from 'react'
import Navigation from '../../../Components/Nav/navigation'
import Footer from '../../../Components/Footer/Footer'
import ContactUs from '../../../Components/ContactUs/ContactUs'


function Contact() {
    const [active1 , setActive1] = useState(false)
    const [active2 , setActive2] = useState(false)
    const [active3 , setActive3] = useState(true)
   return (
     <>
       <Navigation
         active1={active1}
         active2={active2}
         active3={active3}
       />
       <ContactUs/>
       <Footer
        active1={active1}
        active2={active2}
        active3={active3}
      />
   </>
  )
}

export default Contact