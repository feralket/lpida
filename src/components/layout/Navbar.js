import React, {Component} from 'react'
import { NavLink, Link, Switch, BrowserRouter,Route } from 'react-router-dom'
import Products from '../dashboard/products/Products'

const navHome = {
    paddingTop: '10px',
    marginBottom: '-10px'
}

export class NavBar extends Component {
    componentDidMount(){
        const M = window.M;
        document.addEventListener('DOMContentLoaded', function() {
            var elems = document.querySelectorAll('.sidenav');
            var instances = M.Sidenav.init(elems, {edge: "right"});
            console.log(elems)
          });

        
    }
    render() {
        return (
            <div >
                <div className="navbar-fixed">
                    <nav className="nav-wrapper black z-depth-2 ">
                        <div className="container"> 
                            <NavLink to='/' className="brand-logo left hide-on-med-and-down"><img src="/icons/lpida logo final.png" alt="" height="64" width="90"/></NavLink>
                            <NavLink to='/' className="brand-logo hide-on-med-and-up"><img src="/icons/logo_nav.png" alt="" style={navHome}/></NavLink>     
                            <a href="#" data-target="mobile-demo" className="sidenav-trigger right show-on-small">
                                <i className="material-icons ">menu</i>
                            </a>
                            <ul className="right hide-on-small-only">    
                                <div className="right">
                                        <li><NavLink to='/products'>Products</NavLink></li>
                                        <li><NavLink to='/about'>About</NavLink></li>
                                </div>
                            </ul>                         
                        </div>
                    </nav> 

                </div>
            
            <div>
                <ul class="sidenav" id="mobile-demo">
                    <li><a href="/products">Products</a></li>
                    <li><a href="/about">About</a></li>
                </ul> 

            </div>
                

                
           
              
        </div>
        )
    }
}


// const NavBar = () => {

//     return (
//         <div className="navbar-fixed">
//             <nav className="nav-wrapper black z-depth-2">
//                 <div className="container"> 
//                     <NavLink to='/' className="brand-logo left"><img src="/icons/logo_nav.png" alt="" style={navHome}/></NavLink>    
//                     <a href="#" data-target="mobile-demo" className="sidenav-trigger right show-on-small">
//                         <i className="material-icons ">menu</i>
//                     </a>
//                     <ul className="right hide-on-small-only">    
//                         <div className="right">
//                                 <li><NavLink to='/products'>Products</NavLink></li>
//                                 <li><NavLink to='/pictures'>Pictures</NavLink></li> 
//                                 <li><NavLink to='/about'>About</NavLink></li>

//                         </div>
//                     </ul>                         
//                 </div>
//             </nav> 

//             <ul class="sidenav" id="mobile-demo">
//                 <li><a href="sass.html">Sass</a></li>
//                 <li><a href="badges.html">Components</a></li>
//                 <li><a href="collapsible.html">Javascript</a></li>
//                 <li><a href="mobile.html">Mobile</a></li>
//             </ul>   
//         </div>
//     )
// }

export default NavBar;