import * as MdIcons from 'react-icons/md'
import * as BsIcons from 'react-icons/bs'
import * as RiIcons from 'react-icons/ri'
import * as GiIcons from 'react-icons/gi'
import * as AiIcons from 'react-icons/ai'


export const ServiceList=[
    {
        name:'Plumbing Repairs & fixings',
        img: require('../../public/iStock-1204813771.jpg'),
        icon: <MdIcons.MdOutlinePlumbing className='ser-icon' />,
        description:''
    },
    {
        name:'Home Renovations & Restorations',
        img:require('../../public/male-architect-drawing-improvements-on-housing-plan-at-construction-site--891274328-5acbae1318ba0100375f4920.jpg'),
        icon: <BsIcons.BsHouseDoorFill className='ser-icon' />,
        description:''
    },{
        name:'Electrical Engineering',
        img:require('../../public/work-of-an-electrician.jpg') ,
        icon: <GiIcons.GiElectric className='ser-icon' />,
        description:''
    },
    {
        name:'Geyser Installations & Maintenance',
        img:require('../../public/solar-geyser-2.jpg'),
        icon: <RiIcons.RiWaterFlashLine className='ser-icon' />,
        description:''
    }
]