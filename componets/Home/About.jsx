import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import about from "../../assets/about.webp";

function About() {
  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={4}>
          <div className="card-body mt-5">
            <h1 className="card-title fw-bold">About Us</h1>
            <p>
              Software Developer with 2+ years of experience specializing in Laravel and MySQL. Expert in building scalable REST APIs, secure payment integrations, and AI-driven solutions, with a focus on delivering clean, high-performance code for complex web platforms.
            </p>
          </div>
        </Col>
        <Col xs={6} className="ms-auto">
          <div>
            <Image src={about} className="card-img-top" alt="..." />
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default About;
