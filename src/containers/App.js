import React, { Component } from 'react'
import logo from '../assets/logo.svg'
import '../styles/App.css'

class App extends Component {
    render() {
        return (
            <h1>Hello <img src={logo} alt=""/></h1> 
        )
    }
}

export default App