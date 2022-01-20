import React from 'react';
import './Header.css';
import img_product from './Header_Product/product_img.png';  
import logoSold from './Header_Product/logosold.png';

export default function Header() {
  return (
    <div className="container">
      <div className="header">
        <a href="#">
          <div className="logo"></div>
        </a>
          <div ClassName="block_compte">
        <a href="#" className="compte">
          <div ClassName="mot_compte">compte</div>
          <img src={img_product} className="icone_connect" />
          </a>
        </div>
      </div>
      <div className="menu_searchbar">
        <div className="menubuger">
          <a href="#">
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
        <a ClassName="Soldes" href="#"><img ClassName="Soldes" src={logoSold}/>Soldes</a>
        <a ClassName="BonsPlans" href="#">Bons Plans</a>
        <a ClassName="MeilleuresVentes" href="#">Meilleures ventes</a>
      </div>
      <div ClassName="DivDuTrait"></div>
    </div>
  )
}
