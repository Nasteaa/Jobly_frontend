import React from "react";
import {Switch, Route, Redirect} from "react-router-dom";
import Homepage from "./Homepage";
import CompanyList from "./CompanyList";
import CompanyDetails from "./CompanyDetails";
import JobList from "./JobList";
import SignUp from "./SignUp";
import SignIn from "./SignIn";
import About from "./About";

function Routes({handleSignUp, handleApply, handleSignIn}) {
  return (
    <Switch>
      <Route exact path="/">
        <Homepage />
      </Route>
      <Route exact path="/about">
        <About />
      </Route>
      <Route exact path="/companies">
        <CompanyList />
      </Route>
      <Route exact path="/companies/:handle">
        <CompanyDetails handleApply={handleApply} />
      </Route>
      <Route exact path="/jobs" >
        <JobList handleApply={handleApply} />
      </Route>
      <Route exact path="/signup" >
        <SignUp handleSignUp={handleSignUp} />
      </Route>
      <Route exact path="/signin" >
        <SignIn handleSignIn={handleSignIn} />
      </Route>
       <Route exact path="/signout" >
        <Homepage />
      </Route>
      <Route>
        <Redirect to="/" />
      </Route>
    </Switch>
  );
}

export default Routes;