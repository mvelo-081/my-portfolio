import React from 'react';
import githubIcon from './imgs/github.png';
import linkedinIcon from './imgs/linkedin.png';
import facebookIcon from './imgs/facebook.png';
import instagramIcon from './imgs/instagram.png';
import emailIcon from './imgs/email.png'; 
import whatsappIcon from './imgs/whatsapp.png';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact-info">
      <h2>Let's Connect!</h2>
      <p>Feel free to reach out and connect with me on any platform:</p>

      <div className="social-links">
        <a href="mailto:mvelokhumalo111@gamil.com" target="_blank" rel="noopener noreferrer">
          <img src={emailIcon} alt="Email Icon" className="social-icon" /> Email
        </a>
        <a href="https://github.com/mvelo-081" target="_blank" rel="noopener noreferrer">
          <img src={githubIcon} alt="GitHub Icon" className="social-icon" /> GitHub
        </a>
        <a href="https://linkedin.com/in/mvelo-khumalo-466920268" target="_blank" rel="noopener noreferrer">
          <img src={linkedinIcon} alt="LinkedIn Icon" className="social-icon" /> LinkedIn
        </a>
        <a href="https://facebook.com/lwandle.rh.3" target="_blank" rel="noopener noreferrer">
          <img src={facebookIcon} alt="Facebook Icon" className="social-icon" /> Facebook
        </a>
        <a href="https://instagram.com/lwandle__khumalo" target="_blank" rel="noopener noreferrer">
          <img src={instagramIcon} alt="Instagram Icon" className="social-icon" /> Instagram
        </a>
        <a href="https://wa.me/+27822548353" target="_blank" rel="noopener noreferrer">
            <img src={whatsappIcon} alt="WhatsApp Icon" className="social-icon" /> WhatsApp
        </a>

      </div>
    </section>
  );
};

export default Contact;
