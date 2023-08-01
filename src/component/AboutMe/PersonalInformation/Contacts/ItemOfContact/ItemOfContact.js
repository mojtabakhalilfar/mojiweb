import React from 'react'

const ItemOfContact = (props) => {
  return (
    <div className={props.className}>
      <div className='w-full lg:h-8 h-12 px-4 flex flex-col lg:flex-col items-center justify-center lg:justify-between'>
        <div className='sm:pb-2 text-lg'>{props.children}</div>
        <div className='sm:hidden lg:block text-black'>{props.addres}</div>
      </div>
    </div>
  )
}

export default ItemOfContact
