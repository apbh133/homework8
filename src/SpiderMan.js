import React, { Component } from "react";
import Spiderman from "./spiderman.png";

class SpiderMan extends Component {
    render() {
        return(
            <div>
                <h2>Spider-Man: No Way Home</h2>
                <img src={Spiderman} alt="Spider Man" title="Spider-Man" />
                <a href="https://pixabay.com/vectors/spiderman-movie-superhero-spider-4378357/">Source</a>
                <p>In the third installment of Tom Holland's Spider-Man, this one a nostalgic piece of perfection.
                    Not only was it a great movie, but it brought together a lot of 25-35 year olds childhood's and it
                    was very fun to watch.
                </p>
            </div>
        );
    }
}

export default SpiderMan;