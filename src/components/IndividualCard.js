import React from "react";
import "./EmployeeCard.css";
const IndividualCard = (props) => {
  return (
    <div className="row EmpCard">
      <div className="col-sm-3 ImgDiv" style={{ marginLeft: "10px" }}>
        <img src={props.image} className="EmpImage" />
      </div>
      <div className="col-sm-4 EmpName" style={{ marginTop: "2em" }}>
        <h3>
          {props.firstName} {props.lastName}
        </h3>
        <p>
          <strong>Email: </strong>
          {props.email}
        </p>
      </div>
      <div className="col-sm-3" style={{ marginTop: "1em" }}>
        <p>
          <strong>Username: </strong>
          {props.username}
        </p>
        <p>
          <strong>City: </strong>
          {props.city}
        </p>
        <p>
          <strong>State: </strong>
          {props.state}, {props.country}
        </p>
      </div>
    </div>
  );
};

export default IndividualCard;
