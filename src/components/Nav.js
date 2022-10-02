import React from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faRocket} from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';
import "../styling/nav.css";
const Nav = () => {
  return (
    <nav className="nav">
      <FontAwesomeIcon icon={faRocket} className="icon" />
      <Link className="logo" to ='/'> eSpace 
      </Link>
    </nav>
  )
}

export default Nav