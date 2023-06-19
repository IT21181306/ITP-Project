import React from "react";
import {Link} from 'react-router-dom'

function Header() {
    
  return(
    <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{backgroundColor:"black"}}>
    <a className="navbar-brand" href="#"style={{color:"green", fontFamily:"Lucida Handwriting"}}><b>Morawaka Hot Kitchen</b></a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav"style={{backgroundColor:"black"}}>
  <li className="nav-item active">
            <Link to ="/dashboard" className="nav-link" style={{color:"white"}}>Dashboard</Link>
            
            </li>

            <li className="nav-item">
            <Link to ="/add" className="nav-link" style={{color:"white"}}>Create User</Link>
            </li>

            <li className="nav-item">
             <Link to ="/container" className="nav-link" style={{color:"white"}}>All Users</Link>
              
            </li>
            
          </ul>
        </div>
      </nav>
    )
}

export default Header;