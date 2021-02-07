
import React, { Component } from 'react';
import { Router, Switch, Route } from "react-router-dom";

import Dashboard from "./components/dashboard/Dashboard";
import Login from "./components/login/Login";
import Bar from "./components/bar/Bar";
import Pie from "./components/pie/Pie";
import Line from "./components/line/Line";
// import Maps from "./components/maps/Maps";
import Home from "./components/home/Home";
import Data from "./components/data/Data";
import DataDate from "./components/dataDate/DataDate";
import Map from "./components/map/Map";
import Maps from "./components/maps/Maps";
// import Navbar from "./components/Navbar";

import history from "./history";

export default class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route path="/" exact component={Dashboard} />
                    <Route path="/login" component={Login} />
                    <Route path="/home" component={Home} />
                    <Route path="/data" component={Data} />
                    <Route path="/dataDate" component={DataDate} />
                    <Route path="/map" component={Map} />
                    <Route path="/maps" component={Maps} />
                    <Route path="/bar" component={Bar} />
                    <Route path="/pie" component={Pie} />
                    <Route path="/line" component={Line} />
                </Switch>
            </Router>
        )
    }
}