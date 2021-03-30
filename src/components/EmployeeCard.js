import React, { useState, useEffect } from "react";
import IndividualCard from "./IndividualCard";

const EmployeeCard = ({
  results,
  filterCountry,
  filterUsername,
  filterEmail,
  first,
  last,
}) => {
  // useEffect(() => {
  //   if (currentUserArray === []) {
  //     setArray(results);
  //   }
  // }, []);

  // const compareFirst = (a, b) => {
  //   const nameA = a.name.first.toUpperCase();
  //   const nameB = b.name.first.toUpperCase();

  //   let comparison = 0;
  //   if (nameA > nameB) {
  //     comparison = 1;
  //   } else if (nameA < nameB) {
  //     comparison = -1;
  //   }
  //   return comparison;
  // };

  // const compareLast = (a, b) => {
  //   const nameA = a.name.last.toUpperCase();
  //   const nameB = b.name.last.toUpperCase();

  //   let comparison = 0;
  //   if (nameA > nameB) {
  //     comparison = 1;
  //   } else if (nameA < nameB) {
  //     comparison = -1;
  //   }
  //   return comparison;
  // };

  // useEffect(() => {
  //   if (first) {
  //     setArray(currentUserArray.sort(compareFirst()));
  //   }
  // }, [first]);

  // useEffect(() => {
  //   if (last) {
  //     setArray(currentUserArray.sort(compareLast()));
  //   }
  // }, [last]);

  // useEffect(() => {
  //   setArray(
  //     results.filter((user) => {
  //       if (filterCountry !== "") {
  //         return user.location.country.includes(filterCountry);
  //       } else {
  //         return user;
  //       }
  //     })
  //   );
  // }, [filterCountry]);

  // useEffect(() => {
  //   setArray(
  //     results.filter((user) => {
  //       if (filterUsername !== "") {
  //         return user.login.username.includes(filterUsername);
  //       } else {
  //         return user;
  //       }
  //     })
  //   );
  // }, [filterUsername]);

  // useEffect(() => {
  //   setArray(
  //     results.filter((user) => {
  //       if (filterEmail !== "") {
  //         return user.email.includes(filterEmail);
  //       } else {
  //         return user;
  //       }
  //     })
  //   );
  // }, [filterEmail]);

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
