import React from 'react'; 
import { useNavigate } from "react-router-dom";
import '../../sass/components/NewsletterPopup.scss';


const NewsletterPopup= ({ setText }) => {
    // console.log("situation 1:", text);
    let navigate = useNavigate();

    // const handleButton = (e) => {
    //     e.preventDefault();
    //     setText(false);
        
    // }
    // console.log("situation 2", text);

 

    return (
        <div className="NewsletterPopup">
            <div className="NewsletterPopup__content">
                helel;el
            </div>

            
        </div>
    );
};

export default NewsletterPopup;

 
