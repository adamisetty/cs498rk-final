import React from 'react';
import './songrecs.css';

class SongRecs extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            is_generated: false //true when button clicked, diplay chart conditionally
        }
    }

    render() {
        return (
            <div>
                <h1 className="songrecs-header"> Song Recommendations </h1>
                <h3 className="songrecs-description">Click here to generate songs that are similar to your music preferences so far!</h3>
                <div className="songrecs-button-container">
                    <button className="songrecs-generate">
                        Generate Songs
                    </button>
                </div>
            </div>
        )
    }
}

export default SongRecs;