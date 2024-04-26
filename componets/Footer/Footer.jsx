import React from "react";
import { FaFacebookSquare } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { IoLogoInstagram } from "react-icons/io";

function Footer() {
  return (
    <footer className="text-center bg-body-tertiary">
      <div className="container pt-4">
        <section className="mb-4">
          <a
            className="btn btn-link btn-floating btn-lg text-body m-1"
            href="https://www.facebook.com/"
            role="button"
          >
            <FaFacebookSquare />
          </a>

          <a
            className="btn btn-link btn-floating btn-lg text-body m-1"
            href="https://www.google.com/"
            role="button"
          >
            <FcGoogle />
          </a>

          <a
            className="btn btn-link btn-floating btn-lg text-body m-1"
            href="https://www.instagram.com/"
            role="button"
          >
            <IoLogoInstagram />
          </a>

          <a
            className="btn btn-link btn-floating btn-lg text-body m-1"
            href="https://www.linkedin.com/in/muhammad-ashan-bhatti-83271b204?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app "
            role="button"
          >
            <FaLinkedinIn />
          </a>

          <a
            className="btn btn-link btn-floating btn-lg text-body m-1"
            href="https://github.com/"
            role="button"
          >
            <FaGithub />
          </a>
        </section>
      </div>

      <div
        className="text-center p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
      >
        © 2024 copyRight
      </div>
    </footer>
  );
}

export default Footer;
