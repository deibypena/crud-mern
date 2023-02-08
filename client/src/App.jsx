import { Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import NotFoundPage from './pages/NotFoundPage'
import TasksForm from './pages/TasksForm'
import TasksPage from './pages/TasksPage'
import { TaskContextProvider } from './context/TaskContext'

function App() {
  return (
    <div className='bg-zinc-900 h-screen'>
        <Nav />
      <div className="container mx-auto py-4">
        <TaskContextProvider>
          <Routes>
            <Route path="/" element={<TasksPage/>} />
            <Route path="/new" element={<TasksForm/>} />
            <Route path="/edit/:id" element={<TasksForm/>} />
            <Route path="*" element={<NotFoundPage/>} />
          </Routes>
        </TaskContextProvider>
      </div>
    </div>
  )
}

export default App