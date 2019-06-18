import React from 'react';
import Main from './Main'
import Main2 from './Main2'
import About from './about'
import catalog1 from './catalog1'
import catalog2 from './catalog2'
import help from './help'
import details1 from './details1'
import details2 from './details2'
import './App.css';
import {Switch, Route} from 'react-router-dom';


function App() {
  return (
    <div className="App">
       <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/Main2" component={Main2} />
          <Route exact path="/catalog1" component={catalog1} />
          <Route path="/catalog2" component={catalog2} />
          <Route exact path="about" component={About} />
          <Route path="/help" component={help} />
          <Route exact path="/details1" component={details1} />
          <Route path="/details2" component={details2} />

        </Switch>
    </div>
  );
}

export default App;
