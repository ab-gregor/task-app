const Tasks = ({tasks}) => {
    return (
    <>
        {
            tasks.map((task) => (
            <h4 key={task.id}>
                {task.text}
            </h4>
            ))
        }

    </>
  )
}

export default Tasks