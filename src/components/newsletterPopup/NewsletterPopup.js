import React from "react";
import "../../sass/components/NewsletterPopup.scss";
import TextField from "../../components/forms/TextField/TextField";
import ButtonField from "../../components/forms/ButtonField/ButtonField";
import LandingSectionIllustration from "../../assets/LandingSectionIllustration.png";
import { Close } from "@mui/icons-material";

const NewsletterPopup = ({ handleCloseButtonClick }) => {
  return (
    <div className="NewsletterPopup">
      <div className="NewsletterPopup__overlay">
        <div className="NewsletterPopup__content">
          <img
            className="NewsletterPopup__illustration"
            src={LandingSectionIllustration}
            alt="People using devices"
          />
          <div className="NewsletterPopup__info-container">
            <Close
              className="NewsletterPopup__close-button"
              onClick={handleCloseButtonClick}
            />
            <h3 className="NewsletterPopup__heading">
              Subscribe to Our Newsletter
            </h3>
            <p className="NewsletterPopup__details">
              Don't miss out on the latest from Encapsulate. Receive an email
              notification whenever a new post is added or when there is an
              update to Encapsulate.
            </p>
            <div className="NewsletterPopup__input-container">
              <TextField type="text" label="Email address" />
              <ButtonField fill={true} label="Submit" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsletterPopup;
