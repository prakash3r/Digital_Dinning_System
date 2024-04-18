import React from 'react';
import './about.css'; // Import CSS for About component
import image1 from './images/image1.jpg';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="image-container">
        <img src={image1} alt="About" className="about-image" />
      </div>
      <div className="text-content">
        <h2 className="about-heading">About Us</h2>
        <p className="about-description">
          Welcome to Cafet! We are passionate about providing delicious food and excellent service to our customers. Our goal is to create a welcoming environment where you can enjoy tasty meals with friends and family. From hearty breakfast options to mouthwatering lunch specials, we have something for everyone. Come visit us and experience the flavors of Cafet!
        </p>
      </div>
    </section>
  );
};

export default About;
