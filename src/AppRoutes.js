import { SignIn, SignUp, Home } from "./containers";
import React from "react";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import { connect } from "react-redux";
import AuthMiddleWare from "./store/middleWare/authMiddleWare";

class ParentApp extends React.Component {
  componentDidMount() {
    this.props.RoutGuardDispatch();
  }
  render() {
    const { authReducer } = this.props;
    const PrivateRoute = ({ component: Component, ...rest }) =>
      authReducer.isUserSecureGuard ? (
        <Route
          {...rest}
          render={props => {
            switch (rest.path) {
              case "/":
              case "/signup":
                if (Object.entries(authReducer.user).length) {
                  return <Redirect to="/home" />;
                } else {
                  return <Component {...props} />;
                }
              case "/home":
                if (Object.entries(authReducer.user).length) {
                  return <Component {...props} />;
                } else {
                  return <Redirect to="/" />;
                }
              default:
                return <Redirect to="/" />;
            }
          }}
        />
      ) : (
        <div className="loader"></div>
      );
    return (
      <div>
        <Switch>
          <PrivateRoute exact path="/" component={SignIn} />
          <PrivateRoute exact path="/home" component={Home} />
          <PrivateRoute exact path="/signup" component={SignUp} />
          <PrivateRoute component={SignIn} />
        </Switch>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    RoutGuardDispatch: () => dispatch(AuthMiddleWare.routGuard())
  };
}
function mapStateToProps(state) {
  return {
    authReducer: state.authReducer
  };
}

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Route
        component={connect(
          mapStateToProps,
          mapDispatchToProps
        )(ParentApp)}
      />
    </BrowserRouter>
  );
};

export default AppRoutes;
