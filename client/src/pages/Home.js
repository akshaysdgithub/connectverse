import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

const Home = () => {
  const { token } = useContext(AuthContext);

  return (
    <div>
      <h1>Welcome!</h1>
      {token ? <p>You are logged in.</p> : <p>Please log in.</p>}
    </div>
  );
};

export default Home;
