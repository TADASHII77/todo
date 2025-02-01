
import express from 'express';
import cors from 'cors';
import { config } from 'dotenv';
import { createUser, loginUser } from './controllers/authcontroller.js'
import { getTodos, createTodo, updateTodo, deleteTodo } from './controllers/todocontroller.js';

config(); s

const app = express();
app.use(cors());
app.use(express.json());

app.post('/api/register', createUser);
app.post('/api/login', loginUser);
app.get('/api/todos', getTodos);
app.post('/api/todos', createTodo);
app.put('/api/todos/:id', updateTodo);
app.delete('/api/todos/:id', deleteTodo);

const port = process.env.PORT || 8084;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});



