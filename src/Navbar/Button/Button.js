import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ClickedAll } from '../../App'


const Button = (props) => {
    const {clicked}=useContext(ClickedAll)
    const color='bg-gradient-to-l from-white to-blue-100 border-l-8 border-blue-900 w-full p-4 my-2  flex items-center text-blue-900 font-bold'
    const color2='w-full p-4 my-2  flex items-center text-gray-500 font-bold'
  return (
    <Link onClick={props.onClick} to={props.Link} className={clicked[props.index]?color:color2}>
        {props.children}
        <span className='mr-4'>{props.name}</span>     
    </Link>
  )
}

export default Button
