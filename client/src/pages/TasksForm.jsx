import { Formik, Form } from 'formik';
import { useTasks } from '../context/TaskContext'
import { useParams, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react';

function TasksForm() {

  const { createTask, getTask, updateTask } = useTasks()
  const [task, setTask] = useState({
    title: "",
    description: ""
  })
  const params = useParams()
  const navigate = useNavigate()
  
  useEffect(() => {
    const loadTask = async () => {
      if (params.id) {
        const task = await getTask(params.id) 
        console.log(task)
        setTask({
          title: task.title,
          description: task.description,
        })
      }
    }
    loadTask()
  }, [])

  return (
    <div className='mt-10'>
      <div>
        <h1 className='text-5xl text-white mb-10 text-center'>{
          params.id? 'Edit Task' : 'Add Task'
        }</h1>

        <Formik
          initialValues={task}
          enableReinitialize={true}
          onSubmit={ async (values, actions) => {
            if (params.id) {
              await updateTask(params.id, values)
            } else {
              await createTask(values)
            }
            setTask({
              title: "",
              description: ""
            })
            navigate("/")
          }}
        >
        {({handleChange, handleSubmit, values, isSubmitting}) => (
          <Form onSubmit={handleSubmit} className="bg-slate-100 rounded-md p-6 w-full max-w-xl flex flex-col mx-auto">
            <label className='text-xl font-semibold mb-2'>Title</label>
            <input className='rounded-md p-2 border border-zinc-400 mb-6' type="text" name='title' placeholder='aqui va el titulo' value={values.title} onChange={handleChange} />

            <label className='text-xl font-semibold mb-2'>Description</label>
            <textarea className='rounded-md p-2 border border-zinc-400 mb-6' name="description" rows="3" placeholder='aqui va la descripcion' value={values.description} onChange={handleChange}></textarea>

            <button className='bg-slate-500 text-white font-bold border border-zinc-400 rounded-md py-2 px-4 w-fit mx-auto' type="submit" disabled={isSubmitting} >{isSubmitting ? "saving..." : "Save"}</button>
          </Form>
        )}
        </Formik>
      </div>
    </div>
  )
}

export default TasksForm