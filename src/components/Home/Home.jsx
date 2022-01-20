import React, { useContext } from "react";
import PanierContext from "../../contexts/PanierContext";



function Home() {

  const { initialState } = useContext(PanierContext);

  return (
    <div>
      <title>Home</title>
      <p>Bienvenue chez toi</p>
      <p>{initialState}</p>
    </div>
  );
}

export default Home;
