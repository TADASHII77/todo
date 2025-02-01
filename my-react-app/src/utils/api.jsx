import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

export const loginUser = async (data) => {
  try {
    const response = await axios.post(`${API_URL}/auth/login`, data);
    return response;
  } catch (error) {
    throw new Error(error.response?.data?.message || error.message);
  }
};

export const registerUser = async (data) => {
  try {
    const response = await axios.post(`${API_URL}/auth/register`, data);
    return response;
  } catch (error) {
    throw new Error(error.response?.data?.message || error.message);
  }
};

export const getTodos = async (token) => {
  try {
    const response = await axios.get(`${API_URL}/todos`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response;
  } catch (error) {
    throw new Error(error.response?.data?.message || error.message);
  }
};

export const createTodo = async (token, todoData) => {
  try {
    const response = await axios.post(`${API_URL}/todos`, todoData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response;
  } catch (error) {
    throw new Error(error.response?.data?.message || error.message);
  }
};

export const updateTodo = async (token, todoId, todoData) => {
  try {
    const response = await axios.put(`${API_URL}/todos/${todoId}`, todoData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response;
  } catch (error) {
    throw new Error(error.response?.data?.message || error.message);
  }
};

export const deleteTodo = async (token, todoId) => {
  try {
    const response = await axios.delete(`${API_URL}/todos/${todoId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response;
  } catch (error) {
    throw new Error(error.response?.data?.message || error.message);
  }
};
