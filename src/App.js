import React, { useState, useEffect } from "react";
import NavBar from "./components/NavBar";
import ResultsContainer from "./components/ResultsContainer";
import FilterSearch from "./components/FilterSearch";
import FilterInput from "./components/FilterInput";

function App() {
  const [filter, setFilter] = useState(false);
  const [sort, setSort] = useState(false);

  useEffect(() => {
    console.log("Lets Go!");
  });

  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        <FilterSearch onClick={() => setFilter(true)} />
        {filter ? <FilterInput setState={() => setFilter(false)} /> : null}
        <ResultsContainer />
      </header>
    </div>
  );
}

export default App;
