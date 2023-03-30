import React from 'react'
import {FaSkullCrossbones} from 'react-icons/fa'
const Task = ({tselect,onClick}) => {
  return (
    <div>
        <h2>
            {tselect.text}

            <FaSkullCrossbones onClick={()=>onClick(tselect.id)}></FaSkullCrossbones>
        </h2>
    </div>
  )
}

export default Task