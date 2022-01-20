import React, { useContext } from "react";
import "./perceuse.css";
import perceuse_img from "../../assets/perceuse-makita.webp";
import PanierContext from "../../contexts/PanierContext";

function Perceuse({ perceuse }) {
  const { myBasket, setMyBasket, productManoMano, compare, setCompare } =
    useContext(PanierContext);

  const handleAddProduct = (ref) => {
    const addProduct = productManoMano.filter((item) => item.refNumber === ref);
    setMyBasket([...myBasket, ...addProduct]);
    console.log(myBasket);
  };

  const handleClickCompare = () => {
    setCompare(!compare);
  };

  return (
    <div className="container">
      <div className="affichage_desktop">
        <div className="centre_img">
          <img src={perceuse_img} alt="img_produit" className="img_produit" />
        </div>
        <div className="info-produit">
          <div className="refNumber">{perceuse.refNumber}</div>
          <h1 className="nom_produit">{perceuse.product}</h1>
          <p className="prix_produit">Prix : {perceuse.prix}€</p>
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
          <div className="price_panier">{perceuse.prix}€</div>
        </div>
        <button
          className="Button_ajout_panier"
          id={perceuse.refNumber}
          onClick={(e) => handleAddProduct(e.target.id)}
        >
          Ajouter au Panier !
        </button>
        <button className="Button_comparer" onClick={handleClickCompare}>
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
              <div className="caracteristique2">{perceuse.alimentation}</div>
            </div>
            <div className="liste_caractéristiques">
              <div className="caracteristique1">utilisation</div>
              <div className="caracteristique2">{perceuse.utilisation}</div>
            </div>
            <div className="liste_caractéristiques">
              <div className="caracteristique1">Tension</div>
              <div className="caracteristique2">{perceuse.tension}</div>
            </div>
            <div className="liste_caractéristiques">
              <div className="caracteristique1">caracteristiques</div>
              <div className="caracteristique2">{perceuse.caracteristiques}</div>
            </div>
            <div className="liste_caractéristiques">
              <div className="caracteristique1">Mandrin</div>
              <div className="caracteristique2">{perceuse.diametreMandrin}</div>
            </div>
            <div className="liste_caractéristiques">
              <div className="caracteristique1">Nombre de batterie</div>
              <div className="caracteristique2">{perceuse.nbBatterie}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Perceuse;
