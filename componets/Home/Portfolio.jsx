import React from "react";
import { Card } from "react-bootstrap";
import ecommerace from "../../assets/ecommerace.png";
import Tolist from "../../assets/Tolist.jpg";
import Blogs from "../../assets/Blogs.jpeg";
function Portfolio() {
  const projects = [
    { name: "Ecommerce Website ", image: ecommerace },
    { name: "Daliy Tasks", image: Tolist },
    { name: "social media", image: Blogs },
  ];
  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Portfolio</h2>
      <div className="row">
        {projects.map((project, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <Card>
              <Card.Img
                variant="top"
                src={project.image}
                style={{ objectFit: "cover", height: "250px" }}
              />
              <Card.Body>
                <Card.Title>{project.name}</Card.Title>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
