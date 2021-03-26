import React from "react";

const EmployeeCard = (props) => {
  return (
    <div className="container">
      {props.results.map((result) => {
        console.log(result);
        return (
          <div className="row" key={result.email}>
            <div className="col-sm-3" style={{ padding: "5px" }}>
              <img
                src={result.picture.large}
                className=""
                style={{ width: "95%" }}
              />
            </div>
            <div className="col-sm-8" style={{ padding: "5px" }}>
              <h3>{result.name.first}</h3>
            </div>
          </div>
        );
      })}
    </div>
  );
  // (
  //   <>
  //     {props.results.map((user) => {
  //       console.log(user.results[0].name.first);
  //       return (
  //         <div className="container">
  //           <h1>{user.results[0].name.first}</h1>
  //         </div>
  //       );
  //     })}
  //   </>
  // );
};

export default EmployeeCard;
