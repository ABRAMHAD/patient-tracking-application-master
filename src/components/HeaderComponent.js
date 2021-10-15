import React, { Component } from 'react'
import { NavLink } from "react-router-dom";
import { Link } from 'react-router-dom';


class HeaderComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    

    render() {
        return (
            <div>
                <header>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
            {/* <Link className="navbar-brand" to="/home">
                        <img src="https://en.pimg.jp/030/606/519/1/30606519.jpg"
                            height="24px" alt="Capgemini" />
                    </Link> */}
                <a className="navbar-brand" href="#"><b><em>PassionForCaring</em></b></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse nav" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <NavLink className="nav-link"exact to="/" >Home <span className="sr-only">(current)</span></NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" exact to="/service">Services</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" exact to="/gallery">Gallery</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" exact to="/contact">Contact</NavLink>
                        </li>
                        

                        {/* <li className="nav-item dropdown">
                            <NavLink className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Dropdown
                            </NavLink>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a class="dropdown-item" href="#">Action</a></li>
                                <li><a class="dropdown-item" href="#">Another action</a></li>
                                <li><a class="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </li> */}
                        {/* <div class="dropdown">
                            <button class="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">Dropdown Example
                                <span class="caret"></span></button>
                            <ul class="dropdown-menu">
                                <li><a href="#">HTML</a></li>
                                <li><a href="#">CSS</a></li>
                                <li><a href="#">JavaScript</a></li>
                            </ul>
                        </div> */}
                    </ul>

                </div>
            </div>
        </nav>
                </header>
            </div>
        )
    }
}

export default HeaderComponent