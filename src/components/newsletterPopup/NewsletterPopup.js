import React from 'react'; 
import { useNavigate } from "react-router-dom";
import '../../sass/components/NewsletterPopup.scss';
import TextField from '../../components/forms/TextField/TextField';
import ButtonField from '../../components/forms/ButtonField/ButtonField';
import LandingSectionIllustration from "../../assets/LandingSectionIllustration.png";

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
            <div className='NewsletterPopup__overlay'>
            <div className="NewsletterPopup__content">
                <div className="NewsletterPopup__landing-section-illustration">
                    <img src={LandingSectionIllustration} alt="People using devices" />
                </div>
                <div className='NewsletterPopup__subscbribe-text'>
                    <h1 className='NewsletterPopup__subscribe'>Subscribe to Newsletter</h1>
                    <div className='NewsletterPopup__text'>Don’t miss out on the latest from Encapsulate. Receive an email notification whenever a new post is added or when there is an update to Encapsulate.</div> 
                    <div className='NewsletterPopup__textfield'>
                        <TextField type='text' label='Email address'/>
                        <ButtonField fill={true} label='submit'/>
                    </div>
                </div>
            </div>
            </div>

            
        </div>
    );
};

export default NewsletterPopup;

 
