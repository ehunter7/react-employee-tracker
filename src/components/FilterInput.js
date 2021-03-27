import React from "react";
import "./EmployeeCard.css";

const FilterInput = (props) => {
  return (
    <div className="container  filter">
      <form>
        <div className="row title">
          <div className="col-12 ">
            <h2>Filter</h2>
          </div>
        </div>
        <div className="row selction">
          <div className="col-sm-4">
            <label for="country">Country</label>
            <input
              type="text"
              id="country"
              name="country"
              placeholder="Enter a Country"
              value={props.result}
              onChange={props.handleInputChange}
            />
          </div>

          <div calssName="col-sm-4">
            <button onClick={props.setState}>Close</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default FilterInput;
