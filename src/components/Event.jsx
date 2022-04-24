import React from "react";
import { useLocation } from "react-router-dom";
import "../styles/Event.css";

export default function Event(props) {

    const location = useLocation();
    const {name, about, overview, requirements, venue, registrationLink, contact } = location.state;

    // console.log(location.state);
    return (
        
        <div>
            <h3>
                Event
            </h3>
            <h3>
                {name}
            </h3>
            <h3>
                {about}
            </h3>
        </div>
    );
}