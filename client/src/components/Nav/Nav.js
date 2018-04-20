import React from "react";
import { Link } from "react-router-dom";
import { NavDropdown, MenuItem } from 'react-bootstrap';
import "./Nav.css";

const Nav = () =>
  <nav className="navbar navbar-inverse navbar-top">
    <div className="container-fluid">
      <NavDropdown eventKey={1} title="artistJournal" id="app-name-logo">
        <MenuItem className="nav-link-container" eventKey={1.1}><Link className="nav-link" to="/journal">my journal</Link></MenuItem>
        <MenuItem className="nav-link-container" eventKey={1.2}><Link className="nav-link" to="/write">write</Link></MenuItem>
        <MenuItem className="nav-link-container" eventKey={1.3}><Link className="nav-link" to="/preferences">artist preferences</Link></MenuItem>
      </NavDropdown>
    </div>
  </nav>;

export default Nav;
