import React, {useEffect, useState} from "react";
import {BrowserRouter} from "react-router-dom";
import jwt from "jsonwebtoken";
import 'bootstrap/dist/css/bootstrap.min.css';
import Routes from "./Routes";
import NavBar from "./NavBar";
import JoblyApi from "./api";
import UserContext from "./UserContext";
import { Container } from "reactstrap";

function App() {

  // token is just username and isAdmin in a signed format
  // i.e. {username: '', isAdmin: boolean}
  const [token, setToken] = useState(localStorage.getItem("USER_TOKEN"));
  // currentUser holds the data we get back from /:username
  const [currentUser, setCurrentUser] = useState({})

  useEffect(function getUserOnMount() {
    async function getUser() {
      if (token) {
        // set the information we need / care about
        localStorage.setItem("USER_TOKEN", token);
        JoblyApi.token = token;
        const { username, isAdmin } = jwt.decode(token)
        let userData = await JoblyApi.getUser(username);
        setCurrentUser(userData);
      } else {
        // unset the information that only signed in users should have
        localStorage.removeItem("USER_TOKEN");
        JoblyApi.token = null;
        setCurrentUser({});
      }
    }
    getUser()
  }, [token])

  async function handleSignUp(formData) {
    try {
      let token = await JoblyApi.signUp(formData);
      // localStorage.setItem("USER_TOKEN", token);
      // JoblyApi.token = token;
      setToken(token);
      return {success: true};
    } catch (err) {
      return {success: false, err: err};
    }
  }

  async function handleSignIn(formData) {
    try {
      let token = await JoblyApi.signIn(formData);
      setToken(token);
      return {success: true};
    }
    catch (err) {
      return {success: false, err: err}
    }
  }

  function handleSignOut() {
    // localStorage.removeItem("USER_TOKEN");
    // JoblyApi.token = null;
    setToken(null);
  }

  async function handleApply(jobId) {
    let res = await JoblyApi.apply(currentUser.username, jobId);
    let appliedJobs = currentUser.applications.map(job => (job)) // clone user's applied jobs array
    appliedJobs.push({ id: jobId }) // add the new job we just applied to
    setCurrentUser(user => ({
      ...user, // copy over existing current user data
      jobs: appliedJobs // update current user jobs to updated jobs aray
    }));
  }

  return (
    <BrowserRouter>
      <UserContext.Provider value={ currentUser }>
        <NavBar handleSignOut={handleSignOut}/>
        <Container className="themed-container" fluid={true}>
          <Routes handleSignUp={handleSignUp} handleSignIn={handleSignIn} handleApply={handleApply} />
        </Container>
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;