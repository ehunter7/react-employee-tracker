import React from "react";
import "./EmployeeCard.css";

const SortInput = ({ sort, first, last }) => {
  return (
    <div className="container  filter">
      <div className="row title">
        <div className="col-12 ">
          <h2>Sort Alphabetically</h2>
        </div>
      </div>
      <div className="row selction">
        <div className="col-sm-4">
          <button name="first" onClick={sort}>
            First
          </button>
        </div>
        <div className="col-sm-4">
          <label for="last" className="filter-text">
            Last Name
          </label>
          <input
            className="filter-input"
            type="checkbox"
            id="username"
            name="username"
            placeholder="Enter a username"
            value={last}
          />
        </div>
      </div>
    </div>
  );
};

export default SortInput;
