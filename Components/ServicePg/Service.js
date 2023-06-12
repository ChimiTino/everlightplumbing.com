import React from 'react'
import { ServicesList } from './ServiceList'
import Link from 'next/link'


function Service() {
  return (
    <>
    <div className='ser-top-back'>
    <h1 className='fontHeader'>Services

    </h1>
    <p className='font'>We provide a wide variety of residential, commercial, and industrial services at Everlight Plumbing and Property Maintenance.Without a doubt, we can effectively accomplish any project with accuracy and efficiency, exceeding your highest expectations.</p>
    </div>
    
    <div className='service-container'>
       
            {ServicesList.map((item,index)=>{
                return(
                    <>
                        <div className='the-card'>
                        <div className='header-back'>

                            <div className='absalu'>
                                <h3 className='the-icon'>{item.icon}</h3>
                                <h2 className='header'>{item.name}</h2>
                            </div>
                            <img className='back-ser-img' src={item.image} alt='Everlight Plumbing and Construction images'/>
                            
                        </div>
                        <div className='list-cont'>
                            <p className='font'>{item.description}</p>
                        {item.list}
                        
                        </div>
                        

                        <button className='card-btn'><Link className='font' href='/ContactUs'>Contact Us</Link></button>
                        </div>
                    </>
                )
            })}
        

    </div>
    </>
  )
}

export default Service