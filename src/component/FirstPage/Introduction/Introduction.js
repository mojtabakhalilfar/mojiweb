import React from 'react'

const Introduction = (props) => {
  return (
    <div className={props.className}>
        <div className={`w-full h-auto relative flex justify-center items-center`}>
          <img className='w-5/6 h-128 rounded-xl opacity-25' src='https://th.bing.com/th/id/R.1bc60bd3666fc3431cd8b1d1ac6c3d0a?rik=J5Pjsy7Dhb0HKg&riu=http%3a%2f%2fgetwallpapers.com%2fwallpaper%2ffull%2fc%2f7%2f2%2f52697.jpg&ehk=bSFndpRj8KLi1JoWtUOLDphHPT%2bKC3nAvyYQgMDgSeQ%3d&risl=&pid=ImgRaw&r=0' alt='background'  />
          <div className='absolute top-0 w-full flex flex-col justify-center items-center font-Vazirmatn'>
            <h2 className='lg:pt-32 pt-4'>مجتبی خلیل فر هستم</h2>
            <p className='sm:w-3/4 lg:px-48 px-4 lg:pt-8 pt-4 text-center lg:leading-8'>علاقه و تخصص من بیشتر برنامه نویسی هست و سعی می‌کنم حداقل توی تخصص خودم به روز باشم. توی زندگی و کار یه سری قوانین برای خودم دارم که سعی می‌کنم همیشه بهشون عمل کنم.</p>
          </div>
        </div>
    </div>
  )
}

export default Introduction
