import React from "react";
import "../assets/css/custom-about.css";
import aboutVideo from "../assets/videos/about.mp4";
import HakkimzidaAnaicerik from "../components/hakkimzidaAnaicerik";
import HakkimizdaArkaPlan from "../components/hakkimizdaArkaPlan";

function Hakkimizda() {
  return (
    <>
      <HakkimizdaArkaPlan />
      <HakkimzidaAnaicerik />
    </>
  );
}

export default Hakkimizda;
