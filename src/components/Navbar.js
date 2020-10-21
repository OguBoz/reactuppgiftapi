import React, {useState, useEffect} from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../assets/imgs/logo.png';
import { useHistory } from "react-router-dom";

export default function Navbar(props) {
  let history = useHistory();

  const logout = (e) => {
    e.preventDefault();

    localStorage.setItem("username", "");
    localStorage.setItem("password", "");


    history.push('/signin')

  }

    return (
        <>
  <nav className="navbar is-white has-shadow">

    <div className="navbar-brand">
      <NavLink to="/" className="navbar-item">
        <img src={logo} style={{maxHeight: "70px"}} className="py-2 px-2" />
      </NavLink>
      <a className="navbar-burger" id="burger">
        <span></span>
        <span></span>
        <span></span>
      </a>
    </div>
  
    <div className="navbar-menu" id="nav-links">
      <div className="navbar-end">
        { !props.loggedin && <NavLink to="/signin" className="navbar-item">Sign In</NavLink> }
        { props.loggedin && <NavLink to="/" onClick={logout} className="navbar-item">Sign Out</NavLink> }
        <NavLink to="/about" className="navbar-item">About</NavLink>
      </div>
    </div>
  </nav>
        </>
    )
}
