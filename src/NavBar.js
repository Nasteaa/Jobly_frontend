import React, { useContext, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import UserContext from "./UserContext";
import './NavBar.css';
import { NavLink as NL } from 'reactstrap';
import { Navbar, NavbarBrand, Nav, Collapse, NavItem, NavbarToggler } from 'reactstrap';



function NavBar({ handleSignOut }) {
  const currentUser = useContext(UserContext);
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  function navbar() {
    if (currentUser.username) {
      // navbar for logged in users
      return (
        <div>
          <Navbar className="nav-bar" expand="md">
            <NavbarToggler className="white" aria-controls="basic-navbar-nav" onClick={toggle} />
            <Collapse id="basic-navbar-nav" isOpen={isOpen} navbar>
              <Nav className="mr-auto">
                <NL><NavLink className="gold" to="/about">Jobly</NavLink></NL>
                <NL><NavLink className="gold" to="/companies">Companies</NavLink></NL>
                <NL><NavLink className="gold" to="/jobs">Jobs</NavLink></NL>
                <NL><NavLink className="gold" to="/signout" onClick={handleSignOut}>Sign Out</NavLink></NL>
              </Nav>
            </Collapse>
          </Navbar>
        </div >
      );
    } else {
      // navbar for not logged in users
      return (
        <div>
          <Navbar className="nav-bar" expand="md">
            <Nav className="mr-auto">
              <NL><NavLink className="gold" to="/signin">Log In</NavLink></NL>
              <NL><NavLink className="gold" to="/signup">Sign Up</NavLink></NL>
            </Nav>
          </Navbar>
        </div>
      );
    }
  }

  return (
    navbar()
  );
}


export default NavBar;

// <div>
//       <Navbar color="light" light expand="md">
//         <NavbarBrand href="/">reactstrap</NavbarBrand>
//         <NavbarToggler onClick={toggle} />
//         <Collapse isOpen={isOpen} navbar>
//           <Nav className="mr-auto" navbar>
//             <NavItem>
//               <NavLink href="/components/">Components</NavLink>
//             </NavItem>
//             <NavItem>
//               <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
//             </NavItem>
//             <UncontrolledDropdown nav inNavbar>
//               <DropdownToggle nav caret>
//                 Options
//               </DropdownToggle>
//               <DropdownMenu right>
//                 <DropdownItem>
//                   Option 1
//                 </DropdownItem>
//                 <DropdownItem>
//                   Option 2
//                 </DropdownItem>
//                 <DropdownItem divider />
//                 <DropdownItem>
//                   Reset
//                 </DropdownItem>
//               </DropdownMenu>
//             </UncontrolledDropdown>
//           </Nav>
//           <NavbarText>Simple Text</NavbarText>
//         </Collapse>
//       </Navbar>