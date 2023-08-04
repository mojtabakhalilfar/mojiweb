import Layout from "../../Layout/Layout"
import Resome from "./Resome/Resome"
import PersonalInformation from "./PersonalInformation/PersonalInformation"
import { ClickedAll } from "../../App"
import { useContext } from "react"

const AboutME = () => {
  const { farsi } = useContext(ClickedAll);
  const divFa="flex w-full h-max"
  const divEn="flex flex-row-reverse w-full h-max"

  return (
    <Layout >
      <div className={farsi?divFa:divEn}>
        <PersonalInformation className='w-1/4 h-100 dark:text-white dark:bg-gray-900 bg-gray-300'/>
        <Resome className='w-3/4 h-fmax dark:text-white dark:bg-black bg-gray-100' />
      </div>
    </Layout>
  )
}

export default AboutME
