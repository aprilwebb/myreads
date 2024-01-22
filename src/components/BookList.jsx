import React from "react";
import BookCard from "./BookCard";

/* Mapping thru books received in API call & rendering them as BookCard component below. */

function BookList(props) {
  return (
    <div className="list">
      {props.books.map((book, index) => {
        return (
          <BookCard
            key={index}
            image={book.volumeInfo.imageLinks.thumbnail}
            title={book.volumeInfo.title}
            author={book.volumeInfo.authors}
            publishedDate={book.volumeInfo.publishedDate}
          />
        );
      })}
    </div>
  );
}

export default BookList;
