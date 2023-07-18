// import React from 'react';
import './App.css'
import DataCard from './components/DataCard';
import MessageCard from './components/MessageCard';

function App() {
  

  return (
    <div className="App">
      <nav>
        <a href="/">React with CSS Styles</a>
      </nav>
      <MessageCard/>
      <DataCard/> 
      {/* wants to display below to the navbar */}
    </div>
  );
  }

  

export default App
