import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/navbar";
import { Home } from "./pages/home/home";
import { MensClothing } from "./pages/men's clothing/mens-clothing";
import { WomensClothing } from "./pages/women's clothing/womens-clothing";

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
          <Route path="/mens-clothing" element={<MensClothingCategory />} />
          <Route path="/womens-clothing" element={<WomensClothingCategory />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
