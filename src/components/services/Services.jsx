import React, { useState } from 'react';
import "./services.css";

const Services = () => {
    const[toggleState, setToggleState] = useState(0);

    const toggleTab = (index) => {
               setToggleState(index);
    };

  return (
   <section className="services section" id="services">
     <h2 className="section__title">Projects</h2>
     <span className="section__subtitle">Projects Completed</span>

     <div className="services__container container grid">

     <div className="services__content">
            <div>
            <i class='bx bx-code services__icon'></i>
                <h3 className="services__title">
                    Travel Management <br/> System</h3>
            </div>

            <span className="services__button" onClick={() => toggleTab(1)}>
                View More
                <i className="uil uil-arrow-right services__button-icon"></i></span>

                <div className={toggleState === 1 ? "services__modal active-modal" : "services__modal"}>
                <div className="services__modal-content">
                    <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>

                    <h3 className="services__modal-title">Travel Management System</h3>
                    <p className="services__modal-description">Designed travel booking, visually appealing and user-friendly application
                                                                that entices users to explore exciting destinations and plan their dream
                                                                vacation.</p>

                    <ul className="services__modal-services grid">
                        <li className="services__modal-service">
                            <i className="uil uil-check-circle services__modal-icon"></i>
                            <p className="services__modal-info">It performs CRUD operations.</p>
                        </li>

                        <li className="services__modal-service">
                            <i className="uil uil-check-circle services__modal-icon"></i>
                            <p className="services__modal-info">Skills set - Java, Swing, JDBC, MySQL</p>
                        </li>


                        <li className="services__modal-service">
                            <i className="uil uil-check-circle services__modal-icon"></i>
                            <a href="https://github.com/ruchitatoke/travel_management_system.git" className="link">Click here</a>
                           
                        </li>
                    </ul>
                </div>
            </div>
</div>

        <div className="services__content">
            <div>
            <i class='bx bx-code services__icon'></i>
                <h3 className="services__title">
                    Tic-Tac-Toe </h3>
            </div>

            <span onClick={() => toggleTab(2)} className="services__button" >View More
                <i className="uil uil-arrow-right services__button-icon"></i></span>

                <div className={toggleState === 2 ? "services__modal active-modal" : "services__modal"}>
                <div className="services__modal-content">
                    <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>

                    <h3 className="services__modal-title">Tic-Tac-Toe</h3>
                    <p className="services__modal-description"> It is classic two-player game that provides an 
                                                                opportunity for strategic thinking and problem-solving</p>

                    <ul className="services__modal-services grid">
                        <li className="services__modal-service">
                            <i className="uil uil-check-circle services__modal-icon"></i>
                            <p className="services__modal-info">This game can be played on the website</p>
                        </li>

                        <li className="services__modal-service">
                            <i className="uil uil-check-circle services__modal-icon"></i>
                            <p className="services__modal-info">Skills set - HTML, CSS, JavaScript</p>
                        </li>


                        <li className="services__modal-service">
                            <i className="uil uil-check-circle services__modal-icon"></i>
                            <a href="https://ruchitatoke.github.io/Tic_Tac_Toe/" className="link">Click here</a>
                        </li>
                    </ul>
                </div>
            </div>
</div>
        <div className="services__content">
            <div>
            <i class='bx bx-code services__icon'></i>
                <h3 className="services__title">
                    E-Commerce <br/>Website</h3>
            </div>


            <span onClick={() => toggleTab(3)} className="services__button" >View More
                <i className="uil uil-arrow-right services__button-icon"></i></span>

            <div className={toggleState === 3 ? "services__modal active-modal" : "services__modal"}>
                <div className="services__modal-content">
                    <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>

                    <h3 className="services__modal-title">E-Commerce Website</h3>
                    <p className="services__modal-description">The site is as much as a delight as their confectioneries having a gallery,
                    navigation bars. The website is designed to view and sold the Chocolates </p>

                    <ul className="services__modal-services grid">
                        <li className="services__modal-service">
                            <i className="uil uil-check-circle services__modal-icon"></i>
                            <p className="services__modal-info">It is visually appealing</p>
                        </li>

                        <li className="services__modal-service">
                            <i className="uil uil-check-circle services__modal-icon"></i>
                            <p className="services__modal-info">Skills set - HTML, CSS</p>
                        </li>


                        <li className="services__modal-service">
                            <i className="uil uil-check-circle services__modal-icon"></i>
                            <a href="https://ruchitatoke.github.io/Chocolate-website/" className="link">Click here</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
     </div>

    
     
     
   </section>
  )
}

export default Services
