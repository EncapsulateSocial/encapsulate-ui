import React from "react";
import { useNavigate } from "react-router-dom";
import ButtonField from "../forms/ButtonField";
import SearchBar from "../search/SearchBar";

const Header = ({ simplify = false }) => {
  let navigate = useNavigate();

  const handleSignUpButtonClick = (e) => {
    e.preventDefault();
    navigate("/login");
  };

  const handleLogoClick = () => {
    navigate("/");
  };

  return (
    <div className="Header">
      <div className="Header__content">
        <h3 className="Header__logo" onClick={handleLogoClick}>
          Encapsulate
        </h3>
        {!simplify && (
          <>
            <SearchBar className="Header__search-bar" />
            <ButtonField
              className="Header__sign-in-button"
              label="Sign in"
              fill={false}
              handler={handleSignUpButtonClick}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
