import React, {useContext} from "react";
import UserContext from "./UserContext";

function Homepage() {
  const currentUser = useContext(UserContext);

  function renderHeader() {
    if (currentUser.username) {
      return (
      <h3>Welcome {currentUser.firstName} {currentUser.lastName}!</h3>
      )
    }
    return (
      <h3>Welcome to Jobly</h3>
    )
  }

  return (
    <div className="Homepage">
      {renderHeader()}
    </div>
  );
}

export default Homepage;