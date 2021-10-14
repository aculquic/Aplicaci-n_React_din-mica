import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Navbar  from './components/NavBar';
import  Post from  './components/Post';
import SearchBar from './components/SearchBar';
import PostsList from './pantallas/PostsList';
import Login from './pantallas/Login';
import Profile from './pantallas/Profile';
//import posts from './data/posts.json';
import './index.css'; 

function App(){
    return(
    <div className = "App">
            <Navbar />

        <main className="container-fluix container me-2 row mt-3">
            <Switch>
             <Route path="/" component={PostsList} exact/> 
             <Route path="/login" component={Login} exact/>
             <Route path="/profile" component={Profile} exact/>   
            </Switch>
        </main>  
    </div>
    );
}


export default App; 