import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useLocation, useNavigate } from "react-router-dom";

const Home = () => {
  const { token } = useContext(AuthContext);
  const { logout } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/", { replace: true });
  }

  return (
    <div>
      <h1>Welcome {location.state.username || '' }</h1>
      {token ? <p>You are logged in.</p> : <p>Please log in.</p>}
      <br />
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Home;
