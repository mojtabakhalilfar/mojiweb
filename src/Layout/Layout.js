import React from 'react'
import Navbar from '../Navbar/Navbar'
// import Header from '../Header/Header'


const Layout = (props) => {
  return (
    <div className='flex w-screeen flex-row-reverse h-screen bg-gray-100 overflow-hidden'>
      <div className='flex flex-col items-start justify-start w-4/5 m-4'>
        {/* <Header className='w-full h-16 bg-white rounded-2xl flex items-start justify-center'/> */}
        <main className='my-4 h-full w-full flex items-start justify-center overflow-auto'>{props.children}</main>
      </div>
      <Navbar className='w-1/5 h-full bg-white my-4 mr-4 rounded-2xl flex items-start justify-center flex-col'/> 
    </div>
  )
}

export default Layout
