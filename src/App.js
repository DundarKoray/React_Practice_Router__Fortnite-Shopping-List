import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css'

import Nav from './Nav'
import About from './pages/About'
import Shop from './pages/Shop'
import ItemDetail from './pages/ItemDetail'
import Contact from './pages/Contact'


function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About}/>
          <Route exact path="/shop" component={Shop}/>
          <Route path="/shop/:id" component={ItemDetail}/>
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
      <p>Go to shop page to see the latest Fortnite items</p>
    </div>
  )
}

export default App;
