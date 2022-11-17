import React from "react";
import { useLocation } from "react-router-dom";
import * as C from "react-bootstrap";

import "./header.css";

function Header() {
  const location = useLocation().pathname + useLocation().hash;
  return (
    <div className='com__header sticky-top'>
      <C.Navbar collapseOnSelect expand='md'>
        <div className='container-md'>
          <img src='/assets/sepaylogo.png' alt='Sepay Studio' width='40' />
          <a href='/' className='navbar-brand ms-5 fs-4'>
            <b>SEPAY</b> KIDS
          </a>
          <C.Navbar.Toggle aria-controls='responsive-nav' />
          <C.Navbar.Collapse id='responsive-nav'>
            <C.Nav className='d-flex align-items-center justify-content-around w-100'>
              <C.Nav.Link
                className={`px-3 com__header-link ${location === "/" && "active"}`}
                href='/#home'
              >
                Home
              </C.Nav.Link>
              <C.Nav.Link
                className={`px-3 com__header-link ${location === "/#games" && "active"}`}
                href='/#games'
              >
                Games
              </C.Nav.Link>
              <C.Nav.Link
                className={`px-3 com__header-link ${location === "/#about" && "active"}`}
                href='/#about'
              >
                About Us
              </C.Nav.Link>
              <C.Nav.Link
                className={`px-3 d-flex align-items-center com__header-contact ${
                  location === "/#about" && "active"
                }`}
                href='/#contact'
              >
                Contact Us
              </C.Nav.Link>
            </C.Nav>
          </C.Navbar.Collapse>
        </div>
      </C.Navbar>
    </div>
  );
}

export default Header;
