import React, { Component } from "react";
import API from "../API";
import EmployeeCard from "./EmployeeCard";
import FilterSearch from "./FilterSearch";

export class ResultsContainer extends Component {
  state = {
    result: [],
  };

  componentDidMount() {
    //*Do this once page loads, or MOUNTS
  }

  RandomUser = (query) => {
    API.search(query).then((res) => this.setState({ result: res.data.data }));
  };

  handleInputChange = (event) => {
    //? Still deciding what to do
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    //! Filter results go here to send to API
  };

  render() {
    return (
      <div>
        <FilterSearch />
        <EmployeeCard />
      </div>
    );
  }
}

export default ResultsContainer;
