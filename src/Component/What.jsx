import React, { useState } from "react";
import "../CSS/What.css";
import { PiGreaterThanBold } from "react-icons/pi";
import AOS from "aos";
import "aos/dist/aos.css";
import { MdOutlineClose } from "react-icons/md";
// import registerform from "./registerform";

function What() {
  AOS.init();

  const [isFormOpen, setIsFormOpen] = useState(false);
  const handleOpenForm = () => {
    setIsFormOpen(true);
  };
  const handleCloseForm = () => {
    setIsFormOpen(false);
  };
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

            <button
              type="button"
              class="btn btn-primary"
              onClick={handleOpenForm}
            >
              Register Now
            </button>
            {isFormOpen && (
              <div className="form-container">
                <div className="form-content">
                  <h2>Register</h2>
                  <form>
                    <label>
                      Name:
                      <input type="text" name="name" />
                    </label>
                    <label>
                      Email:
                      <input type="email" name="email" />
                    </label>
                    <button type="submit">Submit</button>
                    <button type="button" onClick={handleCloseForm}>
                      <MdOutlineClose />
                    </button>
                  </form>
                </div>
              </div>
            )}
          </div>
          <div className="col-g-3"></div>
        </div>
      </div>
    </>
  );
}

export default What;
