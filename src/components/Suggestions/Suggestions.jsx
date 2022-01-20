import React from "react";

function Suggestions(props) {
  return (
    <div>
      <h1>Je suis une suggestion</h1>
      <h2>{props.product}</h2>
      <p>Prix : {props.prix}€</p>
    </div>
  );
}

export default Suggestions;
