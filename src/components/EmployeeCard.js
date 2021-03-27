import React from "react";
import IndividualCard from "./IndividualCard";

const EmployeeCard = (props) => {
  return (
    <div className="container">
      {props.results.map((result) => {
        // console.log(result);
        return (
          <IndividualCard
            //? if i have a key here do i need one in the card as well
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
