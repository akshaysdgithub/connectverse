import React from 'react';
import { AuthProvider } from './context/AuthContext';
import Login from './components/Login';
import Signup from './components/Signup';
import Home from './pages/Home';

const App = () => {
  return (
    <AuthProvider>
      <div>
        <h1>Authentication App</h1>
        <Home />
        <Signup />
        <Login />
      </div>
    </AuthProvider>
  );
};

export default App;
