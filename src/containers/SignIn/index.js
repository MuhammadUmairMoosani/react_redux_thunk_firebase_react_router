import React, { Component } from "react";
import "./styles.css";
class SignIn extends Component {
  _onSubmit = event => {
    event.preventDefault();
    if (
      event.target.elements.email.value &&
      event.target.elements.password.value
    )
      alert("hello");
  };
  render() {
    return (
      <div className="container">
        <form className="form" onSubmit={this._onSubmit}>
          <h1>Sign In</h1>
          <input type="email" name="email" required maxLength={100} />
          <input type="password" name="password" required maxLength={100} />
          <input type="submit" value="SIGN IN" />
        </form>
      </div>
    );
  }
}

export default SignIn;
