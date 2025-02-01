import React from 'react';

const TodoList = ({ todos, onDelete, onEdit }) => {
  return (
    <div className="space-y-4">
      {todos.map((todo) => (
        <div key={todo._id} className="flex items-center justify-between p-4 bg-gray-100 rounded shadow-md">
          <div>
            <h3 className="font-semibold">{todo.title}</h3>
            <p>{todo.description}</p>
            <p className="text-sm text-gray-500">{todo.dueDate}</p>
            <p className="text-xs text-blue-500">{todo.category}</p>
          </div>
          <div className="space-x-2">
            <button
              onClick={() => onEdit(todo)}
              className="py-1 px-4 bg-yellow-500 text-white rounded hover:bg-yellow-600"
            >
              Edit
            </button>
            <button
              onClick={() => onDelete(todo._id)}
              className="py-1 px-4 bg-red-500 text-white rounded hover:bg-red-600"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
