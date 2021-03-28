import React, { useState, useEffect } from "react";
import IndividualCard from "./IndividualCard";

const EmployeeCard = ({ results, filterCountry }) => {
  const [currentUserArray, setArray] = useState([]);

  useEffect(() => {
    setArray(
      results.filter((user) => {
        console.log(filterCountry);
        if (filterCountry !== "") {
          return user.location.country.includes(filterCountry);
        } else {
          return user;
        }
      })
    );
  }, [filterCountry]);

  return (
    <div className="container">
      {currentUserArray.map((result) => {
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
