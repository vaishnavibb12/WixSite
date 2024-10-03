import React from "react";
import Navbar from "./Component/Navbar";
import "bootstrap/dist/css/bootstrap.css";

import "./CSS/Navbar.css";
import {
  BrowserRouter,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import "../src/index.css";

import Footer from "./Component/Footer";

import AboutUs from "./Pages/AboutUs";
import Home from "./Pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path={"/aboutus"} element={<AboutUs />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
