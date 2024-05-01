import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Tab from './components/tab';
import Content from './components/content';

function App() {
  const [currentTab, setCurrentTab] = useState('lauantai');

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <p>Sipoon Wolfin U8 & U7</p>
          <p>Kevätturnaus 2024</p>
        </header>
        <div className="content-container">
          <div className="tabs">
            <Tab label="Lauantai 18.05.24" tabName="lauantai" />
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
}

export default App;

