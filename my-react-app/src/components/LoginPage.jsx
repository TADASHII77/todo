import React from 'react';
import AuthForm from './AuthForm';

const LoginPage = ({ setAuthToken }) => (
  <div className="max-w-lg mx-auto mt-10">
    <AuthForm mode="login" setAuthToken={setAuthToken} />
  </div>
);

export default LoginPage;
