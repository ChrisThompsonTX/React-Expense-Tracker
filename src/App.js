import React from 'react';
import { Header } from './components/header';
import { Balance } from './components/balance';
import './App.css';

function App() {
  return (
    <div>
      <Header />
      <div className="container">
        <Balance />
      </div>
    </div>
  );
}

export default App;
