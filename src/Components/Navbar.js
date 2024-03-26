import React from 'react'
import { Link } from "react-router-dom"
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
      <Link className="navbar-brand"  to="/" >{props.title}</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link  className="nav-link" to="/Knowledge">Knowledge</Link>
          </li>
          <li className="nav-item">
            <Link  className="nav-link" to="/">Warnings</Link>
          </li>
          <li className="nav-item">
            <Link  className="nav-link" to="/Contact">ContactUs</Link>
          </li>
          <li className="nav-item">
            <Link  className="nav-link" to="/Donate">Donate</Link>
          </li>
          <li className="nav-item">
            <Link  className="nav-link" to="/VolunteerRegistrationForm"> Volunteer</Link>
          </li>
          <li className="nav-item">
            <Link  className="nav-link" to="/"> Training </Link>
          </li>
          <li className="nav-item">
            <Link  className="nav-link" to="/RegistrationForm"> Register/Sign-in</Link>
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

