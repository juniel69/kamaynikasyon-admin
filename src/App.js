import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import Header from './components/Header/Header';
import MainContent from './components/MainContent/MainContent';

function App() {
  return (
    <div className="App">
      <Sidebar />
      <div className="main-panel">
        <Header />
        <MainContent />
      </div>
    </div>
  );
}

export default App;
