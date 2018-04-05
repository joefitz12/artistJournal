import React from "react";
import { NavDropdown, MenuItem } from 'react-bootstrap';
import "./Nav.css";

const Nav = () =>
  <nav className="navbar navbar-inverse navbar-top">
    <div className="container-fluid">
      <NavDropdown eventKey={1} title="artistJournal" id="app-name-logo">
        <MenuItem className="nav-link" eventKey={1.1} href="/">my journal</MenuItem>
        <MenuItem className="nav-link" eventKey={1.2} href="/write">write</MenuItem>
        <MenuItem className="nav-link" eventKey={1.3} href="/preferences">artist preferences</MenuItem>
      </NavDropdown>
    </div>
  </nav>;

export default Nav;
