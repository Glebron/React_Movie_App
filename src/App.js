import Pages from "./pages/Pages";
import { BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Pages></Pages>
    </BrowserRouter>
  );
}

export default App;
