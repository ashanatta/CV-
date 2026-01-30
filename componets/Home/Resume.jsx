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
        className="container py-4"
        style={{
          background: "linear-gradient(to right, #AED9E0, #F2F6F8)",
          minHeight: "100vh",
        }}
      >
        {/* Header Section */}
        <motion.div
          className="text-center mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <h2 className="fw-bold mb-2">Muhammad Ashan</h2>
          <p className="mb-1">
            <strong>Laravel Developer</strong>
          </p>
          <p className="mb-3">
            +923060297685 · muhammadashan1714@gmail.com · LinkedIn · GitHub · Portfolio
          </p>
        </motion.div>

        {/* Professional Summary */}
        <motion.div
          className="mb-4 p-3"
          style={{ backgroundColor: "rgba(255, 255, 255, 0.8)", borderRadius: "10px" }}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
        >
          <h3 className="fw-bold mb-3">Professional Summary</h3>
          <p>
            Software Developer with 2+ years of experience specializing in Laravel and MySQL. 
            Expert in building scalable REST APIs, secure payment integrations, and AI-driven solutions, 
            with a focus on delivering clean, high-performance code for complex web platforms.
          </p>
        </motion.div>

        <div className="row">
          {/* Left Column */}
          <div className="col-md-6">
            {/* Professional Experience */}
            <motion.div
              className="mb-4 p-3"
              style={{ backgroundColor: "rgba(255, 255, 255, 0.8)", borderRadius: "10px" }}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <h3 className="fw-bold mb-3">Professional Experience</h3>
              
              <div className="mb-3">
                <h5 className="fw-bold">Laravel Developer</h5>
                <p className="text-muted mb-2">Techons (Pvt.) Ltd. | 2024 - Present</p>
                <ul className="list-unstyled ms-3">
                  <li>• Working on live projects using PHP framework Laravel</li>
                  <li>• Gaining experience in HTML, CSS, JavaScript, Laravel, REST APIs</li>
                  <li>• Implementing authentication (both session-based and token-based)</li>
                  <li>• Working with database relationships and complex queries</li>
                </ul>
              </div>

              <div className="mb-3">
                <h5 className="fw-bold">Internship</h5>
                <p className="text-muted mb-2">ScrumAD Pvt. Ltd.</p>
                <ul className="list-unstyled ms-3">
                  <li>• Worked on Laravel, MySQL, Blade templates, Bootstrap, and JavaScript</li>
                  <li>• Gained hands-on experience in authentication, CRUD operations, and relationships</li>
                  <li>• Developed RESTful APIs for various project modules</li>
                  <li>• Implemented frontend functionality using jQuery and AJAX</li>
                </ul>
              </div>

              <div className="mb-3">
                <h5 className="fw-bold">Internship</h5>
                <p className="text-muted mb-2">Sigma Digital Solutions</p>
                <ul className="list-unstyled ms-3">
                  <li>• Worked on PHP Core and Laravel projects</li>
                  <li>• Developed RESTful APIs and implemented frontend functionality using jQuery and AJAX</li>
                  <li>• Gained experience in full-stack development</li>
                </ul>
              </div>

              <div className="mb-3">
                <h5 className="fw-bold">Internship</h5>
                <p className="text-muted mb-2">Code Alpha | 1 Month</p>
                <ul className="list-unstyled ms-3">
                  <li>• Gained hands-on experience in HTML, CSS, JavaScript, REST APIs</li>
                  <li>• Implemented token-based authentication</li>
                  <li>• Worked on database management</li>
                </ul>
              </div>
            </motion.div>

            {/* Technical Skills */}
            <motion.div
              className="mb-4 p-3"
              style={{ backgroundColor: "rgba(255, 255, 255, 0.8)", borderRadius: "10px" }}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
            >
              <h3 className="fw-bold mb-3">Technical Skills</h3>
              <div className="mb-2">
                <strong>Backend:</strong> PHP, Laravel, MySQL, REST APIs
              </div>
              <div className="mb-2">
                <strong>Frontend:</strong> HTML5, CSS3, Bootstrap, JavaScript, jQuery, AJAX, Blade Templates
              </div>
              <div className="mb-2">
                <strong>Tools:</strong> Git, GitHub, Stripe Payment Gateway, Laravel Mail, Queued Jobs
              </div>
              <div>
                <strong>Authentication:</strong> Session-based, Token-based
              </div>
            </motion.div>
          </div>

          {/* Right Column */}
          <div className="col-md-6">
            {/* Projects */}
            <motion.div
              className="mb-4 p-3"
              style={{ backgroundColor: "rgba(255, 255, 255, 0.8)", borderRadius: "10px" }}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <h3 className="fw-bold mb-3">Projects</h3>
              
              <div className="mb-3">
                <h5 className="fw-bold">EzyPlano Platform</h5>
                <p className="text-muted mb-2">Project Management Platform</p>
                <ul className="list-unstyled ms-3">
                  <li>• Built secure login and user role management, ensuring proper access control and data separation</li>
                  <li>• Developed and maintained 150+ backend APIs using Laravel for core project management features</li>
                  <li>• Designed and implemented dashboard UI and backend logic to present project, schedule, and resource summaries</li>
                  <li>• Applied data filters on multiple modules using AJAX, dynamically updating content without page refresh</li>
                  <li>• Worked on AI-powered chatbot integration to assist users across the platform</li>
                </ul>
              </div>

              <div className="mb-3">
                <h5 className="fw-bold">Task Management System</h5>
                <p className="text-muted mb-2">Role-based Task Management</p>
                <ul className="list-unstyled ms-3">
                  <li>• Developed a role-based Task Management System using Laravel with session-based authentication for Admin and Employee roles</li>
                  <li>• Implemented CRUD operations for users, tasks, projects, and task assignments</li>
                  <li>• Built attendance and leave management modules with approval workflows</li>
                  <li>• Integrated email notifications for task updates and leave status using Laravel Mail and Notifications</li>
                  <li>• Used queued jobs for sending emails and handling background tasks efficiently</li>
                </ul>
              </div>

              <div className="mb-3">
                <h5 className="fw-bold">Online Shopping E-commerce Project</h5>
                <p className="text-muted mb-2">E-commerce Platform</p>
                <ul className="list-unstyled ms-3">
                  <li>• Developed an online shopping platform where users can browse and purchase clothes, shoes, and accessories</li>
                  <li>• Implemented user authentication (login, registration, logout) with profile management, photo upload, and personal details editing</li>
                  <li>• Enabled product search, wishlist, reviews, and comments functionality for users</li>
                  <li>• Built admin panel for managing users, products, and orders efficiently</li>
                  <li>• Integrated Stripe payment gateway for secure online transactions</li>
                </ul>
              </div>
            </motion.div>

            {/* Education */}
            <motion.div
              className="mb-4 p-3"
              style={{ backgroundColor: "rgba(255, 255, 255, 0.8)", borderRadius: "10px" }}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
            >
              <h3 className="fw-bold mb-3">Education</h3>
              <div>
                <h5 className="fw-bold">Bachelor of Science in Computer Science</h5>
                <p className="text-muted mb-0">UMT (University of Management and Technology) | 2024</p>
              </div>
            </motion.div>

            {/* Certifications */}
            <motion.div
              className="mb-4 p-3"
              style={{ backgroundColor: "rgba(255, 255, 255, 0.8)", borderRadius: "10px" }}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
            >
              <h3 className="fw-bold mb-3">Certifications</h3>
              <div className="mb-2">
                <h5 className="fw-bold">From Udemy</h5>
                <a
                  href="https://www.udemy.com/certificate/UC-7fb717a0-0fdd-49e0-b761-08bbb1e4d7a4/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-decoration-none"
                >
                  Complete Web Development Bootcamp
                </a>
              </div>
              <div>
                <h5 className="fw-bold">From Coursera</h5>
                <a
                  href="https://www.coursera.org/account/accomplishments/verify/H8HFDTSK35SX?utm_source%3Dandroid%26utm_medium%3Dcertificate%26utm_content%3Dcert_image%26utm_campaign%3Dsharing_cta%26utm_product%3Dcourse"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-decoration-none"
                >
                  Scrimba Learn React
                </a>
              </div>
            </motion.div>

            {/* Language Skills */}
            <motion.div
              className="mb-4 p-3"
              style={{ backgroundColor: "rgba(255, 255, 255, 0.8)", borderRadius: "10px" }}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7 }}
            >
              <h3 className="fw-bold mb-3">Language Skills</h3>
              <div className="mb-2">English: Intermediate</div>
              <div>Urdu: Fluent</div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </>
  );
}

export default Resume;
