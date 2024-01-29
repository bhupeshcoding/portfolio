import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faFacebookF, faGoogle } from "@fortawesome/free-brands-svg-icons";
import {
  faDesktop,
  faFileCode,
  faPen,
  faEye,
} from "@fortawesome/free-solid-svg-icons";

const Services = () => {
  return (
    <div className="services">
      <h1 className="py-5">my services</h1>
      <div className="container">
        <div className="row">
          <div className="col-md-3 col-sm-6">
            <div className="box">
              <div className="circle">
                <FontAwesomeIcon className="icon" icon={faEye} size="2x" />
              </div>
              <h3>API Devlopment</h3>
              <p>
                I approach each project individually and always focus on the
                result,I work with team as well as depending upon requirement of
                project.
              </p>
            </div>
          </div>
          {/* - */}
          <div className="col-md-3 col-sm-6">
            <div className="box">
              <div className="circle">
                <FontAwesomeIcon className="icon" icon={faFileCode} size="2x" />
              </div>

              <h3>Web Development</h3>
              <p>Your website will be build with an new proven technologies.</p>
            </div>
          </div>
          {/* - */}
          <div className="col-md-3 col-sm-6">
            <div className="box">
              <div className="circle">
                <FontAwesomeIcon className="icon" icon={faDesktop} size="2x" />
              </div>

              <h3>Desktop Application Development</h3>
              <p>
                Your potential clients well see your services about Desktop
                Application Development
              </p>
            </div>
          </div>
          {/* - */}
          <div className="col-md-3 col-sm-6">
            <div className="box">
              <div className="circle">
                <FontAwesomeIcon className="icon" icon={faPen} />{" "}
                {/* Correct icon usage */}
              </div>
              <h3>React Development</h3>
              <p>Your service or product will get the speed of react</p>.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
