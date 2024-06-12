import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/navbar/navbar.tsx";
import Home from "./templates/pages/homepage.template.tsx";
import { MensClothing } from "./templates/pages/categoryPage.template.tsx";
import { WomensClothing } from "./templates/pages/categoryPage.template.tsx";

const MensClothingCategory: React.FC = () => {
  return <MensClothing />;
};

const WomensClothingCategory: React.FC = () => {
  return <WomensClothing />;
};

const App: React.FC = () => {
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
};

export default App;
