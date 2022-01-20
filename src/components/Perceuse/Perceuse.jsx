import React, { useContext } from "react";
import "./perceuse.css";
import perceuse_img from "../../assets/perceuse-makita.webp";
import PanierContext from "../../contexts/PanierContext";

function Perceuse({ perceuse }) {
  const { myBasket, setMyBasket, productManoMano } = useContext(PanierContext);

  const handleAddProduct  = (ref) => {
    const addProduct = productManoMano.filter((item) => item.refNumber === ref);
    setMyBasket([...myBasket, ...addProduct]);
    console.log(myBasket);
  };


  return (
    <div>
      <div className="affichage_desktop">
      <div className="affichage_produit">
        <img src={perceuse_img} alt="img_produit" className="img_produit" />
        <div className="refNumber">{perceuse.refNumber}</div>
        <h1 className="nom_produit">{perceuse.product}</h1>
        <p className="prix_produit" >Prix : {perceuse.prix}€</p>
      </div>
      <p className="en_stock">En stock</p>
      <div className="section_panier">
        <div className="modifier_produit">
          <div className="add_cut">
            <button className="bouton_moins">-</button>
            <input className="nombre_produit" type="number" />
            <button className="bouton_plus">+</button>
          </div>
          {/* utiliser pour mettre à jour le prix d'ajout au panier en mutlipliant par le nombre de produit */}
          <div className="price_panier">{perceuse.prix}€</div>
        </div>
      <button className="Button_ajout_panier"
        id={perceuse.refNumber}
        onClick={(e) => handleAddProduct(e.target.id)}
      >
        Ajouter au Panier !
      </button>
      <button className="Button_comparer">
        Comparer
      </button>
      </div>
    </div>
    </div>
  );
}

export default Perceuse;
