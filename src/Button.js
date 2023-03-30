import React from 'react'

const Button = ({color,text,tcolor,onClick}) => {
    


  return (
    <div style={{backgroundColor:color,color:tcolor,width:"fit-content"}} onClick={onClick}>{text}</div>
  )
}

export default Button