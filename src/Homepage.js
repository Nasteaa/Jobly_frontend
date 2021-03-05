import React, {useContext} from "react";
import UserContext from "./UserContext";
import './Homepage.css';

function Homepage() {
  const currentUser = useContext(UserContext);

  function renderHeader() {
    if (currentUser.username) {
      return (
      <h3>Welcome {currentUser.firstName} {currentUser.lastName}!</h3>
      )
    }
    return (
      <div>
        <div className="fade-in">
          <div className="login-container hvr-home-grow">
            <h1 className="cloud-text hvr-home-grow">Welcome to Jobly</h1>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="Homepage">
      {renderHeader()}
    </div>
  );
}

export default Homepage;