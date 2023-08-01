import React from 'react'

const Skill = (props) => {
  return (
    <div className={props.className}>
        <div className='flex lg:flex-row-reverse sm:flex-col lg:items-start sm:items-end justify-center lg:py-4 py-2 lg:pl-16 pl-8 w-full'>
            <div className='px-2 text-4xl'>{props.children}</div>
            <div className='px-2 font-bold text-black' >{props.name}</div> 
        </div>
    </div>
  )
}

export default Skill
