import React, { useState } from "react";

function Search() {
  const [search, setSearch] = useState("");

  function handleSearch(event) {
    const searchField = event.target.value;
    setSearch(searchField);
  }
  return (
    <div className="search">
      <form action="">
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
