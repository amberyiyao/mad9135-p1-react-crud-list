import React from 'react';
import './App.css';
import AppHeader from './AppHeader'
import ListView from './ListView'
import NewItemView from './NewItemView'

import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

class App extends React.Component{

  state = {
    list: [{
        id:1,
        name: 'Vue',
        lead: 'Even You',
        docsURL: 'https://vuejs.org/'
      },{
        id:2,
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
          <Switch>
            <Route path="/addNew">
              <p className="addTitle">Add a New Framework</p>
              <NewItemView/>
            </Route>
            <Route path="/">
              <ListView list={this.state.list}/>
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
