import React from "react";
import Navbar from "./Component/Navbar";
import "bootstrap/dist/css/bootstrap.css";

import "./CSS/Navbar.css";
import { BrowserRouter as Router } from "react-router-dom";
import "../src/index.css";
import Slider from "./Component/Slider";
import About from "./Component/About";
import Product from "./Component/Product";
import What from "./Component/What";
import Footer from "./Component/Footer";

function App() {
  return (
    <Router>
      <Navbar />
      <Slider />
      <About />
      <Product />
      <What />
      <Footer />
    </Router>
  );
}

export default App;
