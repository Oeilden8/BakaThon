import React, { useContext } from "react";
import PanierContext from "../../../contexts/PanierContext";

function PanierItem({ product, refNumber, prix }) {
  const { myBasket, setMyBasket } = useContext(PanierContext);


  //Fonction pour pouvoir retirer un produit de notre Panier (à tester mais aled  ALEEEED)
  const handleDelete = (refNumber) => {
    const copyMyBasket = [...myBasket].filter(
      (panier) => panier.refNumber !== refNumber
    );
    setMyBasket(copyMyBasket);
  };
  return (
    <li>
      <button
        id={refNumber}
        onClick={(e) => {
          handleDelete(e.target.id);
        }}
      >
        X
      </button>
      <img src="coucou" alt="logo_mini" />
      <div>
        <h3>{product}</h3>
        <p>{refNumber}</p>
      </div>
      <h2>
        {prix}
        {" €"}
      </h2>
    </li>
  );
}

export default PanierItem;