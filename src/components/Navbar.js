import React from 'react'
import { Link } from 'react-router-dom'
import '../components/Style.css'

export default function Navbar(props) {
  return (
    <nav className="navbar sticky-top justify-content-between" >
    <div className="container-fluid">
    
      <Link className="navbar-brand headw text-light" to="/"><h3>Game<span className='Nhead'>N</span>tech Blogs</h3></Link>
  
      <div className=" justify-content-end lists" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto flex-row  mb-2">
          <li className="nav-item">
            <Link className="nav-link navbtn home1" aria-current="page" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link navbtn mx-3" aria-current="page" to="/all">All Posts</Link>
          </li>
     
          <li className="nav-item">
            <Link className="nav-link  me-3 navbtn" aria-current="page" to="/contact">Contact</Link>
          </li>

          <div className="form-check switch form-switch">
            <input className="form-check-input"  onClick={props.mode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
          </div>

       

        </ul>
      </div>
    </div>
  </nav>
  )
}
