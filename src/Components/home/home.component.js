import React from "react";
import {
  FaLinkedinIn,
  FaGithub,
  FaFacebookF,
  FaInstagram,
} from "react-icons/fa";
import "./home.styles.css";
import Background from "../../images/hero-bg.webp";

const Home = () => {
  return (
    <section
      id="home"
      className="s-home target-section"
      style={{
        backgroundImage: `url(${Background})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="overlay"></div>
      <div className="shadow-overlay"></div>
      <div className="home-content">
        <div className="row home-content__main">
          <h3>WELCOME, MY NAME IS</h3>
          <h1>
            {" "}
            <span className="green"> Shayan Bagchi. </span> <br /> I build
            things for the internet.
          </h1>
          <p>
            I am a Full-stack web developer with industry-level experience{" "}
            <br /> building websites and web applications. I specialize in
            JavaScript. <br /> I have experience in React, Redux, Node.js, and
            Firebase.
          </p>
          <div className="home-content__buttons">
            {" "}
            <a href="#contact" className="smoothscroll btn btn--stroke">
              {" "}
              Start a Project{" "}
            </a>
          </div>
        </div>
      </div>
      <ul className="home-social">
        <li>
          {" "}
          <a
            href="https://www.linkedin.com/in/shayan-bagchi-787a6715a/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="icon">
              <FaLinkedinIn />
            </div>
            <span>Linkedin</span>
          </a>
        </li>
        <li>
          {" "}
          <a
            href="https://github.com/shayanbagchi"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="icon">
              <FaGithub />
            </div>
            <span>Github</span>
          </a>
        </li>
        <li>
          {" "}
          <a
            href="https://www.facebook.com/shayan.bagchi/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="icon">
              <FaFacebookF />
            </div>
            <span>Facebook</span>
          </a>
        </li>
        <li>
          {" "}
          <a
            href="https://www.instagram.com/shayan_bagchi/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="icon">
              <FaInstagram />
            </div>
            <span>Instagram</span>
          </a>
        </li>
      </ul>
    </section>
  );
};

export default Home;
