import axios from "axios";

const API_KEY = process.env.REACT_APP_FIREBASE_API_KEY;

const authenticate = async (mode: string, email: string, password: string) => {
  const url = `https://identitytoolkit.googleapis.com/v1/accounts:${mode}?key=${API_KEY}`;

  const response = await axios.post(url, {
    email: email,
    password: password,
    returnSecureToken: true,
  });

  const token = response.data.idToken;

  return token;
};

export const createUser = async (email: string, password: string) => {
  return await authenticate("signUp", email, password);
};

export const login = async (email: string, password: string) => {
  return await authenticate("signInWithPassword", email, password);
};

const getAuthToken = () => {
  const token = localStorage.getItem("token");
  return token;
};

export const tokenLoader = () => {
  return getAuthToken();
};
