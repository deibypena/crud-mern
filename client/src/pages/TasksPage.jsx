import { useEffect } from "react"
import TaskCard from "../components/TaskCard.jsx"
import { useTasks } from '../context/TaskContext'

function TasksPage() {
  const { tasks, loadTasks } = useTasks()

  useEffect( () => {
    loadTasks()
  }, [])

  function renderTasks () {
    
    if (tasks.length === 0) return <h2>no hay tareas</h2>

    return tasks.map(task => <TaskCard task={task} key={task.id} />)
  }

  return (
    <div className="">
      <h1 className="text-5xl text-white text-center my-4">Task</h1>
      <div className="grid grid-cols-3 gap-2">
        {renderTasks()}
      </div>
    </div>
  )
}

export default TasksPage