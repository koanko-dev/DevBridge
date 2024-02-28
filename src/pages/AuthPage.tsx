import React from "react";
import { redirect, useSearchParams } from "react-router-dom";

import Login from "../components/auth/Login";
import Signup from "../components/auth/Signup";
import { createUser, login } from "../util/auth";
import store from "../store";
import { authActions } from "../store/auth";

const AuthPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const isLogin = searchParams.get("mode") === "login";

  return (
    <div>
      <p>AuthPage</p>
      {isLogin ? <Login /> : <Signup />}
    </div>
  );
};

export default AuthPage;

export const action = async ({ request }: any) => {
  const searchParams = new URL(request.url).searchParams;
  const mode = searchParams.get("mode") || "login";

  const formData = await request.formData();

  if (mode === "login") {
    // Login
    try {
      const token = await login(
        formData.get("email"),
        formData.get("password")
      );

      // set token to localStorage and redux store
      localStorage.setItem("token", token);
      store.dispatch(authActions.login());

      return redirect("/");
    } catch (err) {
      console.log(err);
    }
  } else if (mode === "signup") {
    // Signup
    try {
      const token = await createUser(
        formData.get("email"),
        formData.get("password")
      );

      // set token to localStorage and redux store
      localStorage.setItem("token", token);
      store.dispatch(authActions.login());

      return redirect("/");
    } catch (err) {
      console.log(err);
    }
  }
};
