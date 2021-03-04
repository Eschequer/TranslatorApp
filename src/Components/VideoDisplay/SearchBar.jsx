import React, { useState } from "react";

function SearchBar({ onTermSubmit }) {
  const [term, setTerm] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();

    onTermSubmit(term);
  };

  return (
    <div className="ui segment">
      <form className="ui form" onSubmit={handleFormSubmit}>
        <div className="field">
          <label htmlFor="searchBar">Video Search</label>
          <input
            type="text"
            name="first-name"
            id="searchBar"
            value={term}
            onChange={(e) => setTerm(e.target.value)}
          />
        </div>
      </form>
    </div>
  );
}

export default SearchBar;
