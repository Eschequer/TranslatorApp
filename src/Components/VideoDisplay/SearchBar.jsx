import React from "react";

export default class SearchBar extends React.Component {
  state = { term: "" };

  handleInputChange = (event) => {
    this.setState({ term: event.target.value });
  };

  handleFormSubmit = (e) => {
    e.preventDefault();

    this.props.onTermSubmit(this.state.term);
  };

  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.handleFormSubmit}>
          <div className="field">
            <label htmlFor="searchBar">Video Search</label>
            <input
              type="text"
              name="first-name"
              id="searchBar"
              value={this.state.term}
              onChange={this.handleInputChange}
            />
          </div>
        </form>
      </div>
    );
  }
}
