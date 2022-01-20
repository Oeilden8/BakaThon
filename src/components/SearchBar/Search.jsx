import React from "react";
import { useState } from "react";
import "./Search.css";
import SearchIcon from "@mui/icons-material/Search";

function Search() {
  const [datas, setDatas] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  // useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com/todos/1")
  //     .then((response) => response.json())
  //     .then((json) => setDatas(json));
  // }, []);

  const handleSearchTerm = (e) => {
    let value = e.target.value;
    value.length > 2 && setSearchTerm(value);
  };

  return (
    <>
      <div className="searhBar">
        <input
          type="text"
          name="searchBar"
          id="searchBar"
          placeholder="Rechercher un produit, une marque ou un conseil"
          onChange={handleSearchTerm}
        />
        <div className="searchIcon">
          <SearchIcon />
        </div>
      </div>
      <div className="search_results">
        {datas
          .filter((val) => {
            return val.title.toLowerCase().includes(searchTerm.toLowerCase());
          })
          .map((val) => {
            return (
              <div className="search_result" key={val.id}>
                {val.title}
              </div>
            );
          })}
      </div>
    </>
  );
}

export default Search;
