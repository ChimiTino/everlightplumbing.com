
import React from 'react'

function Locations() {
  return (
    <div className='location-cont' id='locations'>
  
  <h1 className='fontHeader'>Our Service Locations<div className='line'></div></h1>
  

        <div className='westernCape loc'>
        <h3 className='header disap'>Western Cape</h3>
        <ul>
        <li className='font'>Northern Suburbs: eg. Bellville, Kuilsriver, Kraaifontein, Brackenfell, Durbanville...</li>
        <li className='font'>Southern Suburbs: eg. Pinelands, Rondebosch, Wynberg, Claremont, Kenilworth...</li>
        <li className='font'> Western Cape at Large</li>
        </ul>
        </div>

        <div className='Kwazulu loc'>
        <h3 className='header disap'>Kwazulu-Natal</h3>
        <ul>
            <li className='font'>The Bluff: eg. Brighton Beach, Fynnland, Grosvenor, Jacobs, Merebank...</li>
            <li className='font'>Pinetown: eg. Greytown, Scottsburg, Amanzimtoti, Mtunzini,Pietermaritzburg...</li>
            <li className='font'> Kwazulu-Natal at Large</li>
           </ul>
        </div>

        <div className='Johanessburg loc'>
        <h3 className='header disap'>Gauteng</h3>
        <ul>
           <li className='font'>Midrand: eg. Country View, Carlswald, Crowthorne, Glen Austin, Halfway House, Halfway Gardens, Vorna Valley, Noordwyk, Randjesfontein, and Blue Hills,...</li>
        <li className='font'> Gauteng at Large</li>
        </ul>


       
    </div>
     <img className='SAmap' src={require('../../public/image434.png')} alt='Everlight Plumbing Locations'/>

        
    </div>
  )
}

export default Locations