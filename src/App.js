import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Tab from './components/tab';
import Content from './components/content';

function App() {
  const [currentTab, setCurrentTab] = useState('');

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <div className="logo-container">
            <img src="https://files.eliteprospects.com/layout/logos/f667f640-87d9-4879-b248-dde1387fac00_large.png" alt="Logo" className="logo" /> {/* Render the logo */}
            <div className="title">
              <p>  Tervetuloa Wolfin U8</p>
              <p> itsenäisyysturnaukseen</p>
              <p> Sipoossa!</p> 
            </div>
          
          </div>
        </header>
        <div className="content-container">
          <div className="tabs">
            <Tab label="Turnaus-info" tabName="turnausInfo" currentTab={currentTab} setCurrentTab={setCurrentTab} />
            <Tab label="Lohko A otteluohjelma" tabName="lauantai"  />
            <Tab label="Lohko B otteluohjelma" tabName="sunnuntai" />
            <Tab label="Pukukopit" tabName="pukukopit" />
            {/*<Tab label="Turnausruokailu" tabName="ruokailu" />*/}
            <Tab label=" Susi Kahvila" tabName="kahvila" />
            <Tab label="Arpajaiset ja onnenpyörä" tabName="arpajaiset" />
          </div>
          <Content />
        </div>
      </div>
    </Router>
  );
};

export default App;
