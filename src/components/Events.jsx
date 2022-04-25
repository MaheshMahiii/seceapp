import React from "react";
import data from "../data";
import { Link } from 'react-router-dom';
import mainPoster from '../assets/images/mainPoster.jpeg'
import "../styles/Events.css";

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
            {/* <h3>Events</h3>       
            {contests}    
            <div className="main-poster">
            <img src={mainPoster}/>

            </div>
            <img src="./assets/images/mainPoster.jpeg"/> */}
            <section id="main-poster">
                <div className="main-poster">
                    <img src={mainPoster} height="100%" width="80%" alt="" />
                </div>
            </section>

            <section className="white-section" id="events">
                <div className="container">
                    <div className="card-deck mb-3 text-center">
                        <div className="card mb-4 box-shadow">
                            <div className="card-header">
                                <h4 className="my-0 font-weight-normal">Technical Events</h4>
                            </div>
                            <div className="card-body">
                                <ul className="list-unstyled mt-3 mb-4">
                                    <p><a href="google.com">The chronical of ideas( Paper presentation )</a></p>
                                    <p>Cyber cipher( Code War )</p>
                                    <p>Mind Scribble (Quiz)</p>
                                    <p>Electroplot (Spot circuit designing)</p>
                                    <p>Arthashastra(Problem Solving)</p>
                                    <p>Inventory Showcase</p>
                                </ul>                                
                            </div>
                        </div>
                        <div className="card mb-4 box-shadow">
                            <div className="card-header">
                                <h4 className="my-0 font-weight-normal">Online Events</h4>
                            </div>
                            <div className="card-body">                            
                                <ul className="list-unstyled mt-3 mb-4">
                                    <p>Meme Creation</p>
                                    <p>Illustration Art</p>
                                    <p>Online Gaming</p>
                                </ul>                         
                            </div>
                        </div>
                        <div className="card mb-4 box-shadow">
                            <div className="card-header">
                                <h4 className="my-0 font-weight-normal">Non Technical Events</h4>
                            </div>
                            <div className="card-body">                            
                                <ul className="list-unstyled mt-3 mb-4">
                                    <p>Con Nexons (Connections)</p>
                                    <p>One pitch one hand (Box cricket)</p>
                                    <p>Add Zap (Adzap)</p>
                                    <p>Liga (Futsal)</p>
                                    <p>Twirl in a minute (Adaptunes)</p>
                                    <p>Sherlock Holmes</p>
                                </ul>                           
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );

}