import React from 'react';
import './favorites.css';


class Favorites extends React.Component {
    //prolly need to pass in favorites list through props? or query when loading
    constructor(props){
        super(props);
        
        this.state = {
            favorites_list:[{song:'West Coast', artist:'Quinn XCII', key:0}, {song:'Mirrors', artist:'Justin Timberlake', key:1}, 
            {song:'Unforgettable', artist:'French Montana', key:2}, {song:'Heat Waves', artist:'Glass Animals', key:3}, {song:'Weight of the World', artist:'Jon Bellion', key:4}],
            name:'Ankitha'
        }

        this.initializeList = this.initializeList.bind(this);
        this.initializeList();
    }

    async initializeList() {
    
    //Not working rn
        // var dummy_list = [{song:'West Coast', artist:'Quinn XCII'}, {song:'Mirrors', artist:'Justin Timberlake'}, 
        // {song:'Unforgettable', artist:'French Montana'}, {song:'Heat Waves', artist:'Glass Animals'}, {song:'Weight of the World', artist:'Jon Bellion'}]
        // console.log(dummy_list)
        // this.setState({favorites_list:dummy_list});
        
        console.log(this.state.favorites_list)
    }

    render() {
        return(
            <div className="favorites-body">
                <div className="favorites-header">Favorites</div>
                <h3 className="favorites-description">Here are all your favorite songs so far!</h3>
                <div className="favorites-songs-container">
                    <table>
                    {this.state.favorites_list.map(item => <tr className="favorites-song-card"> <td> {item.key}. {item.song}  -   {item.artist} </td></tr>)}
                    </table>
                </div>
                
            </div>
        )
    }
}

export default Favorites;