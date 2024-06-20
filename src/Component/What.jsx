import React from "react";
import "../CSS/What.css";
import { PiGreaterThanBold } from "react-icons/pi";
import AOS from "aos";
import "aos/dist/aos.css";

function What() {
  AOS.init();
  return (
    <>
      <div className="section container" data-aos="flip-left">
        <div className="row">
          <div className="col-lg-12">
            <h2
              style={{
                textAlign: "center",
                color: "white",
                fontSize: "46px",
                fontWeight: "600",
                padding: "0px 0px 40px 0px",
              }}
            >
              What You Will Learn
            </h2>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 wht">
            <PiGreaterThanBold />
            <h2 className="we">01</h2>
            <h3 className="ew">
              Branding strategies in the age of the metaverse
            </h3>
          </div>
          <div className="col-lg-4 wht1">
            <PiGreaterThanBold />
            <h2 className="we">02</h2>
            <h3 className="ew">
              Branding strategies in the age of the metaverse
            </h3>
          </div>
          <div className="col-lg-4 wht2">
            <PiGreaterThanBold />
            <h2 className="we">03</h2>
            <h3 className="ew">
              Branding strategies in the age of the metaverse
            </h3>
          </div>
        </div>
        <div className="row gh">
          <div className="col-g-3"></div>
          <div className="col-g-6 bn">
            <h2>Ready to create a buzz?</h2>

            <button type="button" class="btn btn-primary">
              Register Now
            </button>
          </div>
          <div className="col-g-3"></div>
        </div>
      </div>
    </>
  );
}

export default What;
