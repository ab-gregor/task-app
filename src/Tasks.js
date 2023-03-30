import Task from "./Task"
const Tasks = ({tasks,onClick}) => {
    return(
        <>
        {
            tasks.map((task) => (
                <Task key={task.id} tselect={task} onClick={onClick}/>
            ))
        }
        </>
    )
}

export default Tasks