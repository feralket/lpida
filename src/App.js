import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import NavBar from './components/layout/Navbar'
import Dashboard from './components/dashboard/Dashboard'
import Footer from './components/layout/Footer'
import './App.css'

class App extends Component {
  render() {
    return(
      <BrowserRouter>
        <div className="App">
          <div className="content">
            <NavBar/>
            <Switch>
              <Route path='/' component={Dashboard}/>
            </Switch>
          </div>
          <footer>
            <Footer /> 
          </footer> 
           
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
