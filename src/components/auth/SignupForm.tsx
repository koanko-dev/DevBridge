import React from "react";
import { Form } from "react-router-dom";
import { Link } from "react-router-dom";

import useInput from "../../hooks/use-input";
import Input from "../UI/Input";

const isEmail = (value: string) => value.includes("@");
const isNotEmpty = (value: string) => value.trim() !== "";

const emailErrorMsg = "옳은 이메일 형식을 입력해주세요.";
const emptyErrorMsg = "값을 입력해주세요.";
const checkingPasswordErrorMsg = "일치하는 비밀번호를 입력하세요.";

const SignupForm: React.FC = () => {
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

  const isSamePassword = (value: string) => value === passwordValue;

  const {
    value: secPasswordValue,
    isValid: secPasswordIsValid,
    hasError: secPasswordHasError,
    valueChangeHandler: secPasswordChangeHandler,
    inputBlurHandler: secPasswordBlurHandler,
  } = useInput(isSamePassword);

  let formIsValid = false;

  if (emailIsValid && passwordIsValid && secPasswordIsValid) {
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
      <Input
        label="비밀번호 확인"
        type="password"
        name="check_password"
        value={secPasswordValue}
        onChange={secPasswordChangeHandler}
        onBlur={secPasswordBlurHandler}
        hasError={secPasswordHasError}
        errorMsg={checkingPasswordErrorMsg}
      />
      <Link to={"?mode=login"}>
        <button>로그인</button>
      </Link>
      <button>회원가입</button>
    </Form>
  );
};

export default SignupForm;
