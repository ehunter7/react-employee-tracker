import React from "react";

const EmployeeCard = (props) => {
  return (
    <div className="container">
      <div className="row">
        {props.results.map((result) => {
          <div className="col-sm-3">
            <div className="card listOfBeers" style={{ width: "325px" }}>
              <img src="" className="card-img-top" />
              <div className="card-body"></div>
            </div>
          </div>;
        })}
      </div>
    </div>
  );
};

export default EmployeeCard;
