import React, { Component } from 'react';
import Route from 'react-router-dom/Route';
import { BrowserRouter } from 'react-router-dom';
import Hero from './hero';
import Clases from './clases';
import Familia from './familia';
import Footer from './footer';
import Historia from './historia';

function Landing() {
  return (
    <div >
        <Hero />
        <Clases />
        <Familia />
        <Historia />
        <Footer />
    </div>
  );
}

export default Landing;