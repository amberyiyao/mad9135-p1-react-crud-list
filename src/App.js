import React from 'react';
import './App.css';
import AppHeader from './AppHeader'
import { HashRouter as Router, Route, Link, Switch } from 'react-router-dom'


class App extends React.Component{

  state = {

  }

  render(){
    return (
      <Router>
        <div className="App">
          <AppHeader/>
        </div>
      </Router>
    );
  }
}

export default App;
