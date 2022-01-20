import React, { useContext } from "react";
import "./perceuse.css";
import perceuse_img from "../../assets/Images/perceuse-makita.webp";
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
    <div className="container">
      <div className="affichage_desktop">
        <div className="centre_img">
          <img src={perceuse_img} alt="img_produit" className="img_produit" />
        </div>
        <div className="info-produit">
          <div className="refNumber">{productManoMano[0].refNumber}</div>
          <h1 className="nom_produit">{productManoMano[0].product}</h1>
          <p className="prix_produit">Prix : {productManoMano[0].prix}€</p>
          <p>En stock</p>
        </div>
      </div>
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
      <div className="fiche_produit">
        <h2 className="titre_détail_produit">Détails du produit</h2>
        <div className="container_détails_produit">
          <div className="titre_cara_produit">Caractéristiques</div>
          <div className="caractéristique_produit">
            <div className="liste_caractéristiques">
              <div className="caracteristique1">alimentation</div>
              <div className="caracteristique2">{productManoMano[0].alimentation}</div>
            </div>
            <div className="liste_caractéristiques">
              <div className="caracteristique1">utilisation</div>
              <div className="caracteristique2">{productManoMano[0].utilisation}</div>
            </div>
            <div className="liste_caractéristiques">
              <div className="caracteristique1">Tension</div>
              <div className="caracteristique2">{productManoMano[0].tension}</div>
            </div>
            <div className="liste_caractéristiques">
              <div className="caracteristique1">caracteristiques</div>
              <div className="caracteristique2">{productManoMano[0].caracteristiques}</div>
            </div>
            <div className="liste_caractéristiques">
              <div className="caracteristique1">Mandrin</div>
              <div className="caracteristique2">{productManoMano[0].diametreMandrin}</div>
            </div>
            <div className="liste_caractéristiques">
              <div className="caracteristique1">Nombre de batterie</div>
              <div className="caracteristique2">{productManoMano[0].nbBatterie}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Perceuse;
