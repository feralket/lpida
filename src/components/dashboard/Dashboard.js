import React, { Component } from 'react'
import DashboardNav from './DashboardNav'
import PromoDashboard from './PromoDashboard'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Products from './products/Products'
import Pictures from './pictures/Picture'

class Dashboard extends Component{
    render(){
        return (
            <BrowserRouter>
                <div>
                    {/* <DashboardNav /> */}
                    <switch>
                        <Route path='/' exact component={PromoDashboard}/>
                        <Route path='/products' component={Products}/>
                        <Route path='/pictures' component={Pictures}/>
                        
                    </switch>             
                </div>
                

                
            </BrowserRouter>
            
            

        )
    }
}

export default Dashboard;