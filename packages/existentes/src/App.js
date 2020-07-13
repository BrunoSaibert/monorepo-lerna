import React from 'react';
import logo from './logo.svg';
import './App.css';

import { createBrowserHistory } from 'history';
import { Router } from 'react-router-dom';

import Routes from './routes';

const history = createBrowserHistory();

function App() {
  return (
    <Router history={history}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Existentes
          </p>
          <a
            className="App-link"
            href="http://localhost:3001/"
            rel="noopener noreferrer"
          >
            Projeto Portabilidade
          </a>

          <Routes />

        </header>
      </div>
    </Router>
  );
}

export default App;
