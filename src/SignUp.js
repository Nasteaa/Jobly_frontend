import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Button, Label, Form, FormGroup, Input } from "reactstrap";


function SignUp({ handleSignUp }) {
  const history = useHistory();
  const [formData, setFormData] = useState({})
  const [error, setError] = useState();

  async function handleSubmit(evt) {
    evt.preventDefault();
    // We need to make our app aware of us having signed in/up
    let res = await handleSignUp(formData);
    if (res.success) {
      history.push("/");
    } else {
      setFormData({ username: "", password: "" });
      setError(res.err);

    }
  }

  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData(data => (
      {
        ...data,
        [name]: value
      }
    ))
  }

  function renderError() {
    if (error) {
      return (<h3 style={{ color: "red" }}>{error}</h3>)
    }
  }

  return (
<div className="fade-in">
      <div className="login-container sign-up-border">
      <h1 className="cloud-text hvr-home-grow">Sign Up</h1>
      {renderError()}
      <Form onSubmit={handleSubmit}>
         <FormGroup>
           <Label className="label"> Personal Details</Label>
          <Input name="firstName" value={formData.firstName} onChange={handleChange} placeholder="first name" />
        </FormGroup>
        <FormGroup>
          <Input name="lastName" value={formData.lastName} onChange={handleChange} placeholder="last name" />
        </FormGroup>
        <FormGroup>
          <Input name="email" value={formData.email} onChange={handleChange} placeholder="email" />
        </FormGroup>
        <br />
        <FormGroup>
          <Label className="label">Login Details</Label>
          <Input name="username" value={formData.username} onChange={handleChange} placeholder="username"/>
        </FormGroup>
        <FormGroup>
          <Input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="password" />
        </FormGroup>
        <br />
        <Button type="submit">Submit</Button>
      </Form>
    </div>
    </div>
  );
}

export default SignUp;