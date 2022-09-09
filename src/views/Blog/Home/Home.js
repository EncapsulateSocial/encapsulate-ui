import React from 'react'; 
import {useState, useEffect} from 'react';
import SearchBar from "../../../components/search/SearchBar";
import PostListing from "../../../components/blog/postListing/PostListing";
import Header from "../../../components/headers/Header";
import ButtonField from "../../../components/forms/ButtonField/ButtonField";
import LandingSectionIllustration from "../../../assets/LandingSectionIllustration.png";
import NewsletterPopup from '../../../components/newsletterPopup/NewsletterPopup';

const Home = () => {
    const [newsletterPopup, setNewsletterPopup]= useState(false);
    // setTimeout(() => {
    //     //console.log("Delayed for 1 second.");
    //     setNewsletterPopup(newsletterPopup+1); 
    //   }, "5000");
    // useEffect(()=>{
    //     myfunc
    // });
    function handleCallToActionButtonClick(e) {
        e.preventDefault();
        console.log("Call to action button clicked");
        setNewsletterPopup(true); 
    }

    return (
        <div className="Home">
            <Header />
            {newsletterPopup
            ? <NewsletterPopup setText={setNewsletterPopup}/>
            :null}
            <div className="Home__landing-section">
                <div className="Home__landing-section-details">
                    <h1 className="Home__heading">Encapsulating Our Software Engineering Stories</h1>
                    <p className="Home__heading-caption">
                        Welcome to our blog, where we discuss all things technology, design, 
                        and software engineering.
                    </p>
                    <ButtonField
                        className="Home__landing-call-to-action-button"
                        label="Subscribe to Newsletter"
                        fill={false}
                        handler={handleCallToActionButtonClick}
                    />
                </div>
                <div className="Home__landing-section-illustration">
                    <img src={LandingSectionIllustration} alt="People using devices" />
                </div>
            </div>
            <div className="Home__latest-posts-section">
                <h2 className="Home__latest-posts-heading">Latest Posts</h2>
                <div className="Home__posts-container">
                    {[...Array(9)].map((e, index) => (
                        <PostListing key={index} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Home;