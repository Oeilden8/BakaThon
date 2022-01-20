import React, { useState, useContext, useEffect } from "react";
import PanierContext from "../../contexts/PanierContext";
import caddie from "../../assets/panier_img/chariot.png";
import PanierItem from "./PanierItem/PanierItem";
import './panierlist.css'

//Notre composant principal de notre Panier

function PanierList() {
  const { myBasket } = useContext(PanierContext);
  const [isVisible, setIsVisible] = useState(false);
  const [totalCount, setTotalCount] = useState();


  // On utilise un useEffect pour mettre a jour le prix totale d'achat.
  useEffect(() => {
    
  }, [myBasket]);

  return (
    <div>
      <img className="img_caddie"
        src={caddie}
        alt="panier_logo"
        onClick={() => {
          setIsVisible(!isVisible);
        }}
      />
      {isVisible ? (
        <div>
          <h3>{"Mon Panier"}</h3>
          {myBasket ? (
            // Si le panier est rempli on affiche les produit à l'interieur
            // Fanny : si tu met juste constante ? ca veut dire si la constante existe, en gros si elle est pas vide, pas besoin d'ecrire un truc après ? :)
            <div>
              <ul>
                {myBasket.map((item, index) => (
                  <PanierItem key={index} {...item} />
                ))}
              </ul>

              <div>{"Total :"}{totalCount}</div>
            </div>
          ) : (
            // Ternaire qui affiche un message en cas de panier vide
            "Vous n'avez rien dans votre panier"
          )}
        </div>
      ) : null}
    </div>
  );
}

export default PanierList;
