import React from "react";
import Typed from "react-typed";

const Header = () => {
  return (
    <div className="header-wraper">
      <div className="main-info">
        {/* <canvas></canvas> */}
        <h1>Keen interest in Web development</h1>
        <Typed
          className="typed-text"
          strings={[
            "Web Development",
            "Java Desktop Application Developmment",
            "Api Devlopment in Spring Boot",
          ]}
          typeSpeed={40}
          backSpeed={60}
          loop
        />
        <a href="#" className="btn-main-offer">
          contact me
        </a>
      </div>
    </div>
  );
};

export default Header;
