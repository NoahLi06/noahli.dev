import React from "react";

const Projects: React.FC = () => {
  return (
    <div className="output-component">
      <ul>
        <li>
          <a href="https://noahli06.github.io/Pokoupon/" target="_blank">
            Pokoupon
          </a>
          &nbsp;- an app that can help you find coupons and cash-back offers
          based on which stores you shop at
        </li>
        <li>
          <a href="https://search.bep.carterschool.gmu.edu/" target="_blank">
            Better Evidence Project
          </a>
          &nbsp;- a research database and search engine for historical files for
          George Mason University
        </li>
        <li>
          <a href="https://noahli06.github.io/dunlaptennis/" target="_blank">
            Dunlap Tennis
          </a>
          &nbsp;- website for my high school tennis team a long long time ago
        </li>
      </ul>
    </div>
  );
};

export default Projects;
