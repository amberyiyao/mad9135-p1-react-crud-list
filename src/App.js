import React from 'react';
import './App.css';
import AppHeader from './AppHeader'
import ListView from './ListView'

import { HashRouter as Router, Route, Link, Switch } from 'react-router-dom'


class App extends React.Component{

  state = {
    list: [{
        name: 'Vue',
        lead: 'Even You',
        docsURL: 'https://vuejs.org/'
      },{
        name: 'Vue',
        lead: 'Even You',
        docsURL: 'https://vuejs.org/'
      }
    ]
  }

  render(){
    return (
      <Router>
        <div className="App">
          <AppHeader/>
          <ListView list={this.state.list}/>
        </div>
      </Router>
    );
  }
}

export default App;
