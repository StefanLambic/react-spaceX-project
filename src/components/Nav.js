import React from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faRocket} from "@fortawesome/free-solid-svg-icons";
import "../styling/nav.css";
const Nav = () => {
  return (
    <nav className="nav">
      <FontAwesomeIcon icon={faRocket} className="icon" />
      <a className="logo" to ='/'> eSpace 
      </a>
    </nav>
  )
}

export default Nav