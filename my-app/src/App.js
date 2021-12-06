import logo from './logo.svg';
import './App.css';
import React from 'react';
import Login from './Login';
import Welcome from './Welcome';
import Search from './Search';
import Favorites from './Favorites';
import SongRecs from './SongRecs';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

//do log in authentication here...
class App extends React.Component {
    constructor(props){
        super(props);
    }
//routing needs to be done here as well!!!
    render() {
        return (
            <Router>
                <div> 
                <div className="login-body">
                    {/* <Link to="/login">Login</Link>  */}
                    {/* <SongRecs></SongRecs> */}
                    {/* <Favorites></Favorites> */}
                    {/* <Search></Search> */}
                    {/* <Welcome></Welcome> */}
                    {/* <Login></Login> */}
                </div>
                <Routes>
                    <Route path='/login' element={<Login/>} />
                    <Route path='/welcome' element={<Welcome/>} />
                    <Route path='/search' element={<Search/>} />
                    <Route path='/favorites' element={<Favorites/>} />
                    <Route path='/songrecs' element={<SongRecs/>} />
                </Routes>
                </div>
            </Router>
        )
    }
}

export default App;
