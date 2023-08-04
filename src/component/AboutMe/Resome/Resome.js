import React , {useContext} from 'react'
import Biography from './Biography/Biography' 
import Education from './Education/Education'
import Skills from './Skills/Skills'
import { ClickedAll } from '../../../App'


const Resome = (props) => {
  const { farsi } = useContext(ClickedAll);
  return (
    <div dir={farsi?'rtl':'ltr'} className={props.className}>
      <div className='w-full h-full'>
        <div className='w-full'>
          <h2 className='lg:text-4xl text-2xl py-4 px-8'>
            {farsi?'مجتبی خلیل فر':'Mojtaba Khalilfar'}
            </h2>
        </div>
        <hr className='border-t-4'/>
        <Biography className='w-full lg:h-1/4 h-3/7'/>
        <hr className='border-t-4'/>
        <Education className='w-full lg:h-1/5'/>
        <hr className='border-t-4'/>
        <Skills className='w-full lg:h-2/5 '/>
      </div>
    </div>
  )
}

export default Resome
