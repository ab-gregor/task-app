import React from 'react'

const Button = ({color,text,tcolor,onClick}) => {
    


  return (
    <div style={{backgroundColor:color,color:tcolor,width:"fit-content",fontSize:15}} onClick={onClick}>{text}</div>
  )
}

export default Button