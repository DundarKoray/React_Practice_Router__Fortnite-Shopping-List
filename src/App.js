import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css'

import Nav from './Nav'
import About from './pages/About'
import Shop from './pages/Shop'
import Contact from './pages/Contact'


function App() {
  return (
    <div>
      <Nav />
      <About />
      <Shop />
      <Contact />
    </div>
  )
}


export default App;
