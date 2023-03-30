import React from 'react'
import {FaSkullCrossbones} from 'react-icons/fa'
const Task = ({tselect,onClick}) => {
  return (
    <div class="cont-for-task">
        <h3 style={{width: 200}}>
            {tselect.text}

            <FaSkullCrossbones style={{fontSize:20,color:"red",alignItems:"end"}}onClick={()=>onClick(tselect.id)}></FaSkullCrossbones>
        </h3>
    </div>
  )
}

export default Task