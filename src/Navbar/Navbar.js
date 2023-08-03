import React, {useContext } from 'react'
import Button from './Button/Button';
import { ClickedAll } from '../App';
import {  FaSolarPanel , FaUsers , FaSpider} from "react-icons/fa";
import {GrArticle} from 'react-icons/gr'
import {SiAboutdotme} from 'react-icons/si'
import { Link } from 'react-router-dom';

const Navbar = (props) => {
    const {setClicked}=useContext(ClickedAll)
    

  return (
    <div className={props.className}>
      <div className='lg:mt-2 sm:m-0 h-3/4 w-full flex lg:justify-start sm:justify-start items-center flex-col'>
        <Button name='صفحه اصلی' Link='/' onClick={()=>{setClicked([true , false , false , false, false])}} index={0}> 
            <FaSolarPanel/>
        </Button>
        <Button name='نمونه کار' Link='/portfolio' onClick={()=>{setClicked([ false ,true , false , false, false])}} index={1}> 
            <FaUsers/>
        </Button>
        <Button name='درباره من' Link='/aboutmE' onClick={()=>{setClicked([ false , false , false , true, false])}} index={3}> 
            <SiAboutdotme/>
        </Button>
        <Button name='مقالات' Link='/articles' onClick={()=>{setClicked([ false , false , false , false , true])}} index={4}> 
            <GrArticle/>
        </Button>
      </div>
      <div className='lg:h-1/6 sm:h-1/4 sm:mt-20 flex justify-center w-full'>
        <Link to={'/'} >
            <FaSpider className='text-red-500 w-8 h-8'/>
        </Link>
      </div>
    </div>
  )
}

export default Navbar
