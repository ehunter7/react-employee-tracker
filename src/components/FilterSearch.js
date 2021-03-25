import React from "react";
import "./FilterSearch.css";

const FilterSearch = () => {
  return (
    <div className="row">
      <span className="col-6 btns">
        <button className="btn btn-outline-success">Filter</button>
      </span>
      <span className="col-6 btns">
        <button className="btn btn-outline-success">Search</button>
      </span>
    </div>
  );
};

export default FilterSearch;
