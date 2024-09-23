import React, { useState, useContext } from 'react';
import { request } from "../utils/axiosRequest";
import { AuthContext } from '../context/AuthContext';
import { Input, Button } from "../styled_components/login_signup_style";
import { useNavigate } from "react-router-dom";
import { validateEmail, validatePassword } from "../utils/helper_fun";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useContext(AuthContext);
  const [error, setError] = useState('');
  const navigate = useNavigate();


  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    setError('');

    // validation
    if(!validateEmail(email)) {
      setError('Please enter a valid email address.');
      return;
    }

    if(!validatePassword(password)) {
      setError('Password must be at least 6 characters long.');
      return;
    }

    // to login
    const response = await request.login(email, password);
    if(response?.status === 200)
    {
      login(response.data.token);
      navigate("/home", { state: { username: response.data.username }, replace: true });
    }
    else{
      setError('Login failed. Please try again.');
    }
  };

  return (
    <form className='login_signup' onSubmit={handleLoginSubmit}>
      <Input
        type="email" value={email} onChange={(e) => setEmail(e.target.value)}
        placeholder="Email Address" required
      />
      <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)}
        placeholder="Password" required
      />
      <Button type="submit">Sign in</Button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </form>
  );
};

export default Login;
