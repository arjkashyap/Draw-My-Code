import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <h6 style={{ color: "white", textAlign: "center", fontSize: "1rem" }}>
        {" "}
        This Project is open for contribution @{" "}
        <a
          href="https://github.com/bing101/Draw-My-Code"
          className="link"
          target="__blank"
        >
          {" "}
          Github.com/bing101
        </a>
      </h6>
    </div>
  );
};

export default Footer;
