// import {
//   a
// } from "react-router-dom";
import React from 'react'
import { useLocation , Link} from 'react-router-dom'
import PropTypes from 'prop-types'
export default function Navbar(props) {
  const location = useLocation(); 


  React.useEffect(()=>{
      // Google Analytics
  },[location]);
  return (
    <nav className={`navbar navbar-expand-lg navbar-dark bg-dark`}>
      {/* ${props.mode === 'dark'?'light':'dark'} */}
      {/* ${props.mode === 'dark'?'light':'dark'} */}
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">{props.title} </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname === "/" ? "active" : ""}`}  style={{color:'gray' , textDecoration:'none' , paddingRight:'10px'}} to="/">Home </Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname === "/about" ? "active" : ""}`} style={{color:'gray' , textDecoration:'none'}} to="/about">{props.about}</Link>
            </li>
          </ul>

          <div className={`custom-control custom-switch text-light`}>
              <input onClick={props.toggleMode} type="checkbox" className="form-check-input" >
                
                </input>
                <label htmlFor="">Enable {props.mode} mode </label>
              
          </div>
        </div>
      </div>
    </nav>

  )
}
Navbar.ProtoTypes = {
  title: PropTypes.string.isRequired,
  about: PropTypes.string
}

// Navbar.defaultProps = {
//   title : 'Set title here',
//   about : 'about text here'
// };


