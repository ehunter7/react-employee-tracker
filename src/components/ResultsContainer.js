import EmployeeCard from "./EmployeeCard";

const ResultsContainer = ({
  result,
  country,
  username,
  email,
  first,
  last,
}) => {
  return (
    <div>
      <EmployeeCard
        results={result}
        filterCountry={country}
        filterUsername={username}
        filterEmail={email}
        first={first}
        last={last}
      />
    </div>
  );
};

export default ResultsContainer;
