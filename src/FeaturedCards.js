import React from "react";
import memoClass from "./memoClass";

export function FeaturedCards(props) {
  const memoClassName = memoClass(props.featObj.memo); // conditional rendering lab activity 3

  return (
    <div className="card" id="post-card">
      <div className={"card__header " + memoClassName}>
        <p className="card__header__title">Receipt no.</p>
        <p className="card__header__number">{props.featObj.number}</p>
      </div>

      <div className="card__body" id="card">
        <p className="body__username">{props.featObj.username}</p>
        <p className="body__message">{props.featObj.message}</p>
      </div>
    </div>
  );
}
