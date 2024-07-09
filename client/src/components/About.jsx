import React from "react";

const About = () => {
  return (
    <div className="card" style={{ margin: '20px' }}>
      <div className="card-header" style={{ backgroundColor: '#202432', color: '#FFFFFF' }}>About</div>
      <div className="card-body" style={{ backgroundColor: '#2a2f3a', color: '#a0b8d0' }}>
        <h5 className="card-title" style={{ color: '#FFFFFF' }}>URL Shortener</h5>
        <p className="card-text">
          Our URL Shortener is a powerful tool designed to simplify the process of sharing long and unwieldy URLs. By converting lengthy web addresses into short, manageable links, you can easily share them across various platforms without any hassle.
        </p>
        <p className="card-text">
          <strong>Key Features:</strong>
        </p>
        <ul>
          <li>Quickly shorten long URLs with just one click.</li>
          <li>Customizable short URLs for better branding and memorability.</li>
          <li>Track link performance with detailed analytics.</li>
          <li>Secure and reliable, ensuring your links are always accessible.</li>
        </ul>
        <p className="card-text">
          Whether you're a marketer, social media manager, or just someone who frequently shares links, our URL Shortener is the perfect solution to keep your links neat and efficient. Start shortening your URLs today and experience the convenience and effectiveness of our service.
        </p>
      </div>
    </div>
  );
};

export default About;
