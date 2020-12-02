import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import NavBar from './components/layout/Navbar'
import Dashboard from './components/dashboard/Dashboard'
import Products from './components/dashboard/products/Products'
import Footer from './components/layout/Footer'
import './App.css'
import Picture from './components/dashboard/pictures/Picture'
import PromoDashboard from './components/dashboard/PromoDashboard'
import About from './components/dashboard/about/About'

class App extends Component {
  render() {
    return(
      <BrowserRouter>
        <div className="App">
          <div className="content">
            <NavBar/>
            <Switch>
              <Route path='/' exact component={PromoDashboard}/>
              <Route path='/products' component={Products}/>
              <Route path='/pictures' component={Picture}/>
              <Route path='/about' component={About}/>
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
