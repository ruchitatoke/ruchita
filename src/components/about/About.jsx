import React from 'react';
import "./about.css";
import CV from "../../assets/CV.pdf"; 

import Info from './Info';

const About = () => {
  return (
    <section className="about section" id="about">
        <h2 className="section__title">About Me</h2>
        <span className="section__subtitle">My Introduction</span>

        <div className="about__container container grid">
           
            <div className="about__data">
                <Info/>
                <p className="about__description">My expertise lies in HTML, CSS, JavaScript, and React. 
                  I have knowledge in using Java, MySQL etc.
                   I enjoy creating responsive and accessible web interfaces that provide a seamless user experience.

                </p>

                <a download="" href={CV} className="button button--flex">Download CV</a>
            </div>
        </div>
    </section>
  )
}

export default About
