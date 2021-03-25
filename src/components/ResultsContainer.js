import React, { Component } from "react";
import API from "../API";
import EmployeeCard from "./EmployeeCard";
import FilterSearch from "./FilterSearch";

export class ResultsContainer extends Component {
  state = {
    result: [],
  };

  componentDidMount() {
    this.getRandomUser();
  }

  getRandomUser = async () => {
    API.search().then((res) => {
      console.log(res.data);

      this.setState({ result: res });
    });
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
        <EmployeeCard results={this.state.result} />
      </div>
    );
  }
}

export default ResultsContainer;
