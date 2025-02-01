import React, { useEffect, useState } from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import { getTodos, createTodo, updateTodo, deleteTodo } from '../utils/api';

const TodoPage = ({ token }) => {
  const [todos, setTodos] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [currentTodo, setCurrentTodo] = useState(null);

  useEffect(() => {
    if (token) {
      const fetchTodos = async () => {
        const response = await getTodos(token);
        setTodos(response.data);
      };
      fetchTodos();
    }
  }, [token]);

  const addTodo = async (todoData) => {
    const response = await createTodo(token, todoData);
    setTodos([...todos, response.data]);
  };

  const editTodo = (todo) => {
    setIsEditing(true);
    setCurrentTodo(todo);
  };

  const updateTodo = async (todoData) => {
    const response = await updateTodo(token, currentTodo._id, todoData);
    setTodos(todos.map(todo => (todo._id === response.data._id ? response.data : todo)));
  };

  const removeTodo = async (todoId) => {
    await deleteTodo(token, todoId);
    setTodos(todos.filter(todo => todo._id !== todoId));
  };

  return (
    <div className="max-w-4xl mx-auto mt-10">
      <TodoForm addTodo={addTodo} updateTodo={updateTodo} todo={currentTodo} setIsEditing={setIsEditing} />
      <TodoList todos={todos} onDelete={removeTodo} onEdit={editTodo} />
    </div>
  );
};

export default TodoPage;
