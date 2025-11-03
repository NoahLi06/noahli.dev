import React from "react";

const Projects: React.FC = () => {
  return (
    <div className="output-component">
      <ul>
        <li>
          <a href="https://noahli06.github.io/Pokoupon/" target="_blank">
            Pokoupon
          </a>
          &nbsp;- An app that can help you find coupons and cash-back offers
          based on which stores you shop at
        </li>
        <li>
          <a href="https://search.bep.carterschool.gmu.edu/" target="_blank">
            Better Evidence Project
          </a>
          &nbsp;- A research database and search engine for education research
          for George Mason University
        </li>
        <li>
          <a href="https://noahli06.github.io/dunlaptennis/" target="_blank">
            Dunlap Tennis
          </a>
          &nbsp;- Website for my high school tennis team
        </li>
      </ul>
    </div>
  );
};

export default Projects;
