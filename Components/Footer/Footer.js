

import React from 'react'
import * as IoIcon from 'react-icons/io'
import * as MdIcon from 'react-icons/md'
import * as BsIcon from 'react-icons/bs'
import Link from 'next/link'



function Footer({active1,active2,active3}) {
  return (
    <div>
        <p className='header contact-us-strip'> <Link href='/ContactUs'><BsIcon.BsCursorFill className='curser-icon'/> Contact Us</Link> </p>
        <div className='footer-container'>
            <div className='footer'>

                <div className='logo-footer'>
                    <img src='/SGGR.PNG'/>
                    <h1 className='header'>Everlight Plumbing and Property Maintenance</h1>
                </div>
 
                <div className='Eve-Details'> 
                <h3 className='header'>Company Infomation</h3> 
                  <h5 className='font'><MdIcon.MdLocationOn/>382 Voortrekker Road, Cape Town, South Afica</h5>
                
                  <h5 className='header'>Cell:</h5><Link className='font' href="tel: +27663532520">+27 663 532 520</Link>
                  <h5 className='header'>Email:</h5> <Link className='font' href="mailto:  admin@everlightcon.co.za">admin@everlightcon.co.za</Link>
                </div>
 <hr/>
                <div className='Navigation'>
                  <ul>
                    <li><Link className={active1? 'font act': 'font'} href='/'>Home</Link></li>
                    <li><Link className={active2? 'font act': 'font'} href='/Services'>Services</Link></li>
                    <li><Link className='font' href='#aboutus'>About Us</Link></li>
                    <li><Link className={active3? 'font act': 'font'} href='/ContactUs'>Contact Us</Link></li>
                  </ul>
                </div>

                
            </div>
        </div>
    </div>
  )
}

export default Footer