import React from "react";
import { Link } from "react-router-dom";
import { Stack } from "@mui/material";
//import Login from "../Login/Login";
import Individualexe from "../Individualexe/pages/Individual-Exe";
import Home from "../Home/Home";
import WpApp from "../MainExePage/App";
import BMICalculator from "./bmicalculator";
import CalorieCounter from "./CalorieCounter";
import MealPlanner from "./Mealplanner";

import Logo from "../../assets/images/Logo.png";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light-emphasis fs-4">
      <div className="container-fluid">
        <Link className="navbar-brand fs-4" to="/Home">
          FIT-PRO
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/Home" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/WpApp" className="nav-link">
                WpApp
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/Individualexe" className="nav-link">
                Individualexe
              </Link>
            </li>
            <li className="nav-item dropdown fs-4">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdownMenuLink"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                More
              </a>
              <ul
                className="dropdown-menu fs-4"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <li>
                  <Link to="/CalorieCounter" className="nav-link">
                    CalorieCounter
                  </Link>
                </li>
                <li>
                  <Link to="/BMICalculator" className="nav-link">
                    BMICalculator
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/MealPlanner">
                    Meal-Planner
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
