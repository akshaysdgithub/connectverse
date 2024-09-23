import React, { useState } from 'react';
import { request } from "../utils/axiosRequest";
import { Input, Button } from "../styled_components/login_signup_style";
import { validateEmail, validatePassword } from "../utils/helper_fun";

const Signup = ({ rootTab }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [msg, setMsg] = useState('');


  const handleSignupSubmit = async (e) => {
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

    // to signup
    const response = await request.signup(username, email, password);
    if(response.status === 201) {
      console.log("User created.");
      setMsg("User created Sucessfully.");
      setTimeout(() => rootTab('login'), 1800);
    }
    else{
      setError("SignUp Failed.");
    }
  };

  return (
    <form className='login_signup' onSubmit={handleSignupSubmit}>
      <Input
        type="text" value={username} onChange={(e) => setUsername(e.target.value)}
        placeholder="Username" required
      />
      <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)}
        placeholder="Email" required
      />
      <Input
        type="password" value={password} onChange={(e) => setPassword(e.target.value)}
        placeholder="Password" required
      />
      <Button type="submit">Sign up</Button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {msg && <p style={{ color: 'green' }}>{msg}</p>}
    </form>
  );
};

export default Signup;
