import React from 'react'
import Contacts from './Contacts/Contacts'

const PersonalInformation = (props) => {
  return (
    <div className={props.className}>
      <div className='flex flex-col justify-start items-center h-screen w-full overflow-hidden'>
        <div className='w-full flex justify-center items-center lg:h-2/6 h-1/6'>
            <div className='flex justify-center items-center '>
                <img className='lg:w-48 w-24 lg:h-48 h-16 rounded-3xl' src='https://www.bing.com/th?id=OIP.GHGGLYe7gDfZUzF_tElxiQHaHa&w=178&h=185&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2' alt='' />
            </div>
        </div>
        <Contacts className='pt-8 w-full h-3/6'/>
      </div>
    </div>
  )
}

export default PersonalInformation
