import React, { useState, useEffect } from "react";
import {
  FaLinkedinIn,
  FaGithub,
  FaFacebookF,
  FaInstagram,
} from "react-icons/fa";
import "./navbar.styles.css";
import Logo from "../../Logo.png";

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const [isTop, setIsTop] = useState(true);

  const toggleMenu = () => {
    setVisible(!visible);
  };

  useEffect(() => {
    const handleScroll = () => {
      const top = window.scrollY < 900;
      if (top !== isTop) {
        setIsTop(top);
      }
    };

    document.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, [isTop]);

  return (
    <header className={visible ? "s-header menu-is-open" : "s-header"}>
      <div className="header-logo">
        <a className="site-logo" href="#home">
          <img src={Logo} alt="" style={{ width: "80%" }} />
        </a>
      </div>
      <nav className="header-nav">
        <a
          href="#0"
          className="header-nav__close"
          title="close"
          onClick={toggleMenu}
        >
          <span>Close</span>
        </a>
        <div className="header-nav__content">
          <h3>Navigation</h3>
          <ul className="header-nav__list">
            <li className="current">
              <a className="smoothscroll" href="#home" title="home">
                Home
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#about" title="about">
                About
              </a>
            </li>
            {/* <li><a className="smoothscroll" href="#services" title="services">Services</a></li> */}
            <li>
              <a className="smoothscroll" href="#projects" title="projects">
                Projects
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#contact" title="contact">
                Contact
              </a>
            </li>
          </ul>
          <p>
            {" "}
            Copy-and-Paste was programmed by{" "}
            <a
              href="#0"
              className="thumb-link"
              title="Programmer: A machine that turns coffee into code."
            >
              {" "}
              programmers{" "}
            </a>{" "}
            for programmers actually.{" "}
          </p>
          <ul className="header-nav__social">
            <li>
              {" "}
              <a
                href="https://www.linkedin.com/in/shayan-bagchi-787a6715a/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li>
              {" "}
              <a
                href="https://github.com/shayanbagchi"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub />
              </a>
            </li>
            <li>
              {" "}
              <a
                href="https://www.facebook.com/shayan.bagchi/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebookF />
              </a>
            </li>
            <li>
              {" "}
              <a
                href="https://www.instagram.com/shayan_bagchi/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram />
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <a
        className={isTop ? "header-menu-toggle" : "header-menu-toggle opaque"}
        onClick={toggleMenu}
        href="#0"
      >
        <span className="header-menu-text">Menu</span>
        <span className="header-menu-icon"></span>
      </a>
    </header>
  );
};

export default Navbar;
