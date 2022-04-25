import React, { Component } from "react";
import {
    Route,
    NavLink,
    HashRouter
} from "react-router-dom";
import Endgame from "./Endgame";
import CaptainAmerica from "./CaptainAmerica";
import SpiderMan from "./SpiderMan";

class Main extends Component {
    render() {
        return(
            <HashRouter>
            <div>
                <h1>Best Marvel Movies</h1>
                <ul className="header">
                    <li><NavLink exact to="/">Endgame</NavLink></li>
                    <li><NavLink to="/CaptainAmerica">Captain America: Civil War</NavLink></li>
                    <li><NavLink to="/SpiderMan">Spider-Man:No Way Home</NavLink></li>
                </ul>
                <div className="content">
                    <Route exact path="/" component={Endgame}/>
                    <Route path="/CaptainAmerica" component={CaptainAmerica}/>
                    <Route path="/SpiderMan" component={SpiderMan}/>


                </div>
            </div>
            </HashRouter>
        );
    }
}

export default Main;