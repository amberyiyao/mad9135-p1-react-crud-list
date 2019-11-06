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
    ],
    inputValue: {}
  }

  handleInputChange = ({target: {id, value}}) => {
    const newValue = {...this.state.inputValue, [id]: value}
    this.setState({inputValue: newValue})

  }

  handleAddorEditFramework = (target)=>{
    const id = target.getAttribute('data-id')

    if(id !== 0){
      const newList = this.state.list.map((frame)=> {
        if (frame.id === id){
          return {id: id, ...this.state.inputValue}
        } else {
          return frame
        }
      })
      this.setState({list: newList})
    } else {
      const newFramework = {id:Date.now(),...this.state.inputValue}
      const newList = [newFramework,...this.state.list]
      this.setState({list: newList})
    }
  }


  render(){
    return (
      <Router>
        <div className="App">
          <AppHeader/>
          <Switch>
            <Route path="/addNew">
              <p className="addTitle">Add a New Framework</p>
              <NewItemView handleInputChange={this.handleInputChange} handleAddorEditFramework={this.handleAddorEditFramework}/>
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
