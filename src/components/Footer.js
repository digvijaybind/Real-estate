import React from "react";
import twitter from "../assets/images/twitter.svg";
import insta from "../assets/images/Vector.svg";
import linkin from "../assets/images/Vector-1.svg";
import fab from "../assets/images/Vector-2.svg";

const Footer = (props) => {
  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="row align-items-center flex-wrap justify-content-center">
            <div className="col-auto soc-in">
              <a href="">
                <img src={twitter} />
              </a>
            </div>
            <div className="col-auto soc-in">
              <a href="">
                <img src={insta} />
              </a>
            </div>
            <div className="col-auto soc-in">
              <a href="">
                <img src={linkin} />
              </a>
            </div>
            <div className="col-auto soc-in">
              <a href="">
                <img src={fab} />
              </a>
            </div>
          </div>
        </div>
        <div className="p-copy">
          All rights reserved @ Blits estate 2020-2022
        </div>
      </footer>
    </>
  );
};

export default Footer;
