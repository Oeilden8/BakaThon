import React, { useContext } from "react";
import "./perceuse.css";
import perceuse_img from "../../assets/perceuse-makita.webp";
import PanierContext from "../../contexts/PanierContext";

function Perceuse() {
  const {
    myBasket,
    setMyBasket,
    productManoMano,
    compare,
    setCompare,
    setProduct_1,
  } = useContext(PanierContext);

  const handleAddProduct = (ref) => {
    const addProduct = productManoMano.filter((item) => item.refNumber === ref);
    setMyBasket([...myBasket, ...addProduct]);
    console.log(myBasket);
  };

  const updateProduct1 = (ref) => {
    const results = productManoMano.filter((item) => item.refNumber === ref);
    setProduct_1(results);
  };

  return (
    <div>
      <img src={perceuse_img} alt="img_produit" className="img_produit" />
      <div className="refNumber">{productManoMano[0].refNumber}</div>
      <h1 className="nom_produit">{productManoMano[0].product}</h1>
      <p className="prix_produit">Prix : {productManoMano[0].prix}€</p>
      <p>En stock</p>
      <div className="section_panier">
        <div className="modifier_produit">
          <div className="add_cut">
            <button className="bouton_moins">-</button>
            <input className="nombre_produit" type="number" />
            <button className="bouton_plus">+</button>
          </div>
          {/* utiliser pour mettre à jour le prix d'ajout au panier en mutlipliant par le nombre de produit */}
          <div className="price_panier">{productManoMano[0].prix}€</div>
        </div>
        <button
          className="Button_ajout_panier"
          id={productManoMano[0].refNumber}
          onClick={(e) => handleAddProduct(e.target.id)}
        >
          Ajouter au Panier !
        </button>
        <button
          className="Button_comparer"
          onClick={() => {
            setCompare(!compare);
            updateProduct1(productManoMano[0].refNumber);
          }}
        >
          Comparer
        </button>
      </div>
    </div>
  );
}

export default Perceuse;
