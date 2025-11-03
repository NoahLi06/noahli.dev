import React from "react";

const Help: React.FC = () => {
  return (
    <div className="output-component">
      {/* <p>noahli.dev</p> */}
      <p>select:</p>
      <ul>
        <li>
          <strong>help</strong> - shows this help message
        </li>
        <li>
          <strong>about</strong> - if you're curious
        </li>
        <li>
          <strong>projects</strong> - technically this is a project haha
        </li>
        <li>
          <strong>contact</strong> - if you want to reach out
        </li>
        <li>
          <strong>socials</strong> - if you want to stalk me
        </li>
        <li>
          <strong>github</strong> - my repos
        </li>
        <li>
          <strong>clear</strong> - clears the terminal screen
        </li>
      </ul>
    </div>
  );
};

export default Help;
