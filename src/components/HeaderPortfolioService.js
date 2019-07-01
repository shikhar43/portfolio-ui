import React, { Component } from 'react'
import './css/materialize.css'
import './css/header.css'
import './css/table.css'

class Header extends Component {
    constructor(props) {
        super(props)
    
        this.state = {

             li1: "PORTFOLIO",
             li2: "FUND FINDER",
             li3: "PREFERENCES",
             li4: "Total Assets : 25000",
             li5: "Total Balance : 15000",
             li6: "Base Currency : INR",
             user: "Shikhar"
        }
    }

    render() {
        return (
            
            <nav>
                <div className="nav-wrapper teal lighten-1">
                    <a href="x.html" className="right username">{this.state.user}</a>
                        <ul id="nav-mobile" className="left hide-on-med-and-down">
                            <li><a>{this.state.li4}</a></li>
                            <li><a>{this.state.li5}</a></li>
                            <li><a>{this.state.li6}</a></li>
                           
                        </ul>
                        
                </div>
                <div className="nav-wrapper teal lighten-1" text-align = "center">
                        <ul id="nav-mobile" className="left hide-on-med-and-down">
                            <li><a href="sass.html">{this.state.li1}</a></li>
                            <li><a href="badges.html">{this.state.li2}</a></li>
                            <li><a href="collapsible.html">{this.state.li3}</a></li>
                           
                        </ul>
                      
                </div>
                
            </nav>
        )
    }
}

export default Header
