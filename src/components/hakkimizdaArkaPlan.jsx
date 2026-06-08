import React from "react";
import aboutVideo from "../assets/videos/about.mp4";

function HakkimzidaAnaicerik() {
  return (
    <>
      {/* ARKA PLAN VİDEOSU */}
      <div className="pageVideoBg aboutVideoBg">
        <video autoPlay muted loop playsInline>
          <source src={aboutVideo} type="video/mp4" />
        </video>
      </div>
      <div className="pageVideoOverlay"></div>
    </>
  );
}

export default HakkimzidaAnaicerik;
