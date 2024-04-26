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
              As web developers, we specialize in creating and maintaining
              websites. We are skilled in various programming languages such as
              HTML, CSS, and JavaScript, as well as frameworks and libraries
              like React, Angular, and Vue.js. Our goal is to build responsive,
              user-friendly, and visually appealing websites that meet our
              clients' needs and expectations.
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
