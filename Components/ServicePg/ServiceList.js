import * as MdIcons from 'react-icons/md'
import * as BsIcons from 'react-icons/bs'
import * as RiIcons from 'react-icons/ri'
import * as GiIcons from 'react-icons/gi'
import * as AiIcons from 'react-icons/ai'
import img from '../../'


export const ServicesList = [

    {
        name:'Plumbing Repairs & fixings',
        icon: <MdIcons.MdOutlinePlumbing/>,
        description:'Shower floors, leaking faucets, bathroom and kitchen renovations are just a few of the services we do. All work is fully insured and guaranteed.',
        list:
            <ul>
                <li className='font'>New Installations</li>
                <li className='font'>Leak detection</li>
                <li className='font'>Valves & Vacuum Breakers</li>
                <li className='font'>Burst & Leaking Pipes</li>
                <li className='font'>Geysers Repairs & Replacements</li>
                <li className='font'>Blocked Drains</li>
                <li className='font'>Certificate of Compliance</li>
            </ul>,
        image: require('../../public/iStock-1204813771.jpg'),
    },
    {
        name:'Home Renovations & Restorations',
        icon: <BsIcons.BsHouseDoorFill/>,
        description:'Our skilled handymen have a wealth of knowledge to manage your routine maintenance, as well as a the knowledge to handle your renovations and home repair projects.',
        list:
        <ul>
            <li className='font'>Cuboards</li>
            <li className='font'>Paving</li>
            <li className='font'>Tiling</li>
            <li className='font'>Roofing (gutters and facia boards)</li>
            <li className='font'>Painting and Re-decorating</li>
            <li className='font'>Water Proofing </li>
            <li className='font'>Building and Renovating </li>
        </ul>,
        image: require('../../public/male-architect-drawing-improvements-on-housing-plan-at-construction-site--891274328-5acbae1318ba0100375f4920.jpg'),
    },
    {
        name:'Electrical Engineering',
        icon: <GiIcons.GiElectric/>,
        description:'For your Home or Office Interior & exterior, we provide :',
    list:<ul>
    <li className='font'>Lighting</li>
    <li className='font'> Pool sub Distribution boards & earth leakage trip repairs. </li>
    <li className='font'>Approved installer of Prepaid metering</li>
    <li className='font'>Lighting & Power Failures</li>
    <li className='font'>  Distributions Boards </li>
    <li className='font'> New Installations & Rewiring</li>
</ul>,
        image: require('../../public/work-of-an-electrician.jpg'),
    },
    {
        name:'Geyser Installations & Maintenance',
        icon: <RiIcons.RiWaterFlashLine/>,
        description:'Our team has years of experience and are fully qualified to ensure that your geyser is fixed or replaced in accordance with SANS 10254 requirements. ',
        list:
        <ul>
            <li className='font'>Geyser Overflows</li>
            <li className='font'>Burst Geyser Plumbers</li>
            <li className='font'>Geyser Pressure valves installation</li>
            <li className='font'>Geyser Installations and repairs </li>
            <li className='font'>Thermostat and element replacement</li>
        </ul>,
        image:require('../../public/On-site-13.jpeg'),
    }
    ,{
        name:'Solar Installation ',
        icon: <BsIcons.BsFillSunFill/>,
        description:'The use of solar geysers is growing, and we have experience installing and updating existing solar geyser systems.  Solar power is now even more practical due to the National Building Regulation for Energy Usage in Buildings, which mandates that 50% (by volume) of the annual average hot water demand come from sources other than electric heating or fossil fuels.  ',
        list:'',
        image:require('../../public/solar-geyser-2.jpg'),
    }  
    ,{
        name:'Fencing  Gate Motors',
        icon: <GiIcons.GiGate/>,
        list:'',
        description:'The protection and safety of your family, house, place of business, and property will be greatly enhanced by fencing in Cape Town against unauthorized intruders.        ',
        image:require('../../public/fencing.jpg'),
    }
    
    ]