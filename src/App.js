import { Routes, Route } from "react-router-dom";
import {PanierContextProvider} from "./contexts/PanierContext";
import Home from "./components/Home/Home";

function App() {
  return (
    <PanierContextProvider>
      <div className="App">
        <header className="App-header">Template Front-End</header>
        <Routes>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </div>
    </PanierContextProvider>
  );
}

export default App;
