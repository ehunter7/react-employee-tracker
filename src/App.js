import React, { useState, useEffect } from "react";
import NavBar from "./components/NavBar";
import ResultsContainer from "./components/ResultsContainer";
import FilterSearch from "./components/FilterSearch";
import FilterInput from "./components/FilterInput";
import SortInput from "./components/SortInput";
import "../src/components/EmployeeCard.css";
import API from "./API";

function App() {
  const [result, setResult] = useState([]);
  const [filter, setFilter] = useState(false);
  const [sort, setSort] = useState(false);
  const [filterCountry, setCountry] = useState("");
  const [filterUsername, setUsername] = useState("");
  const [filterEmail, setEmail] = useState("");
  const [first, setFirst] = useState(false);
  const [last, setLast] = useState(false);
  const [currentUserArray, setArray] = useState([]);

  useEffect(() => {
    getRandomUser();
  }, []);

  const getRandomUser = () => {
    API.search().then((res) => {
      setResult(res.data.results);
    });
  };

  const sortFirst = (a, b) => {
    if (a.name.first > b.name.first) {
      return 1;
    } else if (b.name.first > a.name.first) {
      return -1;
    } else {
      return 0;
    }
  };

  const sortLast = (a, b) => {
    if (a.name.last > b.name.last) {
      return 1;
    } else if (b.name.last > a.name.last) {
      return -1;
    } else {
      return 0;
    }
  };

  const sortByName = (myArray, sign) => {
    console.log("in the mix!");
    for (let i = 1; i < myArray.length; i++) {
      let key = myArray[i];
      let j = i - 1;

      while (j >= 0 && myArray[j].name.first > key.name.first) {
        myArray[j + 1] = myArray[j];
        j--;
      }
      myArray[j + 1] = key;
    }
    return myArray;
  };

  const sortUsers = (event) => {
    console.log(event.target.name);
    setArray(sortByName(result, event.target.name));
  };

  const handleInputChange = (event) => {
    event.preventDefault();
    if (event.target.name === "country") {
      setCountry(event.target.value);
    } else if (event.target.name === "username") {
      setUsername(event.target.value);
    } else if (event.target.name === "email") {
      setEmail(event.target.value);
    }
  };

  // useEffect(() => {
  //   set;
  //   return () => {
  //     cleanup;
  //   };
  // }, [input]);

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
            handleInputChange={handleInputChange}
            country={filterCountry}
            username={filterUsername}
            email={filterEmail}
          />
        ) : null}
        {sort ? (
          <SortInput
            setState={() => setSort(false)}
            sort={sortUsers}
            first={first}
            last={last}
          />
        ) : null}

        <ResultsContainer
          result={result}
          country={filterCountry}
          username={filterUsername}
          email={filterEmail}
          first={first}
          last={last}
        />
      </header>
    </div>
  );
}

export default App;
