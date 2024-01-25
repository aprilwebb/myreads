import React, { useState } from "react";

function Card(props) {
  const [modal, setModal] = useState(false);

  function displayDescription() {
    setModal(true);
  }

  function hideDescription() {
    setModal(false);
  }

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
        <button onClick={displayDescription}>More details</button>
        <div className={`modal ${modal ? "visible" : " "}`}>
          <img id="modal-img" src={props.image} alt={props.title} />
          <div className="modal-details">
            <h2>{props.title}</h2>
            <h3>Author: {props.author}</h3>
            <h3>Book Description:</h3>
            <p> {props.description}</p>

            <p>
              Publisher: {props.publisher ? props.publisher : "Not available"}
            </p>
            <p>Page Count: {props.pages ? props.pages : "Not available"}</p>
            <button id="modal-button" onClick={hideDescription}>
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
