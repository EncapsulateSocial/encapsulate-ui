import React from "react";
import { Link, useNavigate } from "react-router-dom";
import TextField from "../../../components/forms/TextField/TextField";
import ButtonField from "../../../components/forms/ButtonField/ButtonField";
import Header from "../../../components/headers/Header";

const Login = () => {
  // For redirecting to another page
  let navigate = useNavigate();

  // Handle login form submission
  const handleLoginFormSubmit = (e) => {
    // Prevent the page from reloading
    e.preventDefault();

    // TODO: implement logic for login for submission
  };

  // Handle create account button click
  const handleCreateAccountClick = (e) => {
    e.preventDefault();
    navigate("/register");
  };

  return (
    <div className="Login">
      <Header className="Login__header" simplify={true} />

      <form className="Login__login-form" onSubmit={handleLoginFormSubmit}>
        <h2 className="Login__login-form-title">Sign Into Account</h2>
        <div className="Login__login-form-login-section">
          <div className="Login__login-form-input-container">
            <TextField type="text" label="Email or username" />
            <TextField type="password" label="Password" />
          </div>
          <div className="Login__login-form-options-container">
            <Link
              className="Login__login-form-forgot-password"
              to="/forgotPassword"
            >
              Forgot password?
            </Link>
          </div>
          <ButtonField
            className="Login__login-form-login-button"
            label="Login"
            type="text"
            fullWidth={true}
          />
        </div>
        <div className="Login__login-form-create-account-section">
          <p className="Login__login-form-create-account-description">
            Or, if you don't have an account
          </p>
          <ButtonField
            className="Login__login-form-create-account-button"
            label="Create account"
            type="text"
            fill={false}
            fullWidth={true}
            handler={handleCreateAccountClick}
          />
        </div>
      </form>
    </div>
  );
};

export default Login;
