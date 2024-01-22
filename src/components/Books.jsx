import { useState } from "react";
import Search from "./Search";
import BookList from "./BookList";

function Books() {
  const [books, setBooks] = useState([]);
  const [sort, setSort] = useState("");

  const sortedBooks = books.sort((a, b) => {
    if (sort === "Newest") {
      return (
        parseInt(b.volumeInfo.publishedDate.substring(0, 4)) -
        parseInt(a.volumeInfo.publishedDate.substring(0, 4))
      );
    } else if (sort === "Oldest") {
      return (
        parseInt(a.volumeInfo.publishedDate.substring(0, 4)) -
        parseInt(b.volumeInfo.publishedDate.substring(0, 4))
      );
    }
    return 0;
  });

  return (
    <div>
      <Search setBooks={setBooks} setSort={setSort} />
      <BookList books={sortedBooks} />
    </div>
  );
}

export default Books;
