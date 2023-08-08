import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ClickedAll } from '../../App'


const Button = (props) => {
    const {clicked}=useContext(ClickedAll)
    const color='lg:p-4 lg:my-2 p-12 my-2  lg:w-32 lg:h-32 w-16 h-16 flex flex-col-reverse lg:flex-row justify-center items-center bg-red-900 font-bold rounded-3xl'
    const color2='lg:p-4 lg:my-2 p-12 my-2 lg:w-32 lg:h-32 w-16 h-16 flex flex-col-reverse lg:flex-row justify-center items-center bg-blue-500 font-bold rounded-3xl'
  return (
    <Link onClick={props.onClick} to={props.Link} className={clicked[props.index]?color:color2}>
        <span className='w-full h-full text-black dark:text-white flex justify-center items-center'>{props.children}</span>
        <span className= 'w-full h-full text-black dark:text-white flex justify-center items-center'>{props.name}</span>     
    </Link>
  )
}

export default Button
