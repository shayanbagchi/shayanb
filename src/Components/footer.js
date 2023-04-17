import React from "react";
import "../css/styles.css";

const Footer = () => {
  return (
    <footer>
      <div className="row footer-main">
        <div className="col-twelve tab-full left footer-desc">
          {/*<div className="footer-logo"></div>*/}
          All rights reserved. The content, and the ShayanB logo is protected
          and cannot be reused without prior permission. Cheers!
        </div>
      </div>
      <div className="row footer-bottom">
        <div className="col-twelve">
          <div className="copyright">
            {" "}
            <span>© Copyright 2021</span>
          </div>
          <div className="go-top">
            {" "}
            <a className="smoothscroll" title="Back to Top" href="#top">
              <i className="icon-arrow-up" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
