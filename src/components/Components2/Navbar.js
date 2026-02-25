import React from "react";
import { Link } from "react-router-dom";

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

            {/* Dropdown */}
            <li className="nav-item dropdown fs-4">
              <button
                className="nav-link dropdown-toggle btn btn-link"
                id="navbarDropdownMenuLink"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                type="button"
              >
                More
              </button>

              <ul
                className="dropdown-menu fs-4"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <li>
                  <Link to="/CalorieCounter" className="dropdown-item">
                    CalorieCounter
                  </Link>
                </li>

                <li>
                  <Link to="/BMICalculator" className="dropdown-item">
                    BMICalculator
                  </Link>
                </li>

                <li>
                  <Link to="/MealPlanner" className="dropdown-item">
                    Meal Planner
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