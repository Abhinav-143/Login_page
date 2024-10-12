// src/Login.js
import React, { useState } from 'react';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({ email: '', password: '' });
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  
  const validateEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

 
  const validatePassword = (password) => {
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
    return passwordPattern.test(password);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let emailError = '';
    let passwordError = '';

    if (!validateEmail(email)) {
      emailError = 'Invalid email format. Email should contain "@" and a domain.';
    }

    if (!validatePassword(password)) {
      passwordError =
        'Password must be at least 8 characters long and contain at least one number, one uppercase letter, and one lowercase letter.';
    }

    setErrors({ email: emailError, password: passwordError });

    if (!emailError && !passwordError) {
      setIsLoggedIn(true);
      alert('Login Successful!');
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            {errors.email && <span className="error">{errors.email}</span>}
          </div>
          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            {errors.password && <span className="error">{errors.password}</span>}
          </div>
          <button type="submit" className="login-button">
            Login
          </button>
        </form>
        {isLoggedIn && <div className="success-message">Welcome, you're logged in!</div>}
      </div>
    </div>
  );
};

export default Login;
