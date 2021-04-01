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
  const [nameSearch, setNameSearch] = useState("");

  useEffect(() => {
    getRandomUser();
    // setArray(result);
  }, []);

  useEffect(() => {
    setArray(result);
  }, [result]);

  const getRandomUser = () => {
    API.search().then((res) => {
      setResult(res.data.results);
    });
  };

  const sortByFirstName = (myArray) => {
    console.log("Sorting first!");
    console.log(myArray);

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

  const sortByLastName = (myArray) => {
    console.log(myArray);
    for (let i = 1; i < myArray.length; i++) {
      let key = myArray[i];
      let j = i - 1;

      while (j >= 0 && myArray[j].name.last > key.name.last) {
        myArray[j + 1] = myArray[j];
        j--;
      }
      myArray[j + 1] = key;
    }
    return myArray;
  };

  const sortUsers = (event) => {
    event.preventDefault();
    console.log(event.target.name);
    if (event.target.name === "first") {
      setArray(sortByFirstName(result));
      console.log("done sorting!");
    } else {
      setArray(sortByLastName(result));
    }
  };

  const handleInputChange = (event) => {
    console.log(event.target.name);
    event.preventDefault();
    if (event.target.name === "country") {
      setCountry(event.target.value);
    } else if (event.target.name === "username") {
      setUsername(event.target.value);
    } else if (event.target.name === "email") {
      setEmail(event.target.value);
    } else if (event.target.name === "name") {
      setNameSearch(event.target.value);
    }
  };

  useEffect(() => {
    setArray(
      result.filter((user) => {
        if (nameSearch !== "") {
          return user.name.first.includes(nameSearch);
        } else {
          return user;
        }
      })
    );
  }, [nameSearch]);

  useEffect(() => {
    setArray(
      result.filter((user) => {
        if (filterCountry !== "") {
          return user.location.country.includes(filterCountry);
        } else {
          return user;
        }
      })
    );
  }, [filterCountry]);

  useEffect(() => {
    setArray(
      result.filter((user) => {
        if (filterUsername !== "") {
          return user.login.username.includes(filterUsername);
        } else {
          return user;
        }
      })
    );
  }, [filterUsername]);

  useEffect(() => {
    setArray(
      result.filter((user) => {
        if (filterEmail !== "") {
          return user.email.includes(filterEmail);
        } else {
          return user;
        }
      })
    );
  }, [filterEmail]);

  return (
    <div className="App">
      <header className="App-header">
        <NavBar handleInputChange={handleInputChange} />
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
          result={currentUserArray}
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
