//import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class Navbar extends Component {
  
    render() {
      

        return (
            <div>

                <nav className="navbar navbar-expand-lg navbar-light navbar-dark bg-dark">
                    <Link className="navbar-brand" to="/">CF</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item ">
                                <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#Contact">Contact Us</a>
                            </li>                     
                        </ul>
                       
                    </div>
                </nav>

            </div>
        )
    }
}

export default Navbar