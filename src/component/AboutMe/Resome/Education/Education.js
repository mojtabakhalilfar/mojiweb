import React from 'react'

const Education = (props) => {
  return (
    <div className={props.className}>
      <div className='pr-8'>
          <h2 className='lg:pt-4 pt-2 lg:text-2xl text-xl'>سوابق تحصیلی</h2>
        </div>
      <div className='flex flex-col items-start justify-start lg:pt-4 p-2 pr-16'>
        <span className=''> مهندسی کامپیوتر</span>
        <span className=''>دانشگاه یاسوج</span>
      </div>
    </div>
  )
}

export default Education
