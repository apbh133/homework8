import React, { Component } from "react";
import Thanos from "./thanos.png";

class Endgame extends Component {
    render() {
        return(
            <div>
                <h2>Avengers: Endgame</h2>
                <img src={Thanos} alt="Thanos" title="The Gauntlet" />
                <a href="https://pixabay.com/vectors/thanos-guante-comic-comics-4194122/">Source</a>
                <p>Marvel's Avengers: Endgame was the most talked about movie of the past decade.
                    It combined characters that have been introduced to movie goers since 2008. This movie
                    will be one of the best from Marvel for awhile.
                </p>
            </div>
        );
    }
}

export default Endgame;