
import { query } from '../db';

export const getTodos = async (req, res) => {
  const { userId } = req.user; 
  try {
    const result = await query('SELECT * FROM todos WHERE user_id = $1', [userId]);
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: 'Something went wrong' });
  }
};

export const createTodo = async (req, res) => {
  const { title, description, dueDate, category } = req.body;
  const { userId } = req.user; 

  try {
    const result = await query(
      'INSERT INTO todos (title, description, due_date, category, user_id) VALUES ($1, $2, $3, $4, $5) RETURNING *',
      [title, description, dueDate, category, userId]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: 'Something went wrong' });
  }
};

export const updateTodo = async (req, res) => {
  const { id } = req.params;
  const { title, description, dueDate, category } = req.body;
  const { userId } = req.user;

  try {
    const result = await query(
      'UPDATE todos SET title = $1, description = $2, due_date = $3, category = $4 WHERE id = $5 AND user_id = $6 RETURNING *',
      [title, description, dueDate, category, id, userId]
    );
    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: 'Something went wrong' });
  }
};

export const deleteTodo = async (req, res) => {
  const { id } = req.params;
  const { userId } = req.user;

  try {
    await query('DELETE FROM todos WHERE id = $1 AND user_id = $2', [id, userId]);
    res.status(204).end();
  } catch (err) {
    res.status(500).json({ error: 'Something went wrong' });
  }
};
