import React, { Component } from "react";
import API from "../API";
import EmployeeCard from "./EmployeeCard";
import FilterSearch from "./FilterSearch";

export class ResultsContainer extends Component {
  state = {
    result: [],
  };

  componentDidMount() {
    for (let i = 0; i < 3; i++) {
      this.getRandomUser();
    }
  }

  getRandomUser = async () => {
    API.search().then((res) => {
      console.log(this.state.result);

      this.setState({ result: this.state.result.concat(res.data) });
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
