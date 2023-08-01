import React from 'react'
import Navbar from '../Navbar/Navbar'


const Layout = (props) => {
  return (
    <div className='flex w-screeen flex-row-reverse h-screen'>
      <div className='h-screen flex flex-col items-start justify-start w-4/5 rounded  bg-gray-100'>
        <main className=' w-full h-full flex items-start justify-center overflow-auto'>{props.children}</main>
      </div>
      <Navbar className='w-1/5 h-full bg-white my-4 mr-4 rounded-2xl flex items-start justify-center flex-col overflow-hidden'/> 
    </div>
  )
}

export default Layout
