import React from "react";
import emailjs from "emailjs-com";
import { FaInstagram, FaMixcloud } from "react-icons/fa"; // Social Icons
import "./styles/App.css"; // Global Styles

const Footer = () => {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_heulnra", 
      "template_hyqtg4k", 
      e.target, 
      "C3hNudHol2HbPpoBm"
    ).then(
      () => {
        alert("Message sent successfully!");
      },
      (error) => {
        alert("Failed to send message. Please try again.");
        console.error("Email send error:", error.text);
      }
    );

    e.target.reset();
  };

  return (
    <footer className="site-footer">
      {/* Social Media Links */}
      <div className="social-links">
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram size={30} />
        </a>
        <a href="https://mixcloud.com" target="_blank" rel="noopener noreferrer">
          <FaMixcloud size={30} />
        </a>
      </div>

      {/* Contact Section */}
      <div className="contact-section">
        <h2>Contact</h2>
        <form onSubmit={sendEmail}>
          <input type="text" name="title" placeholder="Subject" required />  
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" placeholder="Your Message" required></textarea>
          <button type="submit">Send</button>
        </form>
      </div>

      {/* Footer Text */}
      <p>© {new Date().getFullYear()} OsoTech | All Rights Reserved</p>
    </footer>
  );
};

export default Footer;
