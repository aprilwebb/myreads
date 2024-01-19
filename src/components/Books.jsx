import { useState } from "react";
import Search from "./Search";
import BookList from "./BookList";

function Books() {
  const [books, setBooks] = useState([]);

  return (
    <div>
      <Search setBooks={setBooks} />
      <BookList books={books} />
    </div>
  );
}

export default Books;
