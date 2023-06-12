
import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import { MainSlider } from './SliderList';
import { useState } from 'react'
import Link from 'next/link';

function Slider() {
    const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <>
    <div className='chevcont'>
    <img className='arrow left' src={require('../../public/leftche.png')} alt='arrow'/> 
    <img className='arrow right' src={require('../../public/leftche.png')} alt='arrow'/>
    
    </div>
    <div className='Slider-cont'>
    <Carousel interval={null} activeIndex={index} onSelect={handleSelect}> 
    {MainSlider.map((item,index)=> { 
        return(
        <Carousel.Item key = {index}>
            <div className='Slide'>
            <img className='back-img' src={item.background} alt='Everlight Contruction and Maintainence'/>
                <div className='blue skew'>
                <div className='blue'>
                    <div className='info-cont'>
                        <img className='icon-img' src={item.icon} alt={item.header}/>
                        <h1 className='fontHeader'>{item.header}
                        <div className='line'></div></h1>
                        <p className='font'>{item.para}</p>
                        <button>
                          <Link  className='font' href='/#/ContactUs'>{item.buttons}</Link>
                        </button>
                    </div>
                </div>
                </div>
                
            </div>
        </Carousel.Item>)
            })}
   </Carousel>
    </div>
    </>
    
  )
}

export default Slider