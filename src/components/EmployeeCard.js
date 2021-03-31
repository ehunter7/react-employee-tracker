import React, { useState, useEffect } from "react";
import IndividualCard from "./IndividualCard";

const EmployeeCard = ({ results }) => {
  return (
    <div className="container">
      {results.map((result) => {
        return (
          <IndividualCard
            key={result.email}
            image={result.picture.large}
            firstName={result.name.first}
            lastName={result.name.last}
            username={result.login.username}
            email={result.email}
            state={result.location.state}
            city={result.location.city}
            country={result.location.country}
          />
        );
      })}
    </div>
  );
};

export default EmployeeCard;
