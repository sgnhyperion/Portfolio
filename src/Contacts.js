import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import "./Contacts.css";
import React, { useState } from "react";
import Socials from "./Socials";

function Contacts() {
  const [selectedCategory, setSelectedCategory] = useState("Web Development");

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };
  return (
    <section className="contacts">
      <div className="contact-container">

        <div className="contact-header">
            <h1>Let's discuss on something <br></br><span id="cool">cool</span> together</h1>
            <Socials />
            <div id="container">
                <p>
                    {" "}
                    <MdEmail id="contact-icon" /> hk755063@gmail.com
                </p>
                <p>
                    {" "}
                    <FaPhoneAlt id="contact-icon" /> 7033388505
                </p>
            </div>
        </div>
        <form className="form-container">
          <h3>I'm interested in...</h3>
          <div className="button-group">
            {["Web Development", "Hiring", "Freelance", "Other"].map(
              (category) => (
                <button
                  key={category}
                  className={`category-button ${
                    selectedCategory === category ? "active" : ""
                  }`}
                  onClick={() => handleCategoryClick(category)}
                >
                  {category}
                </button>
              )
            )}
          </div>
          <form>
            <label>Enter Name *</label>
            <input type="text" required />

            <label>Enter Email *</label>
            <input type="email" required />

            <label>Enter Phone No.</label>
            <input type="tel" />

            <label>Enter Message *</label>
            <textarea required></textarea>

            <button type="submit" className="submit-button">
              <i className="fas fa-paper-plane"></i> Send Message
            </button>
          </form>
        </form>
      </div>
    </section>
  );
}

export default Contacts;
