import React, { useState, useEffect } from "react";
import NavBar from "./components/NavBar";
import ResultsContainer from "./components/ResultsContainer";
import FilterSearch from "./components/FilterSearch";
import FilterInput from "./components/FilterInput";
import SortInput from "./components/SortInput";
import "../src/components/EmployeeCard.css";

function App() {
  const [filter, setFilter] = useState(false);
  const [sort, setSort] = useState(false);
  const [filterCountry, setCountry] = useState("");

  useEffect(() => {
    console.log("Lets Go!");
  }, []);

  const handleInputChange = (event) => {
    console.log(event.target.value);
    setCountry(event.target.value);
  };

  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        <FilterSearch
          setFilter={() => {
            filter ? setFilter(false) : setFilter(true);
          }}
          setSort={() => {
            sort ? setSort(false) : setSort(true);
          }}
        />

        {filter ? (
          <FilterInput
            setState={() => setFilter(false)}
            handleInputChange={handleInputChange}
            result={filterCountry}
          />
        ) : null}
        {sort ? <SortInput setState={() => setSort(false)} /> : null}

        <ResultsContainer country={filterCountry} />
      </header>
    </div>
  );
}

export default App;
