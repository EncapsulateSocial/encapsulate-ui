import { ConnectingAirportsOutlined } from '@mui/icons-material';
import React from 'react'; 
import { useNavigate } from "react-router-dom";
import '../../sass/components/NewsletterPopup.scss';
// import ButtonField from "../forms/ButtonField/ButtonField";
// import SearchBar from "../search/SearchBar";

const NewsletterPopup= ({ setText }) => {
    // console.log("situation 1:", text);
    let navigate = useNavigate();

    const handleButton = (e) => {
        e.preventDefault();
        setText(false);
        
    }
    // console.log("situation 2", text);

 

    return (
        <div className="Header">
            <div className="Header__content">
              helel;el
                {/* <button onClick={handleButton}>helello</button> */}
            </div>
        </div>
    );
};

export default NewsletterPopup;

 
