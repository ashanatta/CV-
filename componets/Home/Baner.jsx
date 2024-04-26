import React from "react";
import ashan from "../../assets/picture.jpg";

function Home() {
  return (
    <>
      <main>
        <div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light d-flex align-items-center justify-content-center">
          <div className="col-md-6 p-lg-5 text-left">
            <h1 className="display-4 fw-normal">Muhammad Ashan</h1>
            <p className="lead fw-normal">MERN Stack Developer</p>
          </div>
          <div className="col-md-6 d-flex align-items-center justify-content-center">
            <img
              className="rounded-circle"
              src={ashan}
              alt="ashanimg"
              width={200}
              height={200}
            />
          </div>
        </div>
      </main>
    </>
  );
}

export default Home;
