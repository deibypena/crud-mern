import { useTasks } from '../context/TaskContext'
import { useNavigate } from 'react-router-dom'

function TaskCard({ task }) {

    const { deleteTasks } = useTasks()
    const navigate = useNavigate()

    return (
        <div className='bg-slate-100 rounded-md p-4'>
            <h2 className='text-lg font-bold'>{task.title}</h2>
            <p className='text-sm my-4'>{task.description}</p>
            <div className='flex float-right gap-2'>
                <button className='bg-red-400 text-white font-bold border border-zinc-400 rounded-md py-1 px-2' onClick={() => deleteTasks(task.id)}>delete</button>
                <button className='bg-slate-500 text-white font-bold border border-zinc-400 rounded-md py-1 px-2' onClick={() => navigate(`/edit/${task.id}`)}>edit</button>
            </div>
        </div>
    )
}

export default TaskCard