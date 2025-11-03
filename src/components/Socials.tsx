import React from "react";

const Socials: React.FC = () => {
  return (
    <div className="output-component">
      <p>you can find me on:</p>
      <ul>
        <li>
          <a
            href="https://www.linkedin.com/in/noahli06/"
            target="_blank"
            rel="noopener noreferrer"
          >
            linkedIn
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/noahs_li/"
            target="_blank"
            rel="noopener noreferrer"
          >
            instagram
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Socials;
