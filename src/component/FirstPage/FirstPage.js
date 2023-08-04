import React from 'react'
import Layout from '../../Layout/Layout'
import Introduction from './Introduction/Introduction'
import Explains from './Explain/Explains'
import ContactWithMe from './ContactWithMe/ContactWithMe'

const FirstPage = () => {
  return (
    <Layout>
      <div className='flex flex-col justify-center items-center w-full h-auto'>
        <Introduction className='mt-8' />
        <Explains className='my-8' />
        <ContactWithMe className='my-8 lg:w-full sm:w-2/3' />
      </div>
    </Layout>
  )
}

export default FirstPage

