import express from 'express';
import cors from 'cors';
import {dirname, join} from 'path';
import {fileURLToPath} from 'url';
import { PORT } from './config.js';
import taskRoutes from './routes/tasks.routes.js';

const app = express();
const __dirname = dirname(fileURLToPath(import.meta.url));

app.use(cors());
app.use(express.json());

app.use(taskRoutes);

app.use(express.static(join(__dirname, '../client/dist')));

app.get('/', (req,res) => {
    res.send("Hello");
})

app.listen(PORT)
console.log(`se esta escuchando en el puerto ${PORT}`);