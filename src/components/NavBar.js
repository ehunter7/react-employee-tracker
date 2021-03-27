import React from "react";
import "./EmployeeCard.css";

const NavBar = () => {
  return (
    <div>
      <nav className="navbar navbar-light ">
        <div className="container-fluid">
          <a className="navbar-brand  text-light navText">
            React-Employee-Tracker
          </a>
          <form className="d-flex">
            <input
              className="form-control me-2 "
              id="search"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn" id="navBtn" type="submit">
              Search
            </button>
          </form>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
