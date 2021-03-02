import React, { useState, useEffect } from "react";
import wikipedia from "../../api/wikipedia";

function Search() {
  console.log("Component");
  const [term, setTerm] = useState("cat");
  const [debouncedTerm, setDebouncedTerm] = useState(term);

  const [results, setResults] = useState([]);

  const handleInputSearch = (event) => {
    setTerm(event.target.value);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedTerm(term);
    }, 2000);

    return () => clearTimeout(timer);
  }, [term]);

  useEffect(() => {
    if (debouncedTerm) {
      (async () => {
        try {
          const { data } = await wikipedia.get("", {
            params: { srsearch: debouncedTerm },
          });

          setResults(data.query.search);
        } catch (e) {
          console.dir(e.message);
        }
      })();
    }
  }, [debouncedTerm]);

  const renderedResults = results.map((result) => {
    return (
      <div className="item" key={result["pageid"]}>
        <div className="content">
          <button type="button" className="ui right floated small button">
            <a href={`https://en.wikipedia.org?curid=${result["pageid"]}`}>
              Go
            </a>
          </button>
          <div className="header">{result.title}</div>
          <div className="description">
            <span dangerouslySetInnerHTML={{ __html: result["snippet"] }} />
          </div>
        </div>
      </div>
    );
  });

  return (
    <div>
      <form className="ui form" onSubmit={(e) => e.preventDefault()}>
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
      <div className="ui celled list">{renderedResults}</div>
    </div>
  );
}

export default Search;
