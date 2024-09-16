import React from 'react';
import "./contact.css"

const Contact = () => {
  return (
    <section className="contact section" id="contact">
        <h2 className="section__title">Get in touch</h2>
        <span className="section__subtitle">Contact Me</span>

        <div className="contact__container container grid">
            <div className="contact__content">
                <h3 className="contact__title">Talk to me</h3>

                <div className="contact__info">
                    <div className="contact__card">
                        <i className="bx bx-mail-send contact__card-icon"></i>

                        <h3 className="contact__card-title">Email</h3>
                        <span className="contact__card-data">tokeruchita@gmail.com</span>

                        <a href="mailto:ruchitatoke@gmail.com.com" className="contact__button">Write Me{" "}
                            <i className="bx bx-right-arrow-alt contact__button-icon"></i>
                        </a>
                    </div>

                    <div className="contact__card">
                        
                        <i class="bx bxl-whatsapp contact__card-icon"></i>

                        <h3 className="contact__card-title">WhatsApp</h3>
                        <span className="contact__card-data">+91-8554098062</span>

                        <a href="https://api.whatsapp.com/send? phone=8554098062&text=Hello,
                        more information!" 
                        className="contact__button">
                            Write Me{" "}
                            <i className="bx bx-right-arrow-alt contact__button-icon"></i>
                        </a>
                    </div>

                   
                </div>
            </div>

            <div className="contact__content">
                <h3 className="contact__title">Write me your Query</h3>

                <form action="https://formspree.io/f/xdkngejo"
                method="POST"
                className="contact__form">

                    <div className="contact__form-div">
                        <label className="contact__form-tag">Name</label>
                        <input type="text" name="name" className="contact__form-input" placeholder="Enter your name"/>
                    </div>

                    <div className="contact__form-div">
                        <label className="contact__form-tag">Mail</label>
                        <input type="email" name="email" className="contact__form-input" placeholder="Enter your email"/>
                    </div>

                    <div className="contact__form-div contact__form-area">
                        <label className="contact__form-tag">Query</label>
                        <textarea
                         name="query"
                        cols="30"
                        rows="10"
                        className="contact__form-input" 
                        placeholder="Write your query">
                        </textarea>
                    </div>

                    <button className="button button--flex" value="send">Contact</button>
                </form>
            </div>
        </div>
    </section>
  )
}

export default Contact
