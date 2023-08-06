import Layout from '../../Layout/Layout'
import Sample from "./Sample/Sample"
import sanjabweb from './images/sanjabweb.png'
import { ClickedAll } from '../../App'
import { useContext } from 'react'


const Portfolio = () => {
  const { farsi } = useContext(ClickedAll);
  return (
    <Layout>
      <div className='w-full max-h-auto min-h-screen flex flex-col justify-start items-center'>
        <div className='lg:mt-8 sm:mt-0 mt-16' >
          <h2 className='lg:text-xl text-lg py-8'>
           {farsi?' نمونه کار ها':' Portfolio'}
           </h2>
        </div>
        <div className='w-full h-full flex flex-col justify-center items-center ' >
          <Sample className='w-2/3 h-auot mb-12' name='sanjab' tools='html , css , react' img={sanjabweb} href='https://firstmoji.iran.liara.run/'/> 
          <hr className='border-t-8 w-2/3 mb-8 border-red-500'/>
          {/* <Sample className='w-2/3 h-auto mb-12' name='sanjab' tools='html , css , react' img={sanjabweb} href='https://firstmoji.iran.liara.run/'/>  */}
        </div>     
      </div>
    </Layout>
  )
}

export default Portfolio

