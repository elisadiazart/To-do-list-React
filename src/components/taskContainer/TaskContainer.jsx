import { useState } from "react"

const TaskContainer = () => {
    const [allTasks, setAllTasks] = useState([])
    return(
    <div>
    <form onSubmit={e=>handleSubmit(e, allTasks, setAllTasks)}>
        <input type="text" placeholder="Create a new to do..." name='task' />
    </form>
    {allTasks.map(task=>
        <div key={task.id}>
            <input id={task.id} type="checkbox" checked={task.checked} onChange={() =>setCheckOnTask(task.id, allTasks, setAllTasks)}/>
            <label htmlFor={task.id} >{task.task}</label>
            <span>X</span>
        </div>
        )}
    </div>
    )
}

const handleSubmit = (e,allTasks, setAllTasks) => {
    e.preventDefault()
    createObject(e.target.task.value,allTasks, setAllTasks);
    e.target.task.value = '';
}

const createObject = (task,allTasks, setAllTasks) => {
    const timeStamp = Date.now();
    const objectTask = {};
    objectTask.id = timeStamp;
    objectTask.task = task;
    objectTask.checked = false;
    setAllTasks([...allTasks, objectTask])
}

const setCheckOnTask = (taskId, allTasks, setAllTasks) => {
    const newTasks = allTasks.map(task => {
      if (task.id === Number(taskId)) task.checked = !task.checked;
      return task
    });
    setAllTasks(newTasks)
  };

export default TaskContainer