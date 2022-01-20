import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Suggestion from "./components/Suggestion/suggestion";
function App() {
  return (
    <div className="App">
      {/* <header className="App-header">Template Front-End</header> */}
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/suggestion" element={<Suggestion />}></Route>
      </Routes>
    </div>
  );
}

export default App;
