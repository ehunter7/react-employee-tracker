import React, { Component } from "react";
import API from "../API";
import EmployeeCard from "./EmployeeCard.js";

export class ResultsContainer extends Component {
  state = {
    //* Array which contains results from API calls
    result: [],
  };

  componentDidMount() {
    this.getRandomUser();
  }

  //TODO use async and await
  getRandomUser = () => {
    API.search().then((res) => {
      // console.log(res.data.results);
      this.setState({ result: this.state.result.concat(res.data.results) });
    });
  };

  handleInputChange = (event) => {
    //? Still deciding what to do
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    //! Filter & sort results
  };

  render() {
    // console.log(this.state);
    return (
      <div>
        <EmployeeCard results={this.state.result} />
      </div>
    );
  }
}

export default ResultsContainer;
