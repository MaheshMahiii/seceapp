import React from "react";
import data from "../data";
import { Link } from 'react-router-dom';

export default function Events() {

    const contests = data.events.map(contest => (
        <div>
            <Link to = {{
                pathname: '/event',
            }} state = {contest} >
                {contest.name} 
            </Link>
        </div>       
    ))

    return (
        <main>
            <h3>Events</h3>       
            {contests}    
        </main>
    );
}