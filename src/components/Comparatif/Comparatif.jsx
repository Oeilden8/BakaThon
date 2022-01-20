import React, { useContext } from "react";
import "./Comparatif.css";
import "../../contexts/PanierContext";
import PanierContext from "../../contexts/PanierContext";

function Comparatif() {
  const {  product_1 } =
    useContext(PanierContext);

  return (
    <div className="mainComparatif">
      <div className="cardComparatif switchComparatifFirst">
        <div><h1 className="titreComparatif">{product_1.product}</h1></div>
        <div>
          <h2 className="titreComparatifDetails">Détails du produit</h2>
        </div>
        <ul>
          <li className="titreCaractéristiques">Caractéristiques</li>
          {product_1.map((value) => (
            <li>
              {Object.keys}: {value.Object.keys}
            </li>
          ))}
        </ul>
        <button>Ajouter au panier</button>
      </div>
    </div>
  );
}

export default Comparatif;
