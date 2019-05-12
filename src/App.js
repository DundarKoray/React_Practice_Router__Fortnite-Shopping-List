import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css'

import Nav from './Nav'
import About from './pages/About'
import Shop from './pages/Shop'
import Contact from './pages/Contact'


function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About}/>
          <Route path="/shop" component={Shop}/>
          <Route path="/contact" component={Contact}/>
        </Switch>
      </div>
    </Router>
  )
}


const Home = () => {
  return (
    <div>
      <h1>Home Page</h1>
    </div>
  )
}

export default App;
