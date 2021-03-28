import EmployeeCard from "./EmployeeCard";

const ResultsContainer = ({ result, country }) => {
  return (
    <div>
      <EmployeeCard results={result} filterCountry={country} />
    </div>
  );
};

export default ResultsContainer;
