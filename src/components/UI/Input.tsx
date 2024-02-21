import React from "react";
import styled from "styled-components";

import { Colors } from "../../constants/colors";

interface InputProps {
  label: string;
  type: string;
  name: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: () => void;
  hasError: boolean;
  errorMsg: string;
}

const Input: React.FC<InputProps> = ({
  label,
  type,
  name,
  value,
  onChange,
  onBlur,
  hasError,
  errorMsg,
}) => {
  return (
    <InputBox>
      <label>{label}</label>
      <InputEl
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        inValid={hasError}
      />
      {hasError && <p>{errorMsg}</p>}
    </InputBox>
  );
};

export default Input;

const InputBox = styled.label``;

const invalid = (props: { inValid: boolean }) => `
  border: ${props.inValid && `1px solid red;`}
`;

const InputEl = styled.input<{ inValid: boolean }>`
  background-color: white;
  border: 1px solid ${Colors.primary500};

  &:focus {
    border-color: ${Colors.primary700};
    outline: none;
  }

  ${invalid}
`;
