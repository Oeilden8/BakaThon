import React from "react";
import "./Comparatif.css"


function Comparatif() {

  const firstProduit =
  {
    url: "https://raw.githubusercontent.com/Oeilden8/BakaThon/productList/src/assets/perceuse-bosch.webp",
    titre: "Titre du produit qui est super méga cool, avec des choses annexes un peu chers mais tout aussi méga trop cool ",
    caractéristique: {
      titreproduit: "titre du produit",
      Métal: "Métal",
      Fixation: "Fixation",
      Hauteurcolonne: "Hauteur colonne max",
      Formepommeau: "Forme du pommeau",
      LargeurDiamètre: "Largeur/Diamètre tête",
      Longueurflex: "Longueur flexible",
      Caractéristique: "Caractéristique",
      Metal: "Metal",
      Finition: "Finition",
      Formedupommeau: "Forme du pommeau",
      Longueurduflex: "Longueur du flexible",
    },
  };

  const secondProduit =
  {
    url: "https://raw.githubusercontent.com/Oeilden8/BakaThon/productList/src/assets/perceuse-bosch.webp",
    titre: "Titre du produit qui est super méga cool, avec des choses annexes un peu chers mais tout aussi méga trop cool ",
    caractéristique: {
      titreproduit: "titre du produit",
      Métal: "Métal",
      Fixation: "Fixation",
      Hauteurcolonne: "Hauteur colonne max",
      Formepommeau: "Forme du pommeau",
      LargeurDiamètre: "Largeur/Diamètre tête",
      Longueurflex: "Longueur flexible",
      Caractéristique: "Caractéristique",
      Metal: "Metal",
      Finition: "Finition",
      Formedupommeau: "Forme du pommeau",
      Longueurduflex: "Longueur du flexible",
    },
  };

  return (
    <div className="mainComparatif">
      <div className="cardComparatif switchComparatifFirst">
        <div>{firstProduit.url}</div>
        <div><h1 className="titreComparatif">{firstProduit.titre}</h1></div>
        <div><h2 className="titreComparatifDetails">Détails du produit</h2></div>
        <ul>
          <li className="titreCaractéristiques">Caractéristiques</li>
          <li>Titre du produit : {firstProduit.caractéristique.titreproduit}</li>
          <li>Métal: {firstProduit.caractéristique.Métal}</li>
          <li>Fixation: {firstProduit.caractéristique.Fixation}</li>
          <li>Hauteur colonne max: {firstProduit.caractéristique.Hauteurcolonne}</li>
          <li>Forme du pommeau: {firstProduit.caractéristique.Formepommeau}</li>
          <li>Largeur / Diamètre tête: {firstProduit.caractéristique.LargeurDiamètre}</li>
          <li>Longueur fléxible: {firstProduit.caractéristique.Longueurflex}</li>
          <li>Caractéristiques: {firstProduit.caractéristique.Caractéristique}</li>
          <li>Métal: {firstProduit.caractéristique.Metal}</li>
          <li>Finition: {firstProduit.caractéristique.Finition}</li>
          <li>Forme du pommeau: {firstProduit.caractéristique.Formedupommeau}</li>
          <li>Longueur du flexible: {firstProduit.caractéristique.Longueurduflex}</li>
        </ul>
        <button>Ajouter au panier</button>
      </div>
      <div className="cardComparatif switchComparatifSecond">
        <div>{firstProduit.url}</div>
        <div><h1 className="titreComparatif">{firstProduit.titre}</h1></div>
        <div><h2 className="titreComparatifDetails">Détails du produit</h2></div>
        <ul>
          <li className="titreCaractéristiques">Caractéristiques</li>
          <li>Titre du produit : {secondProduit.caractéristique.titreproduit}</li>
          <li>Métal: {secondProduit.caractéristique.Métal}</li>
          <li>Fixation: {secondProduit.caractéristique.Fixation}</li>
          <li>Hauteur colonne max: {secondProduit.caractéristique.Hauteurcolonne}</li>
          <li>Forme du pommeau: {secondProduit.caractéristique.Formepommeau}</li>
          <li>Largeur / Diamètre tête: {secondProduit.caractéristique.LargeurDiamètre}</li>
          <li>Longueur fléxible: {secondProduit.caractéristique.Longueurflex}</li>
          <li>Caractéristiques: {secondProduit.caractéristique.Caractéristique}</li>
          <li>Métal: {secondProduit.caractéristique.Metal}</li>
          <li>Finition: {secondProduit.caractéristique.Finition}</li>
          <li>Forme du pommeau: {secondProduit.caractéristique.Formedupommeau}</li>
          <li>Longueur du flexible: {secondProduit.caractéristique.Longueurduflex}</li>
        </ul>
        <button>Ajouter au panier</button>
      </div>
    </div>)
};

export default Comparatif;
