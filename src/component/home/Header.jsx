import React from 'react';
import './Header.css';
import { NavLink } from 'react-router-dom';

function Header() {
    return (
        <>
            <div className="top_header">
                <div className="contact_header">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-4">
                                <span className="contact">
                                    <i className="fa fa-phone"></i> <span className="text-white">+91 - 0123456789</span>
                                </span>
                            </div>
                            <div className="col-sm-8 text-right">
                                <NavLink to="./Login" rel="noopener noreferrer">
                                    <span className="login text-white">Login</span>
                                </NavLink>
                                <NavLink to="./Registration" rel="noopener noreferrer">
                                    <span className="register text-white">Register</span>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="menu_bar">
                            <nav className="navbar navbar-expand-lg">
                                <div className="container">
                                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                                        <span className="navbar-toggler-icon"></span>
                                    </button>
                                    <div className="collapse navbar-collapse text-center" id="navbarTogglerDemo01">
                                        <ul className="navbar-nav m-auto mb-2 mb-lg-0">
                                            <li className="nav-item">
                                                <NavLink className="nav-link active text-white" aria-current="page" to="/">Home </NavLink>
                                            </li>
                                            <li className="nav-item">
                                                <NavLink className="nav-link text-white" to="/Destination">Destination</NavLink>
                                            </li>
                                            <li className="nav-item">
                                                <NavLink className="nav-link text-white" to="/upcomingTrips">Upcoming Trips</NavLink>
                                            </li>
                                            <li className="nav-item">
                                                <NavLink className="nav-link text-white" to="/MainBlogs">Blogs</NavLink>
                                            </li>
                                            <li className="nav-item">
                                                <NavLink className="nav-link text-white" to="/">About Us</NavLink>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}

export default Header;