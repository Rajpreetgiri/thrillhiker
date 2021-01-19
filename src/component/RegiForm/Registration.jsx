import React from 'react';
import LogHeader from '../home/LogHeader';
import './registration.css';
import { NavLink } from 'react-router-dom';

function Registration() {

    return (
        <>
            <LogHeader />
            <section className="registerbg">
                <div className="container ">
                    <div className="row m-0 registerationBackground">
                        <div className="col-sm-12 p-0 col-md-7">
                            <form className="row" className="registrationFrom">
                                <h2 className="headingRegister">Create Your Account</h2>
                                <div className="col-sm-12">
                                    <label for="validationTooltipUsername" className="from-label">User Name</label>
                                    <input className="form-control" type="text" id="uName" id="validationTooltipUsername" required />
                                    <div class="invalid-tooltip">
                                        Please provide a valid User Name.
                                    </div>
                                </div>
                                <div className="col-sm-12">
                                    <label for="validationTooltip02" className="from-label">Mobile Number</label>
                                    <input className="form-control" type="text" id="uNumber" id="validationTooltip02" required />
                                    <div class="invalid-tooltip">
                                        Please provide a valid Mobile Number.
                                    </div>
                                </div>
                                <div className="col-sm-12">
                                    <label for="validationTooltip03" className="from-label">Email</label>
                                    <input className="form-control" type="email" id="uEmail" id="validationTooltip03" required />
                                    <div class="invalid-tooltip">
                                        Please provide a valid Email.
                                    </div>
                                </div>
                                <div className="col-sm-12">
                                    <label for="validationTooltip04" className="from-label">Password</label>
                                    <input className="form-control" type="Password" id="uPassword" id="validationTooltip04" required />
                                    <div class="invalid-tooltip">
                                        Please provide a valid Password.
                                    </div>
                                </div>
                                <div className="col-sm-12">
                                    <label for="validationTooltip05" className="from-label">Confirm Password</label>
                                    <input className="form-control" type="Password" id="uPassword" />
                                    <div class="invalid-tooltip" id="validationTooltip05" required>
                                        Passwords are not matched.
                                    </div>
                                </div>
                                <div className="col-sm-12 mt-4"><button className="btn registerBtn"> Submit</button></div>
                            </form>
                        </div>

                        <div className="col-sm-12 col-md-5 rightContent">
                            <div className="taglines">
                                <i className="fa fa-map-marker text-white"></i>
                                <h1 className="text-white">Join Us</h1>
                                <h4 className="text-white">and Fly Without Wings</h4>
                                <p className="text-white">Once a Year, Go Someplace You've Never Seen Before</p>
                                <NavLink to="./Login" rel="noopener noreferrer">
                                    <span className="btn btn-outline-light">Login</span>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>


            </section>
        </>
    );
}

export default Registration;