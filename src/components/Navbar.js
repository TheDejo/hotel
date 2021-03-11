import React, { useState } from 'react';
import {FaGripLines} from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [open, setOpen] = useState(false)

  const toggle = () => {
    setOpen(!open)
  }

    return (
      <nav className="navbar">
        <div className="nav-center">
          <div className="nav-header">
            <Link to="/">
              <h3>Dejo</h3>
            </Link>
            <button type="button" className="nav-btn" onClick={toggle}>
              <FaGripLines className="nav-icon"/>
            </button>
          </div>
          <ul className={open ? "nav-links show-nav" : "nav-links"}>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/rooms">Rooms</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
}

export default Navbar;