import React from 'react';
import './App.css';
import MeuComponente from './components/countries';
import Header from './components/header';

function App() {
  return (
    <div className="App">
      <Header/>
     <MeuComponente/>
    </div>
  );
}

export default App;

