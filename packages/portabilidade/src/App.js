import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Portabilidade
        </p>
        <a
          className="App-link"
          href="http://localhost:3000/"
          rel="noopener noreferrer"
        >
          Projeto Existentes
        </a>
        <a
          className="App-link"
          href="http://localhost:3000/page1"
          rel="noopener noreferrer"
        >
          Projeto Existentes page 1
        </a>
        <a
          className="App-link"
          href="http://localhost:3000/page2"
          rel="noopener noreferrer"
        >
          Projeto Existentes page 2
        </a>
      </header>
    </div>
  );
}

export default App;
