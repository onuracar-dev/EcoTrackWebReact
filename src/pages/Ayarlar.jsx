import React from "react";
import "../assets/css/custom-settings.css";
import settingsVideo from "../assets/videos/settings.mp4";
import AyarlarArkaPlan from "../components/AyarlarArkaPlan";
import AyarlarIcerik from "../components/AyarlarIcerik";

function Ayarlar() {
  function handleAlert(message) {
    alert(message);
  }

  return (
    <>
      <AyarlarArkaPlan />
      <AyarlarIcerik onAlert={handleAlert} />
    </>
  );
}

export default Ayarlar;
