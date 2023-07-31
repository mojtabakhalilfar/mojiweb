import React, {useContext } from 'react'
import Button from './Button/Button';
import { ClickedAll } from '../App';
import { FaEarlybirds , FaSolarPanel, FaSignal , FaUsers , FaRegIdCard , FaSpider} from "react-icons/fa";
import { Link } from 'react-router-dom';

const Navbar = (props) => {
    const {setClicked}=useContext(ClickedAll)
    

  return (
    <div className={props.className}>
      <div className='mt-4 text-red-500 h-1/6 flex justify-center w-full'>
        <FaEarlybirds className='w-16 h-16'/>
      </div>
      <div className='mt-4 h-4/6 w-full flex justify-start items-start flex-col'>
        <Button name='صفحه اصلی' Link='/' onClick={()=>{setClicked([true , false , false , false, false])}} index={0}> 
            <FaSolarPanel/>
        </Button>
        <Button name='نمونه کار' Link='/portfolio' onClick={()=>{setClicked([ false ,true , false , false, false])}} index={1}> 
            <FaUsers/>
        </Button>
        <Button name='رزومه' Link='/resume' onClick={()=>{setClicked([ false , false ,true , false, false])}} index={2}> 
            <FaSignal/>
        </Button>
        <Button name='درباره من' Link='/aboutmE' onClick={()=>{setClicked([ false , false , false , true, false])}} index={3}> 
            <FaRegIdCard/>
        </Button>
        <Button name='مقالات' Link='/articles' onClick={()=>{setClicked([ false , false , false , false , true])}} index={4}> 
            <FaRegIdCard/>
        </Button>
      </div>
      <div className='h-1/6 flex justify-center w-full'>
        <Link to={'/'} >
            <FaSpider className='text-red-500 w-8 h-8'/>
        </Link>
      </div>
    </div>
  )
}

export default Navbar
