import React from "react";

const FilterInput = (props) => {
  return (
    <div className="container">
      <div className="row title">
        <h2>Filter</h2>
      </div>
      <div className="row selction">
        <div className="col-sm-4">
          <label for="country">Country</label>
          <input type="checkbox" id="country" name="country" value="country" />
        </div>
      </div>
      <button onClick={props.setState}>Submit</button>
    </div>
  );
};

export default FilterInput;
