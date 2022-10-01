import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

// we will write rfc for basic react function based component layout
// where Navbar is the component name(function name here)
// and we can pass props which are properties


export default function Navbar(props) {
    return (
        <nav className={`border-bottom border-secondary navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
          <a className="navbar-brand" href="/">{props.title}</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">About</Link>
              </li>
              {/* <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Dropdown
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a className="dropdown-item" href="/">Action</a></li>
                  <li><a className="dropdown-item" href="/">Another action</a></li>
                  <li><hr className="dropdown-divider"/></li>
                  <li><a className="dropdown-item" href="/">Something else here</a></li>
                </ul>
              </li> */}
            </ul>
            {/* <form className="d-flex">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
              <button className="btn btn-light" type="submit">Search</button>
            </form> */}
            <div className={`form-check form-switch text-${props.mode ==='light'?   'dark':'light'}`}>
              <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable {props.mode ==='light'?'dark':'light'} mode</label>
            </div>
          </div>
        </div>
       </nav>
    )
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
}

// here proptypes basically are self made restrictions that you make so that when by mistakely u pass an object or diff data type it will call this error for u to notice which other wise doesnt know the error and u cannot find out in the end

Navbar.defaultProps = {
  title: 'set name',
};

// default props helps u set default values for prop types when no value is passed through



