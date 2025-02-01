import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginUser, registerUser } from '../utils/api';

const AuthForm = ({ mode, setAuthToken }) => {
  const [formData, setFormData] = useState({
    email: '',
    username: '',
    password: '',
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let response;
      if (mode === 'login') {
        response = await loginUser(formData);
      } else {
        response = await registerUser(formData);
      }
      setAuthToken(response.data.token);
      navigate('/todos');
    } catch (err) {
      setError('Something went wrong');
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded shadow-md">
      <h2 className="text-2xl font-semibold text-center">{mode === 'login' ? 'Login' : 'Register'}</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleInputChange}
          className="w-full p-2 mt-4 border border-gray-300 rounded"
          required
        />
        {mode === 'register' && (
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleInputChange}
            className="w-full p-2 mt-4 border border-gray-300 rounded"
            required
          />
        )}
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleInputChange}
          className="w-full p-2 mt-4 border border-gray-300 rounded"
          required
        />
        <button
          type="submit"
          className="w-full py-2 mt-4 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          {mode === 'login' ? 'Login' : 'Register'}
        </button>
      </form>
      {error && <div className="mt-4 text-red-500 text-center">{error}</div>}
    </div>
  );
};

export default AuthForm;
