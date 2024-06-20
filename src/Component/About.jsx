import React from "react";
import img1 from "../assets/GettyImages-645381791.webp";
import img2 from "../assets/GettyImages-816101994.webp";
import img3 from "../assets/GettyImages-941303834.webp";
import "../CSS/About.css";

function About() {
  return (
    <div className="section container">
      <div className="row">
        <div className="col-lg-6 nm">
          <img src={img3} alt="" className="q" />
          <img src={img1} alt="" className="w" />
          <img src={img2} alt="" className="e" />
        </div>
        <div className="col-lg-6 sd">
          <h2 className="fg">About the Webinar</h2>
          <p>
            Level up your brand with the latest digital marketing trends. I'm a
            paragraph. Click here to add your own text and edit me. It’s easy.
            Just click “Edit Text” or double click me to add your own content
            and make changes to the font. I’m a great place for you to tell a
            story and let your users know a little more about you.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
