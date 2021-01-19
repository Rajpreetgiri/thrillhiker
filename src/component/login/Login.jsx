import React from 'react';
import LogHeader from '../home/LogHeader';
import './login.css';
import { NavLink } from 'react-router-dom';

function Login() {

    return (
        <>
            <LogHeader />
            <section className="loginbg">
                <div className="container ">
                    <div className="row col-md-10 p-0 m-auto registerationBackground">
                        <div className="col-sm-12 p-0 col-md-7">
                            <form className="row" className="registrationFrom">
                                <h2 className="headingRegister">Login</h2>
                                <div className="col-sm-12">
                                    <label for="validationTooltipUsername" className="from-label">User Name</label>
                                    <input className="form-control" type="text" id="uName" id="validationTooltipUsername" required />
                                    <div class="invalid-tooltip">
                                        Please provide a valid User Name.
                                    </div>
                                </div>
                                <div className="col-sm-12">
                                    <label for="validationTooltip04" className="from-label">Password</label>
                                    <input className="form-control" type="Password" id="uPassword" id="validationTooltip04" required />
                                    <div class="invalid-tooltip">
                                        Please provide a valid Password.
                                    </div>
                                </div>

                                <div className="col-sm-12 mt-4"><button className="btn loginBtn"> Login</button></div>
                            </form>
                        </div>

                        <div className="col-sm-12 col-md-5 rightContent">
                            <div className="taglines">
                                <i className="fa fa-map-marker text-white"></i>
                                <h1 className="text-white bold">Join Us</h1>
                                <h4 className="text-white">and Fly Without Wings</h4>
                                <p className="text-white">Once a Year, Go Someplace You've Never Seen Before</p>
                                <NavLink to="./Registration" rel="noopener noreferrer">
                                    <span className="btn btn-outline-light">Sign Up</span>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>


            </section>
        </>
    );
}

export default Login;