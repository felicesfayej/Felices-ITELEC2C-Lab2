// Card.js
import React from "react";
import memoClass from "./memoClass";

export function Card(props) {
  const memoClassName = memoClass(props.postObj.memo); // conditional rendering lab activity 3

  return (
    <div className="card" id="post-card">
      <div className={"card__header " + memoClassName}>
        <p className="card__header__title">Receipt no.</p>
        <p className="card__header__number">{props.postObj.number}</p>
      </div>

      <div className="card__body" id="card">
        <p className="body__username">{props.postObj.username}</p>
        <p className="body__message">{props.postObj.message}</p>
      </div>
    </div>
  );
}
