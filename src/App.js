import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/navbar";
import { Home } from "./pages/home/home";
import { MensClothing } from "./pages/men's clothing/men's clothing";
import { WomensClothing } from "./pages/women's clothing/women's clothing";

const MensClothingCategory = () => {
  return <MensClothing />;
};

const WomensClothingCategory = () => {
  return <WomensClothing />;
};

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/men's clothing" element={<MensClothingCategory />} />
          <Route
            path="/women's clothing"
            element={<WomensClothingCategory />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
