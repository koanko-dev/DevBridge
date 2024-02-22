import React from "react";
import { useSearchParams } from "react-router-dom";

import Login from "../components/auth/Login";
import Signup from "../components/auth/Signup";

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

