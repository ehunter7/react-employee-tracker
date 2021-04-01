import React from "react";
import "./EmployeeCard.css";

const FilterInput = ({ handleInputChange, country, username, email }) => {
  return (
    <div className="container  filter">
      <form>
        <div className="row title">
          <div className="col-12 text-light">
            <h2>Filter</h2>
          </div>
        </div>
        <div className="row selction">
          <div className="col-sm-4">
            <label for="country" className="filter-text">
              Country
            </label>
            <input
              className="filter-input"
              type="text"
              id="country"
              id="search"
              name="country"
              placeholder="Enter a Country"
              value={country}
              onChange={handleInputChange}
            />
          </div>
          <div className="col-sm-4">
            <label for="username" className="filter-text">
              Username
            </label>
            <input
              className="filter-input"
              type="text"
              id="username"
              id="search"
              name="username"
              placeholder="Enter a username"
              value={username}
              onChange={handleInputChange}
            />
          </div>
          <div className="col-sm-4">
            <label for="email" className="filter-text ">
              email
            </label>
            <input
              className="filter-input"
              type="text"
              id="email"
              id="search"
              name="email"
              placeholder="Enter a email"
              value={email}
              onChange={handleInputChange}
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default FilterInput;
