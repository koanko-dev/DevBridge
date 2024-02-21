import React from "react";
import { Form } from "react-router-dom";

import useInput from "../../hooks/use-input";
import Input from "../UI/Input";
import { Link } from "react-router-dom";

const isEmail = (value: string) => value.includes("@");
const isNotEmpty = (value: string) => value.trim() !== "";
const emailErrorMsg = "옳은 이메일 형식을 입력해주세요.";
const emptyErrorMsg = "값을 입력해주세요.";

const LoginForm: React.FC = () => {
  const {
    value: emailValue,
    isValid: emailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
  } = useInput(isEmail);

  const {
    value: passwordValue,
    isValid: passwordIsValid,
    hasError: passwordHasError,
    valueChangeHandler: passwordChangeHandler,
    inputBlurHandler: passwordBlurHandler,
  } = useInput(isNotEmpty);

  let formIsValid = false;

  if (emailIsValid && passwordIsValid) {
    formIsValid = true;
    console.log(formIsValid);
  }

  return (
    <Form method="post">
      <Input
        label="이메일"
        type="email"
        name="email"
        value={emailValue}
        onChange={emailChangeHandler}
        onBlur={emailBlurHandler}
        hasError={emailHasError}
        errorMsg={emailErrorMsg}
      />
      <Input
        label="비밀번호"
        type="password"
        name="password"
        value={passwordValue}
        onChange={passwordChangeHandler}
        onBlur={passwordBlurHandler}
        hasError={passwordHasError}
        errorMsg={emptyErrorMsg}
      />
      <Link to={"?mode=signup"}>
        <button>회원가입</button>
      </Link>
      <button>로그인</button>
    </Form>
  );
};

export default LoginForm;
