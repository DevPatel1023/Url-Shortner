// Footer.jsx
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-4">
      <Container>
        <Row className="align-items-center">
          <Col md={6} className="text-center text-md-left">
            <h3 className="mb-0">Dev Patel</h3>
          </Col>
          <Col md={6} className="text-center text-md-right">
            <a
              href="https://github.com/DevPatel1023"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white me-3"
            >
              <FaGithub size={30} />
            </a>
            <a
              href="https://www.linkedin.com/in/patel-dev-02513b26a/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white"
            >
              <FaLinkedin size={30} />
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer; // Make sure you export the component like this
