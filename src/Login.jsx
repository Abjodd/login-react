// src/Login.jsx
import React, { useState } from 'react';
import './Login.css';
import { login, register } from './auth';
import { TailSpin } from 'react-loader-spinner';

const Login = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async () => {
    setIsLoading(true);
    try {
      await login();
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleRegister = async () => {
    setIsLoading(true);
    try {
      await register();
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div id="content_container">
      <div id="form_container">
        <div id="form_header_container">
          <h2 id="form_header">ARBEEL WANI PAGE</h2>
        </div>
        <div id="form_content_container">
          <div id="form_content_inner_container">
            <input type="text" id="full_name" placeholder="Full name" /><br />
            <input type="email" id="email" placeholder="Email" /><br />
            <input type="password" id="password" placeholder="New Password" /><br />
            <input type="text" id="city" placeholder="Your city" /><br />
            <input type="text" id="role" placeholder="Customer/Manager/Supplier" /><br />
            <div id="button_container">
              <button onClick={handleLogin} disabled={isLoading}>
                {isLoading ? <TailSpin height={20} width={20} color="#fff" /> : 'Login'}
              </button>
              <button onClick={handleRegister} disabled={isLoading}>
                {isLoading ? <TailSpin height={20} width={20} color="#fff" /> : 'Register'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
