
import React, {useState} from 'react'
import * as MdIcons from 'react-icons/md'
import Link from 'next/link'

function Navigation({active1,active2,active3}) {
  const [togMenu, setTogMenu] = useState(false)


  return (
  <>
  <div className= {togMenu ? 'slide-menu onmenu': 'slide-menu'}  >
      <div className='left-icon'>
      <MdIcons.MdClose className='this-icon' onClick={()=> setTogMenu(false)}/>
      </div>
          <nav className='nav-list-mobile'>
              <ul>
                <li className={active1? 'active1': ''} ><Link className='font' href='/'>Home</Link></li>
                <li className={active2? 'active1': ''}><Link className='font' href='/Services'>Services</Link></li>
                <li className={active3? 'active1': ''}><Link className='font' href='/ContactUs'>Contact Us</Link></li>
                <p  className='contman'><Link className='font' href="tel: +27762276264">Call Us</Link></p>
                <p  className='contman'><Link className='font' href="mailto:  admin@everlightcon.co.za">Email Us</Link></p>
              </ul>
          </nav>
  </div>



<div className='mobile-menu'>
<Link className='' href='/'>
<img className='logo-img' src='/SGGR.PNG' alt='Everlight Plaumbing and Construction'/>
</Link>

<MdIcons.MdOutlineMenu className='mob-menu' onClick={()=> setTogMenu(true)}/>
  </div>
<p className='topcall font'><MdIcons.MdOutlineCall className='kwidn'/> Call us: <Link href="tel: +27762276264">+27 762 276 264</Link> </p>
    <div className='nav-container'>
    <div className='nav'>
    <div className='logo'><Link className='font' href='/'>
<img className='logo-img' src='/SGGR.PNG' alt='Everlight Plaumbing and Construction'/>
</Link></div> 
        <nav className='nav-list'>
          <ul>
          <li className={active1? 'active1': ''} ><Link className='font' href='/'>Home</Link></li>
                <li className={active2? 'active1': ''}><Link className='font' href='/Services'>Services</Link></li>
                <li className={active3? 'active1': ''}><Link className='font' href='/ContactUs'>Contact Us</Link></li>
                <li><Link className='font' href="tel: +27762276264">Call Us</Link></li>
                <li><Link className='font' href="mailto:  admin@everlightcon.co.za">Email Us</Link></li>
          </ul>
      </nav>
    </div>
      
    </div></>
    
  )
}

export default Navigation