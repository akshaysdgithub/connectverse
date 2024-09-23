import React, { useState } from "react";
import { Container, FormContainer, Tab, Tabs } from "../styled_components/login_signup_style";
import Login from "../components/Login";
import Signup from '../components/Signup';
import './Root.css';

const Root = () => {
  const [activeTab, setActiveTab] = useState('login');

  const handleTabClick = (tab) => { setActiveTab(tab); };

  return (
    <div>
        <h1 id='apptitle'>ConnectVerse</h1>
        <Container>
            <FormContainer>
            <Tabs>
                <Tab active={activeTab === 'login'} onClick={() => handleTabClick('login')}>
                Login
                </Tab>
                <Tab active={activeTab === 'signup'} onClick={() => handleTabClick('signup')}>
                Register
                </Tab>
            </Tabs>

            { activeTab === "login" ? <Login /> : <Signup rootTab={handleTabClick} /> }
            </FormContainer>
        </Container>
    </div>
  );
};

export default Root;
