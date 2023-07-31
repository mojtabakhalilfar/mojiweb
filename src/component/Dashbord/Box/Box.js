import React from 'react'

const Box = (props) => {

  var selectedColor
  if (props.color==='red'){
    selectedColor='px-4 py-6 bg-red-500 flex flex-col justify-center items-center rounded-lg'
  }else if(props.color==='blue'){
    selectedColor='px-4 py-6 bg-blue-500 flex flex-col justify-center items-center rounded-lg'
  }else if(props.color==='green'){
    selectedColor='px-4 py-6 bg-green-500 flex flex-col justify-center items-center rounded-lg'
  }else if(props.color==='yellow'){
    selectedColor='px-4 py-6 bg-yellow-500 flex flex-col justify-center items-center rounded-lg'
  }
  return (
    <div className={props.className}>
        <div className={selectedColor}>
            {props.children}
            <span>{props.number}</span>
            <span>{props.name}</span>
        </div>   
    </div>
  )
}

export default Box
