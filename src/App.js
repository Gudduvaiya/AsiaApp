import React, { Component } from 'react'
import Body from './Components/Body'
import Navbar from './Components/Navbar'

export class App extends Component {
  render() {
    return (
      <div>
      <Navbar/>
        <h1>Hello Country</h1>
        <Body/>
      </div>
    )
  }
}

export default App
