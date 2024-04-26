import React from "react";
import { motion } from "framer-motion";

function Resume() {
  return (
    <>
      <h1 className="card-title text-center mb-4">Resume</h1>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="container py-4 d-flex justify-content-center align-items-center"
        style={{
          background: "linear-gradient(to right, #AED9E0, #F2F6F8)",
          minHeight: "100vh",
        }}
      >
        <div className="row">
          <div className="col-md-6">
            <motion.ul
              className="p-3"
              style={{ borderRight: "2px solid #ccc" }}
            >
              <h2 className="fw-bold text-left mb-3">Personal Information</h2>
              <li className="list-group-item" transition={{ duration: 0.3 }}>
                Name:Muhammad Ashan
              </li>
              <li className="list-group-item" transition={{ duration: 0.3 }}>
                Email: muhammadashan1714@gmail.com
              </li>
              <li className="list-group-item" transition={{ duration: 0.3 }}>
                Phone: +923060297685
              </li>
            </motion.ul>
            <motion.ul
              className="p-3"
              style={{ borderRight: "2px solid #ccc" }}
            >
              <h2 className="fw-bold text-left mb-3">Certificates</h2>
              <h4>From udemy</h4>
              <li className="list-group-item" transition={{ duration: 0.3 }}>
                <a href="https://www.udemy.com/certificate/UC-7fb717a0-0fdd-49e0-b761-08bbb1e4d7a4/">
                  Complete Web Development Bootcamp
                </a>
              </li>
              <h4>From coursera</h4>
              <li className="list-group-item" transition={{ duration: 0.3 }}>
                <a href="https://www.coursera.org/account/accomplishments/verify/H8HFDTSK35SX?utm_source%3Dandroid%26utm_medium%3Dcertificate%26utm_content%3Dcert_image%26utm_campaign%3Dsharing_cta%26utm_product%3Dcourse">
                  {" "}
                  Scrimba Learn React
                </a>{" "}
              </li>
            </motion.ul>
          </div>
          <div className="col-md-6">
            <motion.ul whileHover={{ scale: 1.05 }} className="p-3">
              <h2 className="fw-bold text-left mb-3">Education</h2>
              <li
                className="list-group-item"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                Bachelor of Science in Computer Science
              </li>
              <li
                className="list-group-item"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                UMT, 2024
              </li>
            </motion.ul>
            <motion.ul
              whileHover={{ scale: 1.05 }}
              className="p-3"
              style={{ cursor: "pointer" }}
            >
              <h2 className="fw-bold text-left mb-3">Language Skills</h2>
              <li
                className="list-group-item"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                English: Intermediate
              </li>
              <li
                className="list-group-item"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                Urdu: Fluent
              </li>
            </motion.ul>
            <motion.ul
              whileHover={{ scale: 1.05 }}
              className="p-3"
              style={{ cursor: "pointer" }}
            >
              <h2 className="fw-bold text-left mb-3">Experience</h2>
              <b
                className="list-group-item "
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                Internship
              </b>
              <li
                className="list-group-item"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                Scrum AD Internship as a fullstack
              </li>
              <li
                className="list-group-item"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                CodeAlpha Internship as a fullstack
              </li>
            </motion.ul>
          </div>
        </div>
      </motion.div>
    </>
  );
}

export default Resume;
