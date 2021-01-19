import React from 'react';
import { NavLink } from 'react-router-dom';
import './footer.css';
function Footer() {
    return (
        <>
            <section className="footerSection">
                <div className="container-fluid p-5">
                    <h1 className="footerHeading text-center text-white mt-4">Thrill Hiker</h1>
                    <div className="footerHeadingBottomLine">
                        <i className="fa fa-mountains"></i>
                    </div>
                    <div className="row mt-5 mb-5">
                        <div className="col-md-3">
                            <h4 className="footerSectionHeading text-white">Contact Us</h4>
                            <p className="text-white">Shop No. 132, Rewari, Haryana</p>
                            <p className="text-white">+91 - 123456789</p>
                            <p className="text-white">email@thrillhiker.com</p>
                        </div>
                        <div className="col-md-3">
                            <h4 className="footerSectionHeading text-white">Book Now</h4>
                            <p>
                                <NavLink className="text-white" to="/upcomingTrips"> Package</NavLink>
                            </p>
                            <p>
                                <NavLink className="text-white" to="/upcomingTrips"> Payment</NavLink>
                            </p>
                            <p>
                                <NavLink className="text-white" to="/upcomingTrips"> Car Rent</NavLink>
                            </p>
                            <p>
                                <NavLink className="text-white" to="/upcomingTrips"> Tours</NavLink>
                            </p>

                        </div>
                        <div className="col-md-3">
                            <h4 className="footerSectionHeading text-white">Explore Now</h4>
                            <p>
                                <NavLink className="text-white" to="/upcomingTrips"> Shimla</NavLink>
                            </p>
                            <p>
                                <NavLink className="text-white" to="/upcomingTrips">Jaisalmer</NavLink>
                            </p>
                            <p>
                                <NavLink className="text-white" to="/upcomingTrips">Manali</NavLink>
                            </p>
                            <p>
                                <NavLink className="text-white" to="/upcomingTrips">Kufri</NavLink>
                            </p>
                        </div>
                        <div className="col-md-3">
                            <h4 className="footerSectionHeading text-white">Social Media</h4>
                            <NavLink className="text-white" to=""> <i className="fa fa-facebook text-white"></i> </NavLink>
                            <NavLink className="text-white" to=""> <i className="fa fa-twitter text-white"></i> </NavLink>
                            <NavLink className="text-white" to=""> <i className="fa fa-instagram text-white"></i> </NavLink>
                            <NavLink className="text-white" to=""> <i className="fa fa-youtube-play text-white"></i> </NavLink>
                        </div>

                    </div>

                </div>
                <div className="bottomFooter">
                    <div className="copyrights text-center p-2">Design & Develop By Rajpreet Giri</div>
                </div>
            </section>
        </>
    )
}

export default Footer; 