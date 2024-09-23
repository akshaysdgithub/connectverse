// src/components/Signup.js
// import React, { useState } from 'react';
import styled from 'styled-components';
// import axios from 'axios';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  // height: 100vh;
  // background: linear-gradient(to right, #ff7e5f, #feb47b);
`;

export const FormContainer = styled.div`
  background: white;
  padding: 20px;
  border: 1px solid black;
  border-radius: 10px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  width: 90%;
  max-width: 400px;
`;

export const Tabs = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

export const Tab = styled.button`
  background: none;
  border: none;
  padding: 10px;
  cursor: pointer;
  font-weight: bold;
  font-size: 1em;
  color: ${({ active }) => (active ? '#1266f1' : '#666')};
  border-bottom: ${({ active }) => (active ? '2px solid #1266f1' : 'none')};

  &:hover {
    color: #1266f1;
  }
`;

export const Input = styled.input`
  width: 95%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 5px;
  -webkit-transition: 0.5s;
  transition: 0.5s;
  outline: none;

  &:focus {
    border: 1px solid #4a7ed4;
  }
`;

export const Button = styled.button`
  width: 100%;
  margin-top: 1.50em;
  padding: 10px;
  text-size: 0.75em;
  background-color: #ff7e5f;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.3s;

  &:hover {
    background-color: #feb47b;
  }
`;

export const Checkbox = styled.input`
  margin-right: 10px;
`;

// const Signup = () => {
//     const [username, setUsername] = useState('');
//     const [password, setPassword] = useState('');

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         await axios.post('http://localhost:5000/api/signup', { username, password });
//         alert('User registered');
//     };

//     return (
//         <Container>
//             <FormContainer>
//                 <h2>Create an Account</h2>
//                 <form onSubmit={handleSubmit}>
//                     <Input type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)} required />
//                     <Input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} required />
//                     <Button type="submit">Sign Up</Button>
//                 </form>
//             </FormContainer>
//         </Container>
//     );
// };

// export default Signup;
