import React from 'react';
import { Container } from 'react-bootstrap';
import './Home.css'; // Ensure this path is correct

function Home() {
  return (
    <div className="hero-section">
      <Container>
        <h1 className="hero-heading">Welcome to My Portfolio</h1>
        <p className="hero-text">Hi, I'm George, a passionate software developer.</p>
        <button className="hero-btn">Learn More</button>
      </Container>
    </div>
  );
}

export default Home;
