import React, { useContext } from "react";
import PanierContext from "../../contexts/PanierContext";

function Suggestions(props) {
  
  // Récupération des state & setState via le context
  const { myBasket, setMyBasket, productManoMano } = useContext(PanierContext);


  // Fonction pour ajouter un produit à son panier (en cours de production ALED)
  const handleAddProduct  = (ref) => {
    const addProduct = productManoMano.filter((item) => item.refNumber === ref);
    setMyBasket([...myBasket, ...addProduct]);
    console.log(myBasket);
  };

  return (
    <div>
      <h1>Je suis une suggestion</h1>
      <h2>{props.product}</h2>
      <p>{props.refNumber}</p>
      <p>Prix : {props.prix}€</p>
      <button
        id={props.refNumber}
        onClick={(e) => handleAddProduct(e.target.id)}
      >
        Ajouter au Panier !
      </button>
    </div>
  );
}

export default Suggestions;
