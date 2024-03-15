import React from 'react'
//import { Link } from "react-router-dom"
import PropTypes from 'prop-types';

export default function Navbar(props) {
  const GreenMode=()=>{
    document.body.style.backgroundColor='#008000';
  }
  const BlueMode=()=>{
    document.body.style.backgroundColor='#87CEEB';
  }
  /*const colorChange=(color)=>{
    document.body.style.backgroundColor=color;
  }*/
  

  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.Mode} bg-${props.Mode}`}>
    <div className="container-fluid d-flex justify-content-between" >
      <a className="navbar-brand"  href="#" >{props.title}</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">Home</a>
          </li>

          {/*<div className="dropdown" data-bs-theme="light">
  <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButtonLight" data-bs-toggle="dropdown" aria-expanded="false">
    Knowledge
  </button>
  <ul className="dropdown-menu" aria-labelledby="dropdownMenuButtonLight">
    <li><a className="dropdown-item active" href="#">Action</a></li>
    <li><a className="dropdown-item" href="#">Action</a></li>
    <li><a className="dropdown-item" href="#">Another action</a></li>
    <li><a className="dropdown-item" href="#">Something else here</a></li>
    <li><hr className="dropdown-divider"/></li>
    <li><a className="dropdown-item" href="#">Separated link</a></li>
  </ul>
  </div>*/}
          <li className="nav-item">
            <a  className="nav-link" href="#">Knowledge</a>
          </li>
          <li className="nav-item">
            <a  className="nav-link" href="#">Warnings</a>
          </li>
          <li className="nav-item">
            <a  className="nav-link" href="#">ContactUs</a>
          </li>
          <li className="nav-item">
            <a  className="nav-link" href="#">Donate</a>
          </li>
          <li className="nav-item">
            <a  className="nav-link" href="#"> Volunteer</a>
          </li>
          <li className="nav-item">
            <a  className="nav-link" href="#"> Training </a>
          </li>
          <li className="nav-item">
            <a  className="nav-link" href="#"> Register/Sign-in</a>
          </li>
        </ul>
        </div>
        {/*<form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-outline-secondary" type="submit">Search</button>
  </form>*/}
        <div className={`form-check form-switch text-${props.Mode==='light'?'dark':'light'}`}>
  <input className="form-check-input mx-3" onClick={props.toggleMode}  type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable dark mode</label>
</div>
{/*<button type="button" class="btn btn-success mx-2" onClick={GreenMode}>Green Mode</button>
<button type="button" class="btn btn-info mx-2" onClick={BlueMode}>BlueMode</button>*/}
    </div>
  </nav>
  )
}

Navbar.propTypes = {
    title:PropTypes.string.isRequired,
aboutText:PropTypes.string.isRequired
}

Navbar.defaultProps={
    title: 'Set title here',
    aboutText:'About '
};

