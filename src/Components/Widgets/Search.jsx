import React, { useState, useEffect } from "react";
import wikipedia from "../../api/wikipedia";

function Search() {
  const [term, setTerm] = useState("cats");

  const [results, setResults] = useState([]);

  const handleInputSearch = (event) => setTerm(event.target.value);

  useEffect(() => {
    let timer = null;
    const search = async () => {
      try {
        const { data } = await wikipedia.get("", {
          params: { srsearch: term },
        });

        setResults(data.query.search);
      } catch (e) {
        console.dir(e.message);
      }
    };
    /*
    setTimeout(() => {
      console.log("setTimeout");
      if (term) search();
    }, 5000);*/

    if (term) {
      timer = setTimeout(search, 3000);
    }

    return () => {
      clearTimeout(timer);
    };
  }, [term]);

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
