import React from "react";
import { Routes, Route } from "react-router-dom";
import Slider from "../Component/Slider";
import Product from "../Component/Product";
import About from "../Component/About";
import What from "../Component/What";

const Home = () => {
  return (
    <>
      <Slider />
      <About />
      <Product />
      <What />
    </>
  );
};

export default Home;
