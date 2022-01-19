import { Routes, Route } from "react-router-dom";
import Perceuse from "./components/Perceuse/Perceuse";

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
];

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={perceuseList.map((perceuse, index) => (
            <Perceuse key={index} {...perceuse} />
          ))}
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
