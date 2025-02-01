import React, { useState } from 'react';

const TodoForm = ({ addTodo, updateTodo, todo, setIsEditing }) => {
  const [formData, setFormData] = useState(todo || { title: '', description: '', dueDate: '', category: 'non-urgent' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todo) {
      updateTodo(formData);
    } else {
      addTodo(formData);
    }
    setIsEditing(false);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 bg-red-100">
      <input
        type="text"
        name="title"
        placeholder="Title"
        value={formData.title}
        onChange={handleInputChange}
        className="w-full p-2 border border-gray-300 rounded"
        required
      />
      <textarea
        name="description"
        placeholder="Description"
        value={formData.description}
        onChange={handleInputChange}
        className="w-full p-2 border border-gray-300 rounded"
      />
      <input
        type="date"
        name="dueDate"
        value={formData.dueDate}
        onChange={handleInputChange}
        className="w-full p-2 border border-gray-300 rounded"
      />
      <select
        name="category"
        value={formData.category}
        onChange={handleInputChange}
        className="w-full p-2 border border-gray-300 rounded"
      >
        <option value="urgent">Urgent</option>
        <option value="non-urgent">Non-Urgent</option>
      </select>
      <button
        type="submit"
        className="w-full py-2 bg-green-600 text-white rounded hover:bg-green-700"
      >
        {todo ? 'Update Todo' : 'Create Todo'}
      </button>
    </form>
  );
};

export default TodoForm;
