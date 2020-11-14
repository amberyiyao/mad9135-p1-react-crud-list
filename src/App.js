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

  clearInput = () => {
    this.setState({inputValue:{}})
  }

  handleInputChange = ({target: {id, value}}) => {
    const newValue = {...this.state.inputValue, [id]: value}
    this.setState({inputValue: newValue})
  }

  handleDeleteFramework = (id) =>{
    const newList = this.state.list.filter((frame) => {
      if(frame.id == id ){
        if(window.confirm(`Do you want to delet ${frame.name}?`)){
          return false
        }
      } 
        return true
    })
    this.setState({list: newList})
    this.clearInput()
  }

  handleAddorEditFramework = (ev) => {

    const id = ev.target.getAttribute('data-id')
    const input = this.state.inputValue

    if(id != 0){

      for(let key in input){
        if(!input[key]){
          alert(`${key} can not be empty!`)
          document.getElementById(key).focus()
          ev.preventDefault()
          return
        }
      }

      const newList = this.state.list.map((frame)=> {
        if (frame.id == id){
          const edited = {...frame, id: id, ...this.state.inputValue}
          return edited
        } else {
          return frame
        }
      })

      this.setState({list: newList})
    } else {

      if(!input.name){
        alert(`name can not be empty!`)
        document.getElementById('name').focus()
        ev.preventDefault()
        return
      } else if(!input.docsURL){
        alert(`docsURL can not be empty!`)
        document.getElementById('docsURL').focus()
        ev.preventDefault()
        return
      }else if(!input.lead){
        alert(`lead can not be empty!`)
        document.getElementById('lead').focus()
        ev.preventDefault()
        return
      }

      const newFramework = {id:Date.now(),...this.state.inputValue}
      const newList = [newFramework,...this.state.list]
      this.setState({list: newList})
    }

    this.clearInput()
  }

  componentDidMount(){
    if(localStorage.getItem('frameworkList')){
      this.setState({list: JSON.parse(localStorage.getItem('frameworkList'))})
    }
  }

  componentDidUpdate(){
    localStorage.setItem('frameworkList',JSON.stringify(this.state.list))
  }


  render(){
    return (
      <Router >
        <div className="App">
          <AppHeader/>
          <Switch>
            <Route path="/addNew">
              <p className="addTitle">Add a New Framework</p>
              <NewItemView handleInputChange={this.handleInputChange} handleAddorEditFramework={this.handleAddorEditFramework}/>
            </Route>
            <Route path="/">
              <ListView list={this.state.list} handleDeleteFramework={this.handleDeleteFramework} handleInputChange={this.handleInputChange} handleAddorEditFramework={this.handleAddorEditFramework}/>
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
