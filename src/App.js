import { Routes, Route } from "react-router-dom";
import Perceuse from "./components/Perceuse/Perceuse";
import Suggestions from "./components/Suggestions/Suggestions";

const perceuseList = [
  {
    product:
      "Perceuse visseuse MAKITA 18V 3.0Ah + 2 Batteries, chargeur, en coffret",
    refNumber: "ME1442269",
    prix: 185.98,
    alimentation: "batterie",
    batterie: false,
    utilisation: "Intensive",
    fonction: "Perçage et vissage",
    tension: "18V",
    capacite: "3 Ah",
    caracteristiques: "Chargeur, Coffret, Réglage de couple",
    mandrin: "Auto-serrant",
    couple: "42Nm",
    diametreMandrin: "13mm",
    poids: "1,8kg",
    vitesses: "2",
    percageMetal: "13mm",
    percageBois: "13mm",
    son: "72 dB",
  },
  {
    // j'ai juste changé prix et nom pour le moment
    product:
      "Perceuse visseuse sans fil TEENO PSR 21V + 2 batteries lithium + 41 accessoires + gants professionnels - Rouge",
    refNumber: "ME1442269",
    prix: 56.0,
    alimentation: "batterie",
    batterie: false,
    utilisation: "Intensive",
    fonction: "Perçage et vissage",
    tension: "18V",
    capacite: "3 Ah",
    caracteristiques: "Chargeur, Coffret, Réglage de couple",
    mandrin: "Auto-serrant",
    couple: "42Nm",
    diametreMandrin: "13mm",
    poids: "1,8kg",
    vitesses: "2",
    percageMetal: "13mm",
    percageBois: "13mm",
    son: "72 dB",
  },
];

function App() {
  return (
    <div className="App">
      <Routes>
        {/* je passe que la 1ere perceuse pour la page produit */}
        <Route path="/" element={<Perceuse perceuse={perceuseList[0]} />} />
      </Routes>
      {/* je passe toute la liste pour le modal suggestions */}
      {perceuseList.map((perceuse, index) => (
        <Suggestions key={index} {...perceuse} />
      ))}
    </div>
  );
}

export default App;
