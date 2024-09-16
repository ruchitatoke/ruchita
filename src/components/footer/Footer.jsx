import React from 'react';
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer__container container">
            <h1 className="footer__title">Ruchita</h1>

            <ul className="footer__list">
                <li>
                    <a href="#about" className="footer__link">About</a>
                </li>

                <li>
                    <a href="#services" className="footer__link">Projects</a>
                </li>

                
            </ul>

            <div className="footer__social">
            <a href="https://www.instagram.com/ruchita_toke_11/" className="footer__social-link" target="_blank">
    <i class="uil uil-instagram"></i>
    </a>

    <a href="https://facebook.com/ruchita.toke/" className="footer__social-link" target="_blank">
    <i class="uil uil-facebook-f"></i>
    </a>

    <a href="https://github.com/ruchitatoke" className="footer__social-link" target="_blank">
    <i class="uil uil-github-alt"></i>
    </a>
            </div>

        <span className="footer__copy"> RuchitaToke. </span>

        </div>
    </footer>
  )
}

export default Footer
