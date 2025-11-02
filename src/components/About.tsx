import React from "react";

const About: React.FC = () => {
  return (
    <div className="output-component">
      <p>
        hey, I'm Noah. I'm a junior @{" "}
        <a
          href="https://www.wisc.edu/"
          target="_blank"
          rel="noopener noreferrer"
        >
          University of Wisconsin-Madison
        </a>
        &nbsp;studying a double major in computer science & data science.
      </p>
      <p>
        I'm passionate about building apps and using data to optimize user
        experience. My skills include:
      </p>
      <ul>
        <li>- Python</li>
        <li>- Frontend (HTML/CSS, react)</li>
        <li>
          - Data Structures & Algorithms (
          <a
            href="https://www.reddit.com/r/UWMadison/comments/18t7mby/cs577/"
            target="_blank"
          >
            CS 577
          </a>{" "}
          is very very fun)
        </li>
        <li>- Data Science</li>
      </ul>
      <p>
        I'm currently an Engineering Intern at{" "}
        <a
          href="https://www.caterpillar.com/en.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          Caterpillar
        </a>
        !
      </p>
    </div>
  );
};

export default About;
