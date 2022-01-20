import React from 'react';
import './Header.css';
import img_product from './Header_Product/product_img.png';  
import logoSold from './Header_Product/logosold.png';
import PanierList from '../PanierList/PanierList';

export default function Header() {
  return (
    <div className="container">
      <div className="header">
        <a href="https://www.google.fr/">
          <div className="logo"></div>
        </a>
          <div className="block_compte">
        <a href="https://www.google.fr/" className="compte">
          <div className="mot_compte">compte</div>
          <img src={img_product} alt="compte_connect" className="icone_connect" />
          </a>
          <PanierList />
        </div>
      </div>
      <div className="menu_searchbar">
        <div className="menubuger">
          <a href="https://www.google.fr/">
            <div className="logo_burger"></div>
          </a>
        </div>
        <div className="searchbar">
          <label htmlFor="search"></label>
          <input className="search_bar" type="text"></input>
          <button className="search_button">
          </button>
        </div>
      </div>
      <div className="NavBar">
        <a className="Soldes" href="https://www.google.fr/"><img alt="solde" className="Soldes" src={logoSold}/>Soldes</a>
        <a className="BonsPlans" href="https://www.google.fr/">Bons Plans</a>
        <a className="MeilleuresVentes" href="https://www.google.fr/">Meilleures ventes</a>
      </div>
      <div className="DivDuTrait"></div>
    </div>
  )
}
