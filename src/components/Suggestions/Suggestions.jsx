import React, { useContext } from "react";
import PanierContext from "../../contexts/PanierContext";
import "./suggestion.css";
import img from "../../assets/Images/perceuse-bdecker.jpg";

function Suggestions(props) {
  // Récupération des state & setState via le context
  const {
    productManoMano,
    setProduct_2,
    setProductCompare,
    productCompare,
    setCompare,
  } = useContext(PanierContext);

  // Fonction pour ajouter un produit à son panier (en cours de production ALED)
  // const handleAddProduct  = (ref) => {
  //   const addProduct = productManoMano.filter((item) => item.refNumber === ref);
  //   setMyBasket([...myBasket, ...addProduct]);
  //   console.log(myBasket);
  // };

  const updateProduct2 = (id) => {
    const results = productManoMano.filter((item) => item.refNumber === id);
    setProduct_2(results);
    setProductCompare(!productCompare);
    setCompare(false);
  };

  return (
    <div className="Card">
      <div className="CardList">
        {/* <h1>Je suis une suggestion</h1> */}
        <img className="img" src={img} alt="test" />
        <h2>{props.product}</h2>
        <p>{props.refNumber}</p>
        <p>Prix : {props.prix}€</p>
        <button
          id={props.refNumber}
          onClick={(e) => updateProduct2(e.target.id)}
        >
          {" "}
          Comparer
        </button>
      </div>
    </div>
  );
}

export default Suggestions;
