import React, {useContext} from "react";
import {NavLink, Link} from "react-router-dom"

import UserContext from "./UserContext";


function NavBar({handleSignOut}) {
  
  const currentUser = useContext(UserContext);

  function navbar() {
    if (currentUser.username) {
      // navbar for logged in users
      return (
        <div>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/companies">Companies</NavLink>
          <NavLink to="/jobs">Jobs</NavLink>
          <NavLink to="/" onClick={handleSignOut}>Sign Out</NavLink>
        </div>
      );
    } else {
    // navbar for not logged in users
      return (
        <div>
          <NavLink to="/signin">Log In</NavLink>
          <NavLink to="/signup">Sign Up</NavLink>
        </div>
      );
    }
  }

  return (
    navbar()
  );
}


export default NavBar;