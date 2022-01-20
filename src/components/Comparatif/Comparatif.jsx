import React, { useContext } from "react";
import "./Comparatif.css";
import "../../contexts/PanierContext"
import PanierContext, { PanierContextProvider } from "../../contexts/PanierContext";

function Comparatif({ perceuse }) {

  const { productManoMano } = useContext(PanierContext);

  const valueNames = Object.keys(productManoMano[0]);

  return (
    <div className="mainComparatif">
      <div className="cardComparatif switchComparatifFirst">
        <div><h1 className="titreComparatif">{perceuse.product}</h1></div>
        <div><h2 className="titreComparatifDetails">Détails du produit</h2></div>
        <ul>
          <li className="titreCaractéristiques">Caractéristiques</li>
          {perceuse.map((value) => <li>{Object.keys}: {value.Object.keys}</li>)}
        </ul>
        <button>Ajouter au panier</button>
      </div>
    </div>)
};

export default Comparatif;