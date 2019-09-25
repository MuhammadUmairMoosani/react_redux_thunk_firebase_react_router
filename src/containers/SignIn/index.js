import React, { Component } from "react";
import { connect } from "react-redux";
import AuthMiddleWare from "../../store/middleWare/authMiddleWare";
import { Link } from "react-router-dom";
import "./styles.css";
class SignIn extends Component {
  _onSubmit = event => {
    event.preventDefault();
    let email = event.target.elements.email.value;
    let password = event.target.elements.password.value;
    let data = {
      email,
      password
    };
    if (email && password) this.props.SignInDispatch(data);
  };
  render() {
    const { authReducer } = this.props;
    return authReducer.isLoading ? (
      <div className="loader"></div>
    ) : (
      <div className="container">
        <form className="form" onSubmit={this._onSubmit}>
          <h1>Sign In</h1>
          <input type="email" name="email" required maxLength={100} />
          <input type="password" name="password" required maxLength={100} />
          <input type="submit" value="SIGN IN" />
          <p>Don't have an account?</p>
          <Link to="/signup" className="nav-link">
            Sign up
          </Link>
        </form>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    SignInDispatch: data => dispatch(AuthMiddleWare.signIn(data))
  };
}
function mapStateToProps(state) {
  return {
    authReducer: state.authReducer
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignIn);
