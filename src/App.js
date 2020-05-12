import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter} from 'react-router-dom';
import Routes from './routes';
import Header from './components/Header';

function App() {
  return (
    <>

    <BrowserRouter>
    <Header/>
      <Routes/>
    </BrowserRouter>
    </>
    );
}

export default App;
