import Layout from "../../Layout/Layout"
import Resome from "./Resome/Resome"
import PersonalInformation from "./PersonalInformation/PersonalInformation"

const AboutME = () => {

  return (
    <Layout >
      <div className="flex w-full h-max">
        <PersonalInformation className='w-1/4 h-100  bg-red-100'/>
        <Resome className='w-3/4 h-fmax bg-gray-100' />
      </div>
    </Layout>
  )
}

export default AboutME
