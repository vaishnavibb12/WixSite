import React from "react";
import "../CSS/Slider.css";
import video from "../assets/com--unscreen.gif";

function Slider() {
  return (
    <div className="section container">
      <div className="row">
        <div className="col-lg-11">
          <h1 className="sd">The Future of Digital Marketing</h1>
        </div>
        <div className="vb">
          <div className="col-lg-3">
            <span className="df">Trends and Forecasts for 2035 and Beyond</span>
          </div>

          <div className="col-lg-3">
            <button type="button" class="btn btn-primary">
              Register Now
            </button>
          </div>
        </div>
      </div>

      {/* ------- */}
      <div className="row">
        <div className="vvb">
          <div className="col-lg-12 vd">
            <img src={video} alt="" />
            <div className="as">
              <span>Live Webinar, 5 Nov 2035, 6pm - 8pm</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Slider;
