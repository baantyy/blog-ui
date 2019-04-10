import React from 'react'
import { Link } from 'react-router-dom'

import logo from '../../logo.gif'

const Navbar = (props) => {
    return (
        <header className="header">
            <div className="container">
                <nav className="navbar navbar-expand-lg">
                    <Link to="/" className="navbar-brand">
                        <img src={logo} alt="Logo" />
                    </Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarMenu">
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarMenu">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <Link to="/" className="nav-link">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/about" className="nav-link">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/posts" className="nav-link">Posts</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/users" className="nav-link">Users</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/contact" className="nav-link">Contact</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default Navbar