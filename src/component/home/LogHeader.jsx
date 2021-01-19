import React from 'react';
import './LogHeader.css';
import { NavLink } from 'react-router-dom';

function LogHeader() {
    return (
        <>
            <div id="mySidenav" class="sidenav">
                <NavLink id="home" className="sliding nav-link active" aria-current="page" to="/">Home</NavLink>
                <NavLink id="destination" className="sliding nav-link" to="/Destination">Destination</NavLink>
                <NavLink id="trips" className="sliding nav-link" to="/upcomingTrips">Upcoming Trips</NavLink>
                <NavLink id="blogs" className="sliding nav-link" to="/MainBlogs">Blogs</NavLink>
                <NavLink id="enquiry" className="sliding nav-link" to="/Enquiry">Enquiry</NavLink>
            </div>
        </>
    )
}

export default LogHeader;