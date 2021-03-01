import React, {useState} from "react";
import {useHistory} from "react-router-dom";

function SignUp({handleSignUp}) {
  const history = useHistory();
  const [formData, setFormData] = useState({})
  const [error, setError] = useState();

  async function handleSubmit(evt) {
    evt.preventDefault();
    // We need to make our app aware of us having signed in/up
    let res = await handleSignUp(formData);
    if(res.success) {
      history.push("/");
    } else {
      setFormData({username: "", password: ""});
      setError(res.err);

    }
  }

  function handleChange(evt) {
    const {name, value} = evt.target;
    setFormData(data => (
      {
        ...data,
        [name]: value
      }
    ))
  }

  function renderError() {
    if(error) {
      return (<h3 style={{color: "red"}}>{error}</h3>)
    }
  }

  return (
    <div>
      <h3>Sign Up</h3>
      {renderError()}
      <form onSubmit={handleSubmit}>
        <label>Username</label>
        <input name="username" value={formData.username} onChange={handleChange}/>
        <br/>
        <label>Password</label>
        <input type="password" name="password" value={formData.password} onChange={handleChange}/>
        <br/>
        <label>First Name</label>
        <input name="firstName" value={formData.firstName} onChange={handleChange}/>
        <br/>
        <label>Last Name</label>
        <input name="lastName" value={formData.lastName} onChange={handleChange}/>
        <br/>
        <label>Email</label>
        <input name="email" value={formData.email} onChange={handleChange}/>
        <br/>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default SignUp;