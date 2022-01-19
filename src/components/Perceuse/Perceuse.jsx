import React from "react";

function Perceuse(props) {
  return (
    <div>
      <h1>{props.product}</h1>
      <p>Prix : {props.prix}€</p>
    </div>
  );
}

export default Perceuse;
