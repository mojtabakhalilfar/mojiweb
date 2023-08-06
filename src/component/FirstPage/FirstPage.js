import React from 'react'
import Layout from '../../Layout/Layout'
import Introduction from './Introduction/Introduction'
import Explains from './Explain/Explains'
import ContactWithMe from './ContactWithMe/ContactWithMe'

const FirstPage = () => {
  return (
    <Layout>
      <div className='flex flex-col justify-center items-center w-full h-auto'>
        <Introduction className='mt-8 h-1/2' />
        <Explains className='my-8 flex flex-col justify-start items-center' />
        <ContactWithMe className='my-8 w-full flex flex-col justify-start items-center' />
      </div>
    </Layout>
  )
}

export default FirstPage

