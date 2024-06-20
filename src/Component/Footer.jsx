import React from "react";
import "../CSS/Footer.css";
import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaInstagramSquare } from "react-icons/fa";

function Footer() {
  return (
    <div className="section df">
      <div className="container-xxl">
        <div className="row">
          <div className="col-lg-4">
            <h1 style={{ color: "white" }}>
              Stay in <br />
              the Know
            </h1>
          </div>
          <div className="col-lg-8">
            <div className="kl">
              <div className="kdl">
                <h2 style={{ color: "white" }}> Join our mailing list</h2>
                <p style={{ fontSize: "16px" }}>Email*</p>
                <div className="ghf"></div>
              </div>
              <button type="button" class="btn btn-primary">
                Sign Up
              </button>
            </div>
          </div>
        </div>
        <div className="asd">
          <div className="w1">
            <h1 style={{ color: "white" }}>Buzzthrough</h1>
            <p style={{ fontSize: "16px" }}>
              For any questions please
              <br /> email info@mysite.com
            </p>
          </div>
          <div className="w11">
            <p style={{ fontSize: "16px" }}>Visit our website</p>
            <div className="jo">
              <FaFacebook />
              <AiFillTwitterCircle />
              <FaInstagramSquare />
            </div>
          </div>
          <div className="w21">
            <p style={{ fontSize: "16px" }}>
              500 Terry Francine Street <br /> San Francisco, CA 94158
            </p>
          </div>
        </div>
        <div className="wer">
          <p style={{ fontSize: "16px" }} ś>
            © 2035 by Buzzthrough. Powered and secured by Vaish
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
