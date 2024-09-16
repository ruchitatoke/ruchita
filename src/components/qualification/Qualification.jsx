import React, {useState} from 'react';
import "./qualification.css";

const Qualification = () => {

    const[toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
               setToggleState(index);
    };


  return (
   <section className="qualification section">
    <h2 className="section__title">Qualification</h2>
    <span className="section__subtitle">My personal journey</span>

    <div className="qualification__container container">

        <div className="qualification__tabs">
             <div
             className=
            {toggleState === 1 ?
                 "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(1)}
            >

                <i className="uil uil-graduation-cap qualification__icon"></i>Education
            </div>

            <div className=
            {toggleState === 2 ?
                 "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(2)}>
                <i className="uil uil-briefcase-alt qualification__icon"></i>Experience
            </div>
        </div>

        <div className="qualification__sections">
           
        <div
         className={toggleState === 1 ? 
            "qualification__content qualification__content-active" :
            "qualification__content"
        }
        >
                <div className="qualification__data">
                    <div>
                        <h3 className="qualification__title">SSC </h3>
                        <span className="qualification__subtitle">J T Mahajan English Medium School</span>
                        <span className="qualification__subtitle">91 %</span>
                        <div className="qualification__calender">
                            <i className="uil uil-calendar-alt"></i>2018 
                        </div>
                    </div>

                    <div>
                        <span className="qualification__rounder"></span>
                        <span className="qualification__line"></span>
                    </div>
                </div>

                <div className="qualification__data">
                    <div></div>
                    <div>
                        <span className="qualification__rounder"></span>
                        <span className="qualification__line"></span>
                    </div>

                    <div>
                        <h3 className="qualification__title">HSC</h3>
                        <span className="qualification__subtitle">KCE's Swami Vivekananda Junior College</span>
                        <span className="qualification__subtitle">73.54 %</span>
                        <div className="qualification__calender">
                            <i className="uil uil-calendar-alt"></i>2020 
                        </div>
                    </div>

                    
                </div>

                <div className="qualification__data">
                    <div>
                        <h3 className="qualification__title">Bachelor of Engineering </h3>
                        <span className="qualification__subtitle">Dr D Y Patil Institute of Engineering Management and Research</span>
                        <span className="qualification__subtitle">9.37 CGPA</span>
                        <div className="qualification__calender">
                            <i className="uil uil-calendar-alt"></i>2024
                        </div>
                    </div>

                    <div>
                        <span className="qualification__rounder"></span>
                        <span className="qualification__line"></span>
                    </div>
                
                </div>     
                
            </div>

          <div className={toggleState === 2 ? 
            "qualification__content qualification__content-active" :
            "qualification__content"
        }>
                <div className="qualification__data">
                    <div>
                        <h3 className="qualification__title">Internship </h3>
                        <span className="qualification__subtitle">TechBulls SofTech Pvt.Ltd</span>
                        <div className="qualification__calender">
                            <i className="uil uil-calendar-alt">Feb - March 2023</i>
                        </div>
                    </div>

                    <div>
                        <span className="qualification__rounder"></span>
                        <span className="qualification__line"></span>
                    </div>
                </div>


                    
                
            </div>
        </div>
    </div>
   </section>
  )
}

export default Qualification
