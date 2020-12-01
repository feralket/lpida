import React, { Component } from 'react'
import DashboardNav from './DashboardNav'
import PromoDashboard from './PromoDashboard'

class Dashboard extends Component{
    render(){
        return (
            <div>
                <DashboardNav/>
                <PromoDashboard />
            </div>

        )
    }
}

export default Dashboard;