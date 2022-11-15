import React from 'react'; 
// import {useState, useEffect} from 'react';

import ButtonField from "../../components/forms/ButtonField/ButtonField";

import Header from "../../components/headers/Header";


const Error = () => {
   
 
    // function handleCallToActionButtonClick(e) {
    //     e.preventDefault();
    //     console.log("Call to action button clicked");
    //     setNewsletterPopup(!newsletterPopup); 
    // }

    return (
        
        <div className="Error">
            <Header/>
            <div className="Error__content">
                <div className="Error__text">
                    <h1 className='Error__content-oops'>Oopse!</h1> 
                    <h3>It appears you went to a page that doesn't exist.</h3>
                    <div className='Error__content-call-to-action-button'>
                        <ButtonField
                        className="Error__contents-call-to-action-button"
                        label="Go to Home Page"
                        fill={false}
                                         />
                    </div>
                </div>
            </div>
            
           
        </div>
    );
}

export default Error;