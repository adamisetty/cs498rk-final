import React from 'react';
import './search.css';

class Search extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            search_results: [],
            selected_result: ''
        }

        
    }
//need to display search data, some dummy data for now

    render() {
        return(
            <div className="search-body">
                <div className="search-header">Search</div>
                <div className="search-form">
                    <form>
                        <input className ="search-form-input" type="text" id="searchsong" name="searchsong" size="80" placeholder="Search for a song..."></input>
                        <br/>
                    </form>
                </div>
            </div>
        )
    }
}

export default Search;