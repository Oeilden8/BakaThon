import React, { useContext } from "react";
import "./Comparatif.css";
import PanierContext from "../../contexts/PanierContext";

function Comparatif() {
  const { product_1, product_2 } = useContext(PanierContext);
  console.log(product_1);
  console.log(product_2);

  return (
    <div className="mainComparatif">
      <div className="cardComparatif switchComparatifFirst">
        <div>
          <h1 className="titreComparatif">{product_1[0].product}</h1>
        </div>
        <div>
          <h2 className="titreComparatifDetails">Détails du produit</h2>
        </div>
        <ul>
          <li className="titreCaractéristiques">Caractéristiques</li>
          <li>Prix: {product_1[0].prix} €</li>
          <li>Alimentation: {product_1[0].alimentation} </li>
          <li>batterie: oui </li>
          <li>utilisation: {product_1[0].utilisation}</li>
          <li>fonction: {product_1[0].fonction}</li>
          <li>tension: {product_1[0].tension}"</li>
          <li>caracteristiques: {product_1[0].caracteristiques}</li>
          <li>couple: {product_1[0].couple}</li>
          <li>diametreMandrin: {product_1[0].diametreMandrin}</li>
          <li>poids: {product_1[0].poids}</li>
          <li>son: {product_1[0].son}</li>
        </ul>
        <button>Ajouter au panier</button>
      </div>
      <div className="cardComparatif switchComparatifFirst">
        <div>
          <h1 className="titreComparatif">{product_2[0].product}</h1>
        </div>
        <div>
          <h2 className="titreComparatifDetails">Détails du produit</h2>
        </div>
        <ul>
          <li className="titreCaractéristiques">Caractéristiques</li>
<<<<<<< HEAD
=======
          <li>Prix: {product_2[0].prix} €</li>
          <li>Alimentation: {product_2[0].alimentation} </li>
          <li>batterie: Fournie </li>
          <li> utilisation: {product_2[0].utilisation}</li>
          <li> fonction:  {product_2[0].fonction}</li>
          <li>tension: {product_2[0].tension}</li>
          <li>caracteristiques: {product_2[0].caracteristiques}</li>
          <li>couple: {product_2[0].couple}</li>
          <li>diametreMandrin:{product_2[0].diametreMandrin}</li>
          <li> poids: {product_2[0].poids}</li>
          <li>son: {product_2[0].son}</li>
>>>>>>> 9fcd8dc1364f84243da5cdfdba713a2305ecaa1b
        </ul>
        <button className="Comparatifbutton">Ajouter au panier</button>
      </div>
    </div>
  );
}

export default Comparatif;
