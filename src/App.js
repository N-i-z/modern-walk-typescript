import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/navbar";
import { Home } from "./pages/home/home";
import { MensClothing } from "./pages/men's clothing/men's clothing";
import { WomensClothing } from "./pages/women's clothing/women's clothing";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/men's clothing" element={<MensClothing />} />
          <Route path="/women's clothing" element={<WomensClothing />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
