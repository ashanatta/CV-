import React, { useEffect } from "react";
import { Card, ProgressBar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import AOS from "aos";
import "aos/dist/aos.css";
const skillsData = [
  { name: "HTML", value: 90 },
  { name: "CSS", value: 85 },
  { name: "JavaScript", value: 60 },
  { name: "React", value: 60 },
  { name: "Bootstrap", value: 80 },
  { name: "MongoDb", value: 80 },
];
function Skills() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Skills</h2>
      <div className="row justify-content-center">
        {skillsData.map((skill, index) => (
          <div
            key={index}
            className="col-md-4 mb-4"
            data-aos="fade-up"
            data-aos-delay={(index + 1) * 100}
          >
            <Card>
              <Card.Body>
                <Card.Title>{skill.name}</Card.Title>
                <ProgressBar now={skill.value} label={`${skill.value}%`} />
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
