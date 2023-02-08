import { Router } from 'express';
import {
    getTasks, 
    getTask, 
    createTask,
    createUser, 
    updateTask, 
    deleteTask
} from '../controllers/tasks.controller.js';

const router = Router();

router.get('/tasks', getTasks);
router.get('/tasks/:id', getTask);
router.post('/tasks', createTask);
router.post('/user', createUser);
router.put('/tasks/:id', updateTask);
router.delete('/tasks/:id', deleteTask);

export default router;
