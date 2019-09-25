import AuthAction from "../actions/authAction";

export default class AuthMiddleWare {
  static routGuard() {
    return dispatch => {
      dispatch(AuthAction.routGuardAction(true));
    };
  }
}
