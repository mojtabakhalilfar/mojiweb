import React from 'react'
import { BiSearchAlt2 , BiGhost } from "react-icons/bi";


const Header = (props) => {
  return (
    <header className={props.className}>
      <div className='flex justify-between h-full w-full items-center'>
        <div className=' flex items-center h-full mr-8 w-2/7'> 
            <BiSearchAlt2 className='h-5 w-5 absolute righte-0 text-black mr-2 pointer-events-none fill-current'/>
            <input placeholder='جستجو'
             className='h-12 bg-gray-100 border-4 border-gray-100 text-gray-500 focus:transparent focus:outline-none rounded-lg w-full pr-8'/>
        </div>
        <div className='w-1/4 h-full flex justify-end items-center ml-4'>
            <BiGhost className='w-12 h-12 text-gray-800' />
        </div>
      </div>
    </header>
  )
}

export default Header
