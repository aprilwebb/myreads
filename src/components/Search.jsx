import React, { useState } from "react";
import request from "superagent";

function Search({ setBooks, setSort }) {
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
        const cleanData = handleData(data);
        setBooks(cleanData);
      });
  }

  function handleSort(event) {
    setSort(event.target.value);
  }

  function handleData(data) {
    const cleanData = data.body.items.map((book) => {
      if (!book.volumeInfo.hasOwnProperty("publishedDate")) {
        book.volumeInfo["publishedDate"] = "0000";
      } else if (!book.volumeInfo.hasOwnProperty("imageLinks")) {
        book.volumeInfo["imageLinks"] = {
          thumbnail:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1200px-No_image_available.svg.png",
        };
      } else if (
        book.volumeInfo.hasOwnProperty("authors") &&
        book.volumeInfo.authors.length > 0
      ) {
        book.volumeInfo.authors = book.volumeInfo.authors.join(", ");
      }
      return book;
    });
    return cleanData;
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
        <select id="sort" defaultValue="Sort" onChange={handleSort}>
          <option disabled value="Sort">
            Sort
          </option>
          <option value="Newest">Newest</option>
          <option value="Oldest">Oldest</option>
        </select>
      </form>
    </div>
  );
}

export default Search;
