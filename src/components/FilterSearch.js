import React from "react";
import FilterInput from "./FilterInput";
import "./FilterSearch.css";

const FilterSearch = (props) => {
  return (
    <div className="row">
      <span className="col-6 btns">
        <button className="btn btn-outline-success" onClick={props.onClick}>
          Filter
        </button>
      </span>
      <span className="col-6 btns">
        <button className="btn btn-outline-success">Sort</button>
      </span>
    </div>
  );
};

export default FilterSearch;
