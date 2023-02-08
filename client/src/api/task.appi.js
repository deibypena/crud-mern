import axios from 'axios';

export const getTasksRequest = async () => await axios.get('https://sistema-inventario-production.up.railway.app/tasks')

export const createTaskRequest = async (task) => await axios.post('https://sistema-inventario-production.up.railway.app/tasks', task)

export const createUserRequest = async (user) => await axios.post('https://sistema-inventario-production.up.railway.app/user', user)

export const deleteTaskRequest = async (id) => await axios.delete(`https://sistema-inventario-production.up.railway.app/tasks/${id}`)

export const getTaskRequest = async (id) => await axios.get(`https://sistema-inventario-production.up.railway.app/tasks/${id}`)

export const updateTaskRequest = async (id, newFields) => await axios.put(`https://sistema-inventario-production.up.railway.app/tasks/${id}`, newFields)