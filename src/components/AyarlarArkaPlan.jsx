import React from "react";
import settingsVideo from "../assets/videos/settings.mp4";

function AyarlarArkaPlan() {
  return (
    <>
      <div className="pageVideoBg settingsVideoBg">
        <video autoPlay muted loop playsInline>
          <source src={settingsVideo} type="video/mp4" />
        </video>
      </div>
      <div className="pageVideoOverlay"></div>
    </>
  );
}

export default AyarlarArkaPlan;
