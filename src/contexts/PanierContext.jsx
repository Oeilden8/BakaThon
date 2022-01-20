import React, { createContext, useState } from "react";
// import img from "../assets/Images/perceuse-bdecker.jpg";
// import img2 from "../assets/Images/perceuse-bosch.webp";


// On déclare la création du context
const PanierContext = createContext();


//ici on dit ok tu seras appliqué à tout les enfants "INTERNE" de ce composant
export const PanierContextProvider = ({ children }) => {

  //on déclare les states que l'on veut rendre disponible dans tout les enfants
  const [myBasket, setMyBasket] = useState([]);
  const [productManoMano, setProductManoMano] = useState([
    {
      product:
        "Perceuse visseuse MAKITA 18V 3.0Ah + 2 Batteries, chargeur, en coffret",
      refNumber: "ME1442269",
      prix: 185.98,
      alimentation: "batterie",
      batterie: false,
      utilisation: "Intensive",
      fonction: "Perçage et vissage",
      tension: "18V",
      capacite: "3 Ah",
      caracteristiques: "Chargeur, Coffret, Réglage de couple",
      mandrin: "Auto-serrant",
      couple: "42Nm",
      diametreMandrin: "13mm",
      poids: "1,8kg",
      vitesses: "2",
      percageMetal: "13mm",
      percageBois: "13mm",
      son: "72 dB",
      categorie: "Perceuse",
      // image: {img},
    },
    {
      //Fanny - j'ai juste changé prix et nom pour le moment
      //Cyriac - update j'ai change le refNumber aussi
      product:
        "Perceuse visseuse sans fil TEENO PSR 21V + 2 batteries lithium + 41 accessoires + gants professionnels - Rouge",
      refNumber: "ME1472268",
      prix: 56.0,
      alimentation: "batterie",
      batterie: false,
      utilisation: "Intensive",
      fonction: "Perçage et vissage",
      tension: "18V",
      capacite: "3 Ah",
      caracteristiques: "Chargeur, Coffret, Réglage de couple",
      mandrin: "Auto-serrant",
      couple: "42Nm",
      diametreMandrin: "13mm",
      poids: "1,8kg",
      vitesses: "2",
      percageMetal: "13mm",
      percageBois: "13mm",
      son: "72 dB",
      categorie: "Perceuse",
      // image: {img2},
    },
  ]);

  return (
    // ici on créer le provider qui sera le composant sandwich
    <PanierContext.Provider
    //Toute les valeur que l'on veut transmettre grace à ce context
      value={{ productManoMano, setProductManoMano, myBasket, setMyBasket }}
    >
      {children}
    </PanierContext.Provider>
  );
};

export default PanierContext;
