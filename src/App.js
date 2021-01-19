import React from 'react';
import './App.css';
import Home from './component/home/Home';
import Destination from './component/destination/Destination';
import upcomingTrips from './component/upcomingTrips/UpcomingTrips';
import MainBlogs from './component/blogPage/MainBlog';
import Registration from './component/RegiForm/Registration';
import Login from './component/login/Login';
import OpenPackageDetails from './component/mainOpenPackage/OpenPackageDetails';
import { Switch, Route, Redirect } from "react-router-dom";

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/Destination" component={Destination} />
        <Route exact path="/upcomingTrips" component={upcomingTrips} />
        <Route exact path="/MainBlogs" component={MainBlogs} />
        <Route exact path="/Registration" component={Registration} />
        <Route exact path="/Login" component={Login} />
        <Route exact path="/OpenPackageDetails" component={OpenPackageDetails} />

        <Redirect to="/" />
      </Switch>
    </>
  );
}

export default App;
