import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Tab from './components/tab';
import Content from './components/content';
import logo from './sipoonwolf.png'; // Import the logo image

function App() {
  const [currentTab, setCurrentTab] = useState('lauantai');

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <div className="logo-container">
            <img src={logo} alt="Logo" className="logo" /> {/* Render the logo */}
            <div className="title">
              <p>Sipoon Wolf U7 & U8</p>
              <p>Kevätturnaus 2024</p>
            </div>
          
          </div>
        </header>
        <div className="content-container">
          <div className="tabs">
            <Tab label="Lauantai 18.05.24" tabName="lauantai" currentTab={currentTab} setCurrentTab={setCurrentTab} />
            <Tab label="Sunnuntai 19.05.24" tabName="sunnuntai" />
            <Tab label="Pukukopit" tabName="pukukopit" />
            <Tab label="Ruokailu" tabName="ruokailu" />
            <Tab label="Kahvila & Arpajaiset" tabName="kahvila" />
          </div>
          <Content />
        </div>
      </div>
    </Router>
  );
};

export default App;
