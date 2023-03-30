import React from 'react'
import {RxCross1} from 'react-icons/rx'
const Task = ({tselect,onClick}) => {
  return (
    <div className="cont-for-task">
        <h3 style={{width: 200}}>
            {tselect.text}

            <RxCross1 style={{fontSize:20,color:"red",alignItems:"end"}}onClick={()=>onClick(tselect.id)}></RxCross1>
        </h3>
    </div>
  )
}

export default Task