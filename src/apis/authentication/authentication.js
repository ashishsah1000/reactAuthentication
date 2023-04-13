import { baseUrl } from "..";
import axios from "axios";

export const loginRequest = async (loginData) => {
  console.log(
    "🚀 ~ file: authentication.js:5 ~ loginRequest ~ loginData:",
    loginData
  );
  const url = baseUrl + "/users/login";
  console.log();
  const res = await axios.post(url, loginData, {
    withCredentials: "true",
    headers: {
      "Content-Type": "application/json",
    },
  });
  console.log("login response from the backend", res);
};

export const signupRequest = async (signupData) => {
  const url = baseUrl + "/users/signup";
  const res = await axios.post(url, signupData);
  console.log("signup response from the backend", res);
};

export const logout = async () => {
  const url = baseUrl + "/users/logout";
  const res = await axios.get(url, {
    withCredentials: "true",
    headers: {
      "Content-Type": "application/json",
    },
  });
  console.log("logout response from the backend", res);
};
