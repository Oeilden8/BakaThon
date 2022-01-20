import React from "react";

function Perceuse({ perceuse }) {
  return (
    <div>
      <h1>Je suis un produit</h1>
      <h2>{perceuse.product}</h2>
      <p>Prix : {perceuse.prix}€</p>
    </div>
  );
}

export default Perceuse;
