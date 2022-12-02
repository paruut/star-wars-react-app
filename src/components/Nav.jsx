import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <p>Patryk Rutkowski</p>
      <NavLink to="/form">
        <button className="register-btn">
          <span>formularz rejestracyjny</span>
        </button>
      </NavLink>
    </nav>
  );
};

export default Nav;
