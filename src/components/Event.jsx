import React from "react";
import { useLocation } from "react-router-dom";
import "../styles/Event.css";
import galaxy from "../assets/videos/galaxy.mp4";
import galaxyMobile from "../assets/videos/galaxyMobile.mp4";
import samplePoster from "../assets/images/samplePoster.jpeg";

const Event = () =>{

    const location = useLocation();
    const {name, about, overview, requirements, venue, registrationLink, contact } = location.state;
    // console.log(location.state);

    return (
        <div>
            <div className="video-wrapper">
                <video id="vid" width="100%" height="100%" autoPlay loop muted="muted" className="desktop_video">
                    <source src={galaxy} type="video/mp4"/>
                </video>
                <video id="vid" width="100%" height="100%" autoPlay loop muted="muted" className="mobile_video">
                    <source src={galaxyMobile} type="video/mp4"/>
                </video>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-sm-12 colStyle"
                    >
                        <img src={samplePoster} height="100%" width="85%" alt="img"/>
                    </div>
                    <div className="col colStyle">
                        <h2>content</h2>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Event;