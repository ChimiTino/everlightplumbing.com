import React from 'react'
import { ServiceList } from './ServiceList'
import * as BsChevron from 'react-icons/bs'
import Link from 'next/link'

function Services() {
  return (
    <div className='service-cont'>
    <img className='ser-back-img' src={require('../../public/AdobeStock_126794517.jpeg')} alt='Everlight Plumbing and Mhime Maintainence Services'/>
    
    <div className='services'>
    <div className='theTriag'></div>

    <h1 className='fontHeader'>Services<div className='line'></div></h1>
    
    <p className='para font'>Over the years, our team of experts has served a range of residential and commercial customers by offering high-quality plumbing, electrical, and house maintenance services.</p>

    <div className='sertviceList'>
    {ServiceList.map((item, index)=>{
      return(
        <>
        <div className='card'>
        <Link href='/Services'>
          <div className='card-cont'>
          <img  src={item.img} alt='Everlight Plumbing and Mhime Maintainence Services'/>
           <div className='ser-info trans' >
           <div className='ser-info solid'  >
            {item.icon}
            <h2 className='header'>{item.name}</h2>
           </div>
           </div>
           
          </div><BsChevron.BsChevronCompactRight className='ser-more'/>
        </Link>
        </div>
        </>
      )
    })}
    </div>

    </div>
    </div>
  )
}

export default Services