import React from "react";
import "./about.styles.css";

const About = () => {
  return (
    <section id="about" className="s-about">
      <div className="row section-header has-sep">
        <div className="col-four">
          <h1 className="display-1 display-1--light">About me.</h1>
        </div>
      </div>
      <div className="row about-desc">
        <div className="col-full">
          <p>
            {" "}
            I’m a full-stack web developer with 3+ years of experience. I have
            worked with clients across the globe to create high performance &
            rich interactive websites that work across all platforms & devices.
          </p>
          <p>
            I'm very familiar with technologies like React, Node.JS, Firebase,
            etc. I can also build hand-coded websites using HTML5, CSS3, &
            JavaScript. With a strong emphasis on "Performance and
            Responsiveness", I look for creative ways to push the boundaries.
          </p>
          <p>Here are the list of technologies I have worked with:</p>
          <ul className="skills-list">
            <li>JavaScript (ES6+)</li>
            <li>React</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>Node.js</li>
            <li>Firebase</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
