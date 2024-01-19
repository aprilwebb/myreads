import React from "react";

function BookCard(props) {
  return (
    <div className="card-container">
      <img src={props.image} alt={props.title} />
      <div className="details">
        <h2>{props.title}</h2>
        <h3>{props.author}</h3>
        <p>{props.publishedDate}</p>
      </div>
    </div>
  );
}

export default BookCard;
