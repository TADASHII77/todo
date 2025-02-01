import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './LoginPage';
import RegisterPage from './RegisterPage';
import TodoPage from './TodoPage';

const App = () => {
  const [token, setToken] = useState(localStorage.getItem('token'));

  const setAuthToken = (newToken) => {
    localStorage.setItem('token', newToken);
    setToken(newToken);
  };

  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Routes>
          <Route path="/login" element={<LoginPage setAuthToken={setAuthToken} />} />
          <Route path="" element={<RegisterPage setAuthToken={setAuthToken} />} />
          <Route path="/todos" element={<TodoPage token={token} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
