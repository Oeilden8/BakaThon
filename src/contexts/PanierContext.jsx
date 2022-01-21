import React, { createContext, useState } from "react";
import img from "../assets/Images/perceuse-bdecker.jpg";
import img2 from "../assets/Images/perceuse-bosch.webp";

// On déclare la création du context
const PanierContext = createContext();

//ici on dit ok tu seras appliqué à tout les enfants "INTERNE" de ce composant
export const PanierContextProvider = ({ children }) => {
  //on déclare les states que l'on veut rendre disponible dans tout les enfants
  const [myBasket, setMyBasket] = useState([]);
  // state du bouton compare
  const [compare, setCompare] = useState(false);

  const [product_1, setProduct_1] = useState({});
  const [product_2, setProduct_2] = useState({});
  const [productCompare, setProductCompare] = useState(false);

  const [productManoMano, setProductManoMano] = useState([
    {
      product:
        "Perceuse visseuse MAKITA 18V 3.0Ah + 2 Batteries, chargeur, en coffret",
      refNumber: "ME1442269",
      prix: 185.98,
      alimentation: "batterie",
      batterie: true,
      nbBatterie: 5,
      utilisation: "Intensive",
      fonction: "Perçage et vissage",
      tension: "18V",
      caracteristiques: "Chargeur, Coffret, Réglage de couple",
      couple: "42Nm",
      diametreMandrin: "13mm",
      poids: "1,8kg",
      son: "72 dB",
      categorie: "Perceuse",
      image: { img },
    },
    {
      product:
        "Perceuse visseuse sans fil TEENO PSR 21V + 2 batteries lithium + 41 accessoires + gants professionnels - Rouge",
      refNumber: "ME9259885",
      prix: 56.0,
      alimentation: "batterie",
      batterie: true,
      nbBatterie: 2,
      utilisation: "Professionnelle",
      fonction: "Perçage et vissage",
      tension: "21V",
      caracteristiques: "Chargeur, Coffret",
      couple: "40Nm",
      diametreMandrin: "10mm",
      poids: "4,2kg",
      son: "52 dB",
      categorie: "Perceuse",
      image: { img2 },
    },
    {
      product:
        "Perceuse-Visseuse sans fil Black Decker - 18V - 1,5 Ah - 2 batteries - Chargeur inclus - 80 accessoires - Livrée en mallette",
      refNumber: "ME45124954",
      prix: 99.88,
      alimentation: "batterie",
      batterie: true,
      nbBatterie: 2,
      utilisation: "Intensive",
      fonction: "Perçage et vissage",
      tension: "18V",
      caracteristiques: "Réglage de couple",
      couple: "30Nm",
      diametreMandrin: "25mm",
      poids: "1,2kg",
      son: "20 dB",
      categorie: "Perceuse",
    },
    {
      product:
        "Einhell Perceuse Visseuse sans fil sur batterie TE-CD 18/2 Li Kit Power X-Change Livré avec 2 Batteries 1,5Ah et Chargeur",
      refNumber: "ME6081371",
      prix: 89.95,
      alimentation: "batterie",
      batterie: true,
      nbBatterie: 2,
      utilisation: "Professionnelle",
      fonction: "Perçage et vissage",
      tension: "18V",
      caracteristiques:
        "Chargeur, Coffret, Accroche ceinture, Réglage de couple, Lampe LED",
      couple: "44Nm",
      diametreMandrin: "10mm",
      poids: "1,35kg",
      son: "48 dB",
      categorie: "Perceuse",
      image: {img2},
    },
    {
      product:
        "Tondeuse À Gazon Sur Batterie Greenworks 40v Avec Batterie 4ah Et Chargeur",
      refNumber: "ME12643274",
      prix: 318.5,
      alimentation: "batterie",
      accessoires: "Batterie, Chargeur, Bac de ramassage",
      caractéristiques: "Éjection latérale",
      garantie: "2 ans",
      mulching: true,
      surfaceMax: "600m²",
      categorie: "Tondeuse",
    },
    {
      product: "Tondeuse électrique RYOBI 1300W coupe 33cm RLM13E33S",
      refNumber: "ME6371221",
      prix: 99,
      alimentation: "electrique",
      accessoires: "Bac de ramassage",
      caractéristiques: "Guidon ergonomique",
      garantie: "3 ans",
      mulching: true,
      surfaceMax: "300m²",
      categorie: "Tondeuse",
    },
    {
      product:
        "Einhell Tondeuse à Gazon sans Fil GE-CM 36/37 Li Livré avec 2 Batteries 2,0 Ah et Double Chargeur",
      refNumber: "ME11007858",
      prix: 319.95,
      alimentation: "batterie",
      accessoires: "Batterie, Chargeur, Bac de ramassage",
      caractéristiques: "Guidon ergonomique",
      garantie: "3 ans",
      mulching: false,
      surfaceMax: "400m²",
      categorie: "Tondeuse",
    },
    {
      product:
        "Tondeuse DOLMAR 36V 2 x 18 V Li-Ion 43 cm  - Sans batterie, ni chargeur",
      refNumber: "ME18206728",
      prix: 154.8,
      alimentation: "batterie",
      accessoires: "Bac de ramassage",
      caractéristiques: "Guidon ergonomique",
      garantie: "2 ans",
      mulching: false,
      surfaceMax: "500m²",
      categorie: "Tondeuse",
    },
    {
      product:
        "Spa gonflable PureSpa Carbone octogonal Bulles et Jets 4 places - Intex",
      refNumber: "ME16540660",
      prix: 999,
      capacité: "4 places",
      couleur: "gris",
      forme: "octogonal",
      accessoires: "Appuie-tête, Bache de protection, Tapis de sol",
      dimensions: "200x200x71 cm",
      jets: 120,
      garantie: "3 ans",
      categorie: "Spa",
    },
    {
      product: "Spa Gonflable NICE en PVC - 4 places - Gris/Noir",
      refNumber: "ME16449712",
      prix: 289,
      capacité: "4 places",
      couleur: "noir",
      forme: "carré",
      accessoires: "Bache de protection, Réchauffeur",
      dimensions: "154x154x65 cm",
      jets: 110,
      garantie: "1 an",
      categorie: "Spa",
    },
    {
      product: "MSPA - Spa gonflable rond BERGEN - 6 places - Gris",
      refNumber: "ME30527856",
      prix: 449,
      capacité: "6 places",
      couleur: "gris, bleu",
      forme: "rond",
      accessoires:
        "télécommande - cartouche de filtration - base de cartouche de filtration - tuyau de pompe avec manomètre - adaptateur de vidange - housse avec clips",
      dimensions: "204x204x65 cm",
      jets: 138,
      garantie: "2 ans",
      categorie: "Spa",
    },
    {
      product: "MSPA - Spa gonflable carré 185cm LITE - 6 places - Bleu",
      refNumber: "ME17589638",
      prix: 399,
      capacité: "6 places",
      couleur: "bleu",
      forme: "carré",
      accessoires:
        " télécommande - cartouche de filtration - adaptateur de vidange - tuyau de pompe - housse avec clips",
      dimensions: "185x185x65 cm",
      jets: 132,
      garantie: "2 ans",
      categorie: "Spa",
    },
  ]);

  return (
    // ici on créer le provider qui sera le composant sandwich
    <PanierContext.Provider
      //Toute les valeur que l'on veut transmettre grace à ce context
      value={{
        productManoMano,
        setProductManoMano,
        myBasket,
        setMyBasket,
        compare,
        setCompare,
        product_1,
        setProduct_1,
        product_2,
        setProduct_2,
        productCompare,
        setProductCompare,
      }}
    >
      {children}
    </PanierContext.Provider>
  );
};

export default PanierContext;
