import React, {useState} from "react";
import {useHistory} from "react-router-dom";
import { Button, Form, FormGroup, Input } from "reactstrap";
import './SignIn.css';

function SignIn({handleSignIn}) {
  const history = useHistory();
  const [formData, setFormData] = useState({});
  const [error, setError] = useState("");

  function handleChange(evt) {
    const {name, value} = evt.target;
    setFormData(data=> (
      {
        ...data,
        [name]: value
      }
    ));
  }

  async function handleSubmit(evt) {
    evt.preventDefault();
    let res = await handleSignIn(formData);
    if (res.success) {
      history.push("/companies");
    } else {
      setFormData({username: "", password: ""});
      setError(res.err);
    }
  }

  function renderError() {
    if (error) {
      return (<h3 style={{color: "red"}}>{error}</h3>)
    }
  }

  return (
    <div className="fade-in">
      <div className="login-container">
      <h1 className="cloud-text hvr-home-grow">Log In</h1>
      {renderError()}
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Input type="text" name="username" value={formData.username} onChange={handleChange} placeholder="username" />
        </FormGroup>  
        <FormGroup>
          <Input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="password"/>
        </FormGroup>
          <br/>
      <Button className="btn" type="submit">Sign In</Button>
      </Form>
      </div>
    </div>
  );
}

export default SignIn;