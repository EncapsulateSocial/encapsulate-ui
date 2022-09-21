import React from "react";
import { useNavigate } from "react-router-dom";
import TextField from "../../../components/forms/TextField/TextField";
import ButtonField from "../../../components/forms/ButtonField/ButtonField";
import Header from "../../../components/headers/Header";

const Register = () => {
  let navigate = useNavigate();

  const handleRegisterFormSubmit = (e) => {
    e.preventDefault();
  };

  const handleSignInClick = (e) => {
    e.preventDefault();
    navigate("/login");
  };

  return (
    <div className="Register">
      <Header simplify={true} />

      <form
        className="Register__register-form"
        onSubmit={handleRegisterFormSubmit}
      >
        <h2 className="Register__register-form-title">Create an Account</h2>
        <div className="Register__register-form-register-section">
          <div className="Register__register-form-input-container">
            <TextField type="text" label="Username" />
            <TextField type="text" label="Email address" />
            <TextField type="password" label="Password" />
            <TextField type="password" label="Confirm password" />
          </div>
          <ButtonField
            className="Register__register-form-sign-up-button"
            label="Sign up"
            type="submit"
            fullWidth={true}
          />
        </div>
        <div className="Register__register-form-sign-in-section">
          <p className="Register__register-form-sign-in-description">
            Or, if you already have an account
          </p>
          <ButtonField
            className="Register__register-form-sign-in-button"
            label="Sign in"
            type="text"
            fill={false}
            fullWidth={true}
            handler={handleSignInClick}
          />
        </div>
      </form>
    </div>
  );
};

export default Register;
