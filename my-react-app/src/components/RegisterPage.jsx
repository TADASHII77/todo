import React from 'react';
import AuthForm from './AuthForm';


const RegisterPage = ({ setAuthToken }) => (
  <div className="max-w-lg mx-auto mt-10">
    <AuthForm mode="register" setAuthToken={setAuthToken} />
  </div>
);

export default RegisterPage;
