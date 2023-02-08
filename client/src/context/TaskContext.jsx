import { createContext, useContext, useState } from "react";
import { getTasksRequest, deleteTaskRequest, createTaskRequest, getTaskRequest, updateTaskRequest, createUserRequest } from '../api/task.appi.js'
export const TaskContext = createContext();

export const useTasks = () => {
    const context = useContext(TaskContext);
    if (!context) {
        throw new Error('useTasks must be used within a TaskProvider');
    }
    return context;
}


export const TaskContextProvider = ({ children }) => {
    const [tasks, setTasks] = useState([]);

    async function loadTasks () {
        const response = await getTasksRequest()
        setTasks(response.data)
    }

    const deleteTasks = async (id) => {
        try {
            const response = await deleteTaskRequest(id)
            setTasks(tasks.filter(task => task.id !== id ))
        } catch (error) {
            console.error(error)  
        }
    }

    const createTask = async (task) => {
        try {
            const response = await createTaskRequest(task)
            console.log(response)
          } catch (error) {
            console.error(error)
        }
    }

    const createUser = async (user) => {
        try {
            const response = await createUserRequest(user)
            console.log(response)
          } catch (error) {
            console.error(error)
        }
    }

    const getTask = async (id) => {
        try {
            const response = await getTaskRequest(id)
            return response.data   
        } catch (error) {
            console.error(error)
        }
    }

    const updateTask = async (id, newFields) => {
        try {
            const response = await updateTaskRequest(id, newFields)
            console.log(response)
        } catch (error) {
            console.error(error)
        }
    }
    
    return <TaskContext.Provider value={{ tasks, loadTasks, deleteTasks, createTask, createUser, getTask, updateTask }} >{children}</TaskContext.Provider>
}