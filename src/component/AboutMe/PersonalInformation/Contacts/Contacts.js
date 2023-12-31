import React from 'react'
import ItemOfContact from './ItemOfContact/ItemOfContact'
import { FaSms , FaPhone,FaInstagramSquare,FaTelegram,FaLinkedinIn } from "react-icons/fa";
import { BiLogoGmail} from "react-icons/bi";

const Contacts = (props) => {
  return (
    <div className={props.className}>
      <div className='h-full w-full flex flex-col items-start'>
        <ItemOfContact to='/' addres='09170496720' className='w-full my-4 text-blue-400'><FaPhone/></ItemOfContact>
        <ItemOfContact to='/' addres='09170496720' className='w-full my-4 text-yellow-400'><FaSms/></ItemOfContact>
        <ItemOfContact to='/' addres='mojtabakhalilfar@gmail.com' className='w-full my-4 text-red-500'><BiLogoGmail/></ItemOfContact>
        <ItemOfContact to='https://instagram.com/mojtaba_khalilfar?igshid=MzNlNGNkZWQ4Mg==' addres='' className='w-full my-4 text-pink-900'><FaInstagramSquare/></ItemOfContact>
        <ItemOfContact to='https://t.me/mojtaba_1411' addres='' className='w-full my-4 text-blue-700'><FaTelegram/></ItemOfContact>
        <ItemOfContact to='/' addres='' className='w-full my-4 text-blue-900'><FaLinkedinIn/></ItemOfContact>
      </div>
    </div>
  )
}

export default Contacts
