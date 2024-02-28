import { redirect } from "react-router-dom";

import store from "../store";
import { authActions } from "../store/auth";

export const action = () => {
  localStorage.removeItem("token");
  store.dispatch(authActions.logout());

  return redirect("/");
};
