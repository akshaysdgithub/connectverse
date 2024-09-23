import React from 'react';
import { AuthProvider } from './context/AuthContext';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Root from './pages/Root';
import Home from './pages/Home';

const App = () => {
  // const [activeTab, setActiveTab] = useState('login');

  // const handleTabClick = (tab) => { setActiveTab(tab); };

  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Root />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
