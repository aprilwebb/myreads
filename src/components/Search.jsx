import React, { useState } from "react";
import request from "superagent";

function Search({ setBooks }) {
  const [search, setSearch] = useState("");

  //   Sets the state to what user enters into search input
  function handleSearch(event) {
    setSearch(event.target.value);
  }

  //   Request to Google books API. Setting the state of books to the data response received.
  function searchBook(event) {
    event.preventDefault();
    request
      .get("https://www.googleapis.com/books/v1/volumes")
      .query({ q: search })
      .then((data) => {
        setBooks([...data.body.items]);
      });
  }

  return (
    <div className="search">
      <form onSubmit={searchBook} action="">
        <input
          name="search"
          onChange={handleSearch}
          placeholder="Enter a book name"
          type="text"
          value={search}
        ></input>
        <button type="submit">Search</button>
      </form>
    </div>
  );
}

export default Search;
