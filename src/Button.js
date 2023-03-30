import React from 'react'

const Button = ({color,text,tcolor}) => {
    


  return (
    <div style={{backgroundColor:color,color:tcolor}}>{text}</div>
  )
}

export default Button