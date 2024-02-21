import { useReducer } from "react";

interface inputStateType {
  value: string;
  isTouched: boolean;
};

interface actionType {
  type: string;
  value?: string;
};

const initialInputState = {
  value: "",
  isTouched: false,
};

const inputStateReducer = (
  state: inputStateType,
  action: actionType
): inputStateType => {
  if (action.type === "INPUT") {
    return { isTouched: state.isTouched, value: action.value! };
  }
  if (action.type === "BLUR") {
    return { isTouched: true, value: state.value };
  }
  if (action.type === "SET_DEFAULT") {
    return { isTouched: false, value: action.value! };
  }
  return state;
};

const useInput = (validateValue: (value: string) => boolean) => {
  const [inputState, dispatch] = useReducer(
    inputStateReducer,
    initialInputState
  );

  const valueIsValid = validateValue(inputState.value);
  const hasError = !valueIsValid && inputState.isTouched;

  const valueChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: "INPUT", value: event.target.value });
  };

  const inputBlurHandler = () => {
    dispatch({ type: "BLUR" });
  };

  const setDefaultValueHandler = (defaultValue: string) => {
    dispatch({ type: "SET_DEFAULT", value: defaultValue });
  };

  return {
    value: inputState.value,
    isValid: valueIsValid,
    hasError,
    valueChangeHandler,
    inputBlurHandler,
    setDefaultValueHandler,
  };
};

export default useInput;
