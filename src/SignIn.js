import React, {useState} from "react";
import {useHistory} from "react-router-dom";

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
    <div>
      {renderError()}
      <form onSubmit={handleSubmit}>
      <label>Username:</label>
      <input type="text" name="username" value={formData.username} onChange={handleChange} />
      <br/>
      <label>Password:</label>
      <input type="password" name="password" value={formData.password} onChange={handleChange}/>
      <br/>
      <button type="submit">Sign In</button>
      </form>
    </div>
  );

}

export default SignIn;