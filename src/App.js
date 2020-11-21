import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import Route from 'react-router-dom/Route';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/navbar';
import MenuAppBar from './components/navbar';
import Hero from './components/hero';
import Clases from './components/clases';
import Familia from './components/familia';
import Footer from './components/footer';
import Historia from './components/historia';
import Landing from './components/landing';

function App() {
  return (
    <div className="App">
        <MenuAppBar />
        <Landing />
    </div>
  );
}

export default App;
