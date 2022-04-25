import React from "react";
import "../styles/Home.css";
import quintessence from '../assets/videos/Quintessence.mp4';
import mobile from '../assets/videos/mobile.mp4';
import clgLogo from '../assets/images/clgLogo.jpeg';
import { Link } from "react-router-dom";

export default function Home() {
    return (
        <div className="">
            <section id="navbar">
      <div>
        <nav
          className="navbar navbar-transparent navbar-expand-lg navbar-dark"
          id="nav1"
        >
          <a className="navbar-brand" href="https://srmeaswari.ac.in/">
            <img
              src={clgLogo}
              width=""
              height="50"
              alt=""
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse flex-grow-0"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <a className="nav-link" href="#about"
                  >About <span className="sr-only">(current)</span></a
                >
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#footer">Contact</a>
              </li>
              <li className="nav-item">
                <Link to = {{
                pathname: '/events',
            }} className="nav-link" role="button" data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false">
                Events
            </Link>
                
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </section>
    <section id="main_page">
      <div className="video">
        <video
        controls
          width="100%"
          height="100%"
          autoPlay
          muted="muted"
          loop
          className="desktop_video"
          style={{pointerEvents: "none"}}
        ><source src={quintessence} type="video/mp4"/></video>
        <video
         width="100%"
          height="100%"
          autoPlay
          loop
          className="mobile_video"
          style={{pointerEvents: "none"}}
        ><source src={mobile} type="video/mp4"/></video>
      </div>
    </section>
    <section id="about">
      <div className="about">
        <h1>About</h1>

        <p>
          Quintessence, a national technical symposium hosted by the department
          of Electronics and Communication Engineering, showcases engineering
          brilliance. The symposium combines a wide range of technical and
          non-technical events, all of which are aimed to flummox our
          participants' thoughts and illuminate their knowledge while
          maintaining a positive atmosphere. With the use of a competitive
          platform, Quintessence aims to procure the top skills from them.
        </p>
      </div>
    </section>
    <section id="footer">
      <div className="footer">
        <a href="#"><i className="social-icon fab fa-facebook-f fa-4x"></i></a>

        <a href="#"><i className="social-icon fab fa-instagram fa-4x"></i></a>
        <a href="#"><i className="social-icon fas fa-envelope fa-4x"></i></a>

        <p>© 2022 Quintessence</p>
      </div>
    </section>
    </div>
    );
    
}