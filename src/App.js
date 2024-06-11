import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/navbar/navbar.tsx";
import Home from "./templates/pages/homepage.template";
import { MensClothing } from "./templates/pages/categoryPage.template";
import { WomensClothing } from "./templates/pages/categoryPage.template";

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
