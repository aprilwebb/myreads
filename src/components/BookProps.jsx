import React from "react";
import Card from "./Card";

/* Mapping thru books received in API call & rendering them as BookCard component below. */

function BookProps(props) {
  return (
    <div className="list">
      {props.books.map((book, index) => {
        return (
          <Card
            key={index}
            image={book.volumeInfo.imageLinks.thumbnail}
            title={book.volumeInfo.title}
            author={book.volumeInfo.authors}
            publishedDate={book.volumeInfo.publishedDate}
            description={book.volumeInfo.description}
            pages={book.volumeInfo.pageCount}
            publisher={book.volumeInfo.publisher}
          />
        );
      })}
    </div>
  );
}

export default BookProps;
