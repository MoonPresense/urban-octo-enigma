import './App.css';

import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Home from './Pages/Home/Home';
import Template from './Pages/Template/Template';
import Editor from './Pages/Editor/Editor'

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route component={Home} path="/" exact />
          <Route component={Template} path="/template" exact />
          <Route component={Editor} path="/editor" exact />

        
        </Switch>
      </Router>
    
    
    
    );
  }
}

export default App;