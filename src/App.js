import { Routes, Route } from "react-router-dom";
import Comparatif from "./components/Home/Comparatif";
import Home from "./components/Home/Home";

function App() {
  return (
    <div className="App">
      <header className="App-header">Template Front-End</header>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Comparatif" element={<Comparatif />}></Route>
      </Routes>
    </div>
  );
}

export default App;