import React from "react";

function BookCard(props) {
  return (
    <div className="card-container">
      <img className="book-img" src={props.image} alt={props.title} />
      <div className="details">
        <h2>{props.title}</h2>
        <h3>Author: {props.author}</h3>
        <p>
          Year Published:{" "}
          {props.publishedDate === "0000"
            ? "Not available"
            : props.publishedDate.substring(0, 4)}
        </p>
      </div>
    </div>
  );
}

export default BookCard;
