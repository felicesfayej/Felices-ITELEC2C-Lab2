import React from "react";

export function Card(props) {
  return (
    <div className="card" id="post-card">
      <div className={"card__header " + props.postObj.memo}>
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
