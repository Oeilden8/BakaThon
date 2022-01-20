import React from 'react';
import './Product_page.css';  

export default function ProductPage() {
  return (
    <div className="container">
      <div className="header">
        <a href="#">
          <div className="logo"></div>
        </a>
          <div className="compte">compte 
        <a href="#">
          <img src="" alt="logo connexion"/>
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
          <label className='search_bar' htmlFor="search"></label>
          <input type="text"></input>
          <button className="bouton_searchBar">
          </button>
        </div>
      </div>
    </div>
  )
}
