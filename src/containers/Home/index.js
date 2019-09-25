import React, { Component } from "react";
import "./styles.css";
class Home extends Component {
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
          <h1>User Details</h1>
          <div className="email">email address</div>
          <input type="submit" value="LOGOUT" />
        </form>
      </div>
    );
  }
}

export default Home;
