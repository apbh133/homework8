import React, { Component } from "react";
import Captain from "./Captain.jpg";

class CaptainAmerica extends Component {
    render() {
        return(
            <div>
                <h2>Captain America: Civil War</h2>
                <img src={Captain} alt="Captain America" title="Civil War" />
                <a href="https://pixabay.com/photos/capitanamerica-marvel-avengers-2688069/">Source</a>
                <p>This was a Marvel movie that was released towards the end of the first Avengers phases. It 
                    put two of Marvel's best heros against eachother and pitted many heroes against one another.
                    It was exciting and got fans rooting for one side over the other.
                </p>
            </div>
        );
    }
}

export default CaptainAmerica;