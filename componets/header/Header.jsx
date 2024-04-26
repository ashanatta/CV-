import React from "react";
import { Link } from "react-router-dom";
import "../../assets/style/style.css";
function Header() {
  return (
    <>
      <header className="bg-dark p-2 ">
        <div class="container headering">
          <div class="d-flex align-items-center ">
            <a href="/" class=" mb-2 mb-lg-0 text-white text-decoration-none ">
              <svg
                class="bi me-2"
                width="40"
                height="32"
                role="img"
                aria-label="Bootstrap"
              >
                <use xlink:href="#bootstrap" />
              </svg>
            </a>

            <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 mb-md-0 ">
              <li>
                <Link to="/" class="nav-link px-2 text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/skils" class="nav-link px-2 text-white">
                  Skills
                </Link>
              </li>
              <li>
                <Link to="/resume" class="nav-link px-2 text-white">
                  Resume
                </Link>
              </li>
              <li>
                <Link to="/portfolio" class="nav-link px-2 text-white">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="/about" class="nav-link px-2 text-white">
                  About
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
