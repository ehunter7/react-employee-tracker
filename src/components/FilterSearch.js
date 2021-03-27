import React from "react";
import FilterInput from "./FilterInput";
import "./FilterSearch.css";

const FilterSearch = (props) => {
  return (
    <div className="row">
      <span className="container col-2 btns">
        <button className="btn" id="filterSearchBtn" onClick={props.setFilter}>
          Filter
        </button>
      </span>
      <span className="container col-2 btns text-center">
        <button className="btn " id="filterSearchBtn" onClick={props.setSort}>
          Sort
        </button>
      </span>
    </div>
  );
};

export default FilterSearch;
