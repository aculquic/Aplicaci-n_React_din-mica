import { useEffect, useState } from "react"
import  Profiler  from '../pantallas/Profile';
import { postLogin } from  '../services/loginService';
import { getPosts } from "../services/loginService"
import { Link } from "react-router-dom"    


function Navbar () {
        return (
            <nav className="navbar-dark bg-primary">       
               <div className="mb-3">
                   <a style={{paddingLeft: 13, textDecoration: 'none'}} href="/"><img src="https://img.icons8.com/material-rounded/24/000000/lightning-bolt--v1.png" width="18" height="20"/>
                    <span className="navbar-brand mb-0 h1">three pics</span></a> 

                    <a className="navbar-brand" href="/profile">
                    <img type="submit" align="right" src="https://img.icons8.com/metro/26/000000/user-female-circle.png" width="12" height="14"/> 
                    </a> 
              </div>
            </nav>
            )
}

export default Navbar;