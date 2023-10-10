
import React, {useState, useRef} from 'react'
import emailjs from '@emailjs/browser'
import * as AiIcon from 'react-icons/ai'
import Link from 'next/link';

function ContactUs() {
    const form = useRef();
    const [error, setError] = useState('');
    const [result, setResult] = useState('');
    const [load, setLoad] = useState(1)
  
    const sendEmail = (e) => {
      e.preventDefault();
      
      emailjs
        .sendForm(
          "service_aautjoh",
          "template_m66d5ih",
          form.current,
          "z4k2FF3-Dvng1E2u9"
        )
        .then(
          (result) => {
            console.log(result.text); 
            setResult(e.target.value);
            if (result == '') {
              return setError('Please fill in all the missing feilds.')
              
            }else{
              setLoad(2)
              
            }
          },
          (error) => {
            console.log(error.text);
          }
        );
        
        
    };
    console.log(result);
  return (
    <div className='contact-container'>
        <div className='container'>
        <div className='popInner' >
        <form ref={form} onSubmit={sendEmail}   > 
        <div className="contact-me">
                <div className="contact-input">
                <h1 className="fontHeader">Contact Us</h1>
    <p className="font">Enter your details below and one of our team members will get back to you immediately.</p>
   
                <input onChange={(e)=> setResult(e.target.value)} placeholder="Name and Surname*" className="contact-i font" label='Name' type="text" name="from_name" required ={true}/>
                </div>
                  <div className="contact-input">
                  
                  <input onChange={(e)=> setResult(e.target.value)} placeholder="Email*" className="contact-i font" type="email" name="email" required ={true} />
                  </div>
                <div className="contact-input">
              
                <input onChange={(e)=> setResult(e.target.value)} placeholder="Tellephone*" className="contact-i font" type="tell" name="tell" required ={true}/>
                </div>
             </div>

      <div className="locations-me">
          <p className="contact-p font">Which area are you in?</p>
          <div className="contact-input">
          <input type="text" className="contact-i font"  placeholder="Address*" name="location" />
          </div>
    </div>
    <div className="service-me">
    

    <p className="contact-p font">How can we help you:</p>
        
        
          <select className='form-selecter font' name="service" required ={true} >
            <option name ='Plumbing Repairs & fixings'>Plumbing Repairs & fixings</option>
            <option name ='Home Renovations & Restorations'>Home Renovations & Restorations</option>
            <option name ='Geyser Installations & Maintenance'>Geyser Installations & Maintenance</option>
            <option name ='Solar Installation'>Solar Installation</option>
            <option name ='Electrical Engineering'>Electrical Engineering</option>
            <option name ='Tiling'>Tiling</option>
            <option name ='Carpentryh'>Carpentry</option>
            <option name ='Paving'>Paving</option>
          </select>

    </div>
    <div className="contact-input">
          <input type="text" className="contact-i font"  placeholder="If other*" name="otherservices" />
        </div>
    <p>{error}</p>
        
          {load === 1 && <button className="form-sub font" type="submit">Send</button>}
          {load === 2 && <button className="form-sub font" type="submit"><AiIcon.AiFillCheckCircle/> Sent</button>}
          
        </form>
      </div>
        </div>


        <div className='back-info'>
  <div className='info-side'>
           <h2 className='fontHeader white'>Company Infomation</h2>

           <div className='row'>
            <h3 className='fontHeader '>EMAIL:</h3>
            
            <p className='font'><Link href="mailto:  admin@everlightcon.co.za">admin@everlightcon.co.za</Link></p>
           </div>
<hr/>
           <div className='row'>
            <h3 className='fontHeader '>TELL:</h3>
            <p className='font'><Link  href="tel: +27762276264">+27 663 532 520</Link></p>
           </div>
<hr/>
           <div className='row'>
            <h3 className='fontHeader'>ADDRESS:</h3>
            <p className='font'>382 Voortrekker Road, Cape Town, South Afica</p>
           </div>
 <hr/>          
           <div className='availability'>
            <h2 className='fontHeader red'>Work Hours</h2>
            <p className='font'>We are available 24/7 for you company or personal needs.</p>
           </div>
        </div>
        </div>
      
    </div>
  )
}

export default ContactUs