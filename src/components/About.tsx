import React from "react";

const About: React.FC = () => {
  return (
    <div className="output-component">
      <p>
        Hi, I'm Noah. I'm a junior @{" "}
        <a
          href="https://www.wisc.edu/"
          target="_blank"
          rel="noopener noreferrer"
        >
          University of Wisconsin-Madison
        </a>
        .
      </p>
      <p>
        I'm passionate about building clean, efficient, and user-friendly web
        applications. My skills include:
      </p>
      <ul>
        <li>- Python</li>
        <li>- React(this website is being coded using this btw)</li>
        <li>- eating out</li>
        <li>- watching FC Barcelona & cat videos</li>
      </ul>
    </div>
  );
};

export default About;
