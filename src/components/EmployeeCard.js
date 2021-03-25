import React from "react";

const EmployeeCard = (props) => {
  return (
    <div className="container">
      <div className="row">
        {props.results.map((result) => {
          console.log(result.results[0].name.first);
          <div className="col-sm-3">
            <div className="card" style={{ width: "325px" }}>
              <img
                src={result.results[0].picture.thumbnail}
                className="card-img-top"
              />
              <div className="card-body">
                <h3>{result.results[0].name.first}</h3>
              </div>
            </div>
          </div>;
        })}
      </div>
    </div>
  );
};

export default EmployeeCard;
