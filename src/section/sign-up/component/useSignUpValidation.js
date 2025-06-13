// src/components/useSignUpValidation.js
import { useState } from "react";

export const useSignUpValidation = () => {
  const [emailError, setEmailError] = useState("");
  const [nameError, setNameError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const validate = ({ email, name, password }) => {
    let hasError = false;

    setEmailError("");
    setNameError("");
    setPasswordError("");

    if (!email) {
      setEmailError("Email is required");
      hasError = true;
    } else if (!email.includes("@")) {
      setEmailError("Invalid email address");
      hasError = true;
    }

    if (!name) {
      setNameError("Name is required");
      hasError = true;
    }

    if (!password) {
      setPasswordError("Password is required");
      hasError = true;
    }

    return !hasError;
  };

  return {
    emailError,
    nameError,
    passwordError,
    validate,
  };
};