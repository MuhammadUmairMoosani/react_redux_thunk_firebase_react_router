import React, { Component } from "react";
import { connect } from "react-redux";
import AuthMiddleWare from "../../store/middleWare/authMiddleWare";
import "./styles.css";
class Home extends Component {
  _onSubmit = event => {
    event.preventDefault();
    this.props.LogoutDispatch();
  };
  render() {
    const { authReducer } = this.props;
    return authReducer.isLoading ? (
      <div className="loader"></div>
    ) : (
      <div className="container">
        <form className="form" onSubmit={this._onSubmit}>
          <h1>User Details</h1>
          <div className="email">{authReducer.user.email}</div>
          <input type="submit" value="LOGOUT" />
        </form>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    LogoutDispatch: data => dispatch(AuthMiddleWare.logout(data))
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
)(Home);
