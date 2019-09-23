import { SignIn, SignUp, Home } from "./containers";
import React from "react";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";

class ParentApp extends React.Component {
  constructor() {
    super();
    this.state = {
      userRoutData: true
    };
  }

  render() {
    const PrivateRoute = ({ component: Component, ...rest }) =>
      this.state.userRoutData ? (
        <Route
          {...rest}
          render={props => {
            switch (rest.path) {
              case "/":
              case "/home":
              case "/signup":
                return <Component {...props} />;
              default:
                return <Redirect to="/" />;
            }
          }}
        />
      ) : (
        ""
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

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Route component={ParentApp} />
    </BrowserRouter>
  );
};

export default AppRoutes;
