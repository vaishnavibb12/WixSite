import React from "react";
import img3 from "../assets/GettyImages-941303834.webp";
import "../CSS/Product.css";

function Product() {
  return (
    <>
      {" "}
      <div className="container">
        <h2
          style={{
            textAlign: "center",
            padding: "20px",
            fontSize: "42px",
            color: "white",
          }}
        >
          Meet the Speakers
        </h2>
        <div className="row hj justify-content-center">
          <div className="col-md-3 jk floating">
            <img src={img3} alt="" />
            <div className="main">
              <h1 className="hj">jay Corvi</h1>
              <p className="hjj">Head of Digital Marketing</p>
              <h2 className="hjjj">Buzzthrough</h2>
            </div>
          </div>
          <div className="col-md-3 jk floating">
            <img src={img3} alt="" />
            <div className="main">
              <h1 className="hj">jay Corvi</h1>
              <p className="hjj">Head of Digital Marketing</p>
              <h2 className="hjjj">Buzzthrough</h2>
            </div>
          </div>
          <div className="col-md-3 jk floating">
            <img src={img3} alt="" />
            <div className="main">
              <h1 className="hj">jay Corvi</h1>
              <p className="hjj">Head of Digital Marketing</p>
              <h2 className="hjjj">Buzzthrough</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-3"></div>
        <div className="col-lg-6 fg"></div>
        <div className="col-lg-3"></div>
      </div>
    </>
  );
}

export default Product;
