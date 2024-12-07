import './App.css';
import React from 'react';
import Chatbot from './Chatbot';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Social-Emotional Learning</h1>
      </header>
      <Chatbot /> {/* Add the chatbot component */}
    </div>
  );
}

export default App;
