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
          <button name="first" className="btn" id="sortBtn" onClick={sort}>
            By First Name
          </button>
        </div>
        <div className="col-sm-4">
          <button name="last" className="btn" id="sortBtn" onClick={sort}>
            By Last Name
          </button>
        </div>
      </div>
    </div>
  );
};

export default SortInput;
