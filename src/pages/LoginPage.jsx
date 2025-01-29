// src/pages/LoginPage.jsx
// import React from 'react';
import LoginForm from '../components/LoginForm';


const LoginPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 relative">
      {/* Logo at the top-left */}
      <div className="absolute top-4 left-4">
        <img src="https://content.linkedin.com/content/dam/me/business/en-us/amp/brand-site/v2/bg/LI-Bug.svg.original.svg" alt="LinkedIn Logo" className="w-15" />
      </div>

      {/* Login Form */}
      <LoginForm />
    </div>
  );
};

export default LoginPage;

