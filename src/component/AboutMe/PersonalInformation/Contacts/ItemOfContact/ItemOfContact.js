import React from 'react'

const ItemOfContact = (props) => {
  return (
    <div className={props.className}>
      <div className='w-full lg:h-8 h-12 px-4 flex flex-col lg:flex-col items-center justify-center lg:justify-between'>
        <a href={props.to} className='sm:pb-2 text-lg'>{props.children}</a>
        <div className='sm:hidden lg:block text-black dark:text-white'>{props.addres}</div>
      </div>
    </div>
  )
}

export default ItemOfContact
