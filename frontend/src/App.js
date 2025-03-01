import React from "react";
import 'normalize.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Marketplace from "./pages/Marketplace";
import Login from "./pages/Login";
import Signup from "./pages/Signup"; // Import Signup page
import CategoryPage from "./pages/CategoryPage";
import Electronics from "./pages/Electronics";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/marketplace" element={<Marketplace />} />
        <Route path="/category/:name" element={<CategoryPage />} />
        <Route path="/category/electronics" element={<Electronics />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} /> {/* Add Signup Route */}
      </Routes>
    </Router>
  );
};

export default App;
