import React from 'react'
import Layout from '../../Layout/Layout'
import Introduction from './Introduction/Introduction'
// import background from '../../../public/images/background.jpg'

// import { FaAndroid , FaAsterisk ,FaSuse} from "react-icons/fa";

const FirstPage = () => {
  return (
    <Layout>
      <div className='flex flex-col justify-center items-center w-full h-auto'>
        <Introduction className='mt-8' />
      </div>
    </Layout>
  )
}

export default FirstPage

