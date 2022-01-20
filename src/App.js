import { useContext } from "react";
import { Routes, Route } from "react-router-dom";
// On déclare notre context pour pouvoir l'utiliser
import PanierContext from "./contexts/PanierContext";
import Perceuse from "./components/Perceuse/Perceuse";
import Suggestions from "./components/Suggestions/Suggestions";
import Header from "./components/Header/Header";

function App() {
  //on vient chercher directement les states que l'on veut utiliser en utilisant la destructuration
  const { productManoMano } = useContext(PanierContext);
  return (
    <div className="App">
      <Header />
      <Routes>
        {/* je passe que la 1ere perceuse pour la page produit */}
        <Route path="/" element={<Perceuse perceuse={productManoMano[0]} />} />
      </Routes>
      {/* je passe toute la liste pour le modal suggestions */}
      {productManoMano.map((productManoMano, index) => (
        <Suggestions key={index} {...productManoMano} />
      ))}
    </div>
  );
}

export default App;
