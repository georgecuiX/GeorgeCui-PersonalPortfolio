import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './About.css'; // Adjust the path as necessary

function About() {
  return (
    <Container className="about-section">
      <Row className="align-items-center">
        <Col md={4} className="text-center">
          <img src="path_to_profile_image.jpg" alt="Profile" className="profile-image rounded-circle" />
        </Col>
        <Col md={8}>
          <h2>About Me</h2>
          <p className="about-text">
            I am a second-year Computer Science student at Toronto Metropolitan University. My interests include...
          </p>
          {/* More about you */}
        </Col>
      </Row>
    </Container>
  );
}

export default About;
