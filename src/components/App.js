import React, { Component } from 'react'
import logo from '../logo.svg'
import './App.css'
import  Navbar from '../containers/Navbar'
import  BodyContainer from '../containers/BodyContainer'

// Using class here
class App extends Component {
  render() {

    return ( 
      <div className="App">
        <Navbar  />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Regattas list</h1>
        </header>
        <h4 className="App-intro">
          List of regattas.
        </h4>
        <BodyContainer />
      </div>
    )
  }
}

export default App
