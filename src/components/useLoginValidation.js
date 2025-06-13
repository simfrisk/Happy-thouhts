import { useState } from "react";

export const useLoginValidation = () => {
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const validate = ({ email, password }) => {
    let hasError = false;
    setEmailError("");
    setPasswordError("");

    if (!email) {
      setEmailError("Email is required");
      hasError = true;
    } else if (!email.includes("@")) {
      setEmailError("Invalid email address");
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
    passwordError,
    validate,
  };
};