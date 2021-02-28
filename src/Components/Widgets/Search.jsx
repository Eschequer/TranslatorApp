import React, { useState } from "react";

function Search() {
  const [term, setTerm] = useState("");

  const handleInputSearch = (event) => setTerm(event.target.value);

  return (
    <form className="ui form">
      <div className="field">
        <label>Enter Search Term</label>
        <input
          type="search"
          name="searchBar"
          placeholder="Search"
          value={term}
          onChange={handleInputSearch}
        />
      </div>
    </form>
  );
}

export default Search;
