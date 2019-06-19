import React from 'react';
import Navbar from './Navbar'
import Home from './Home'
import Main from './Main'
import Play from './Play'
import Upload from './Upload'
import Footer from './Footer'

import './App.css';

//React-Router-Dom
import {Switch, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/Main' component={Main} />
        <Route path='/play/:id' component={Play} />
        <Route path='/upload' component={Upload} />

      </Switch>

      <Footer />
    </div>
  );
}

export default App;
