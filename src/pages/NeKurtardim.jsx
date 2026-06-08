import React, { useState } from 'react';
import '../assets/css/custom-savings.css';
import NeKurtardimPanel from '../components/NeKurtardimPanel';
import NeKurtardimArkaPlan from '../components/NeKurtardimArkaPlan';

function NeKurtardim() {
  const [plastik, setPlastik] = useState(0);
  const [kagit, setKagit] = useState(0);
  const [cam, setCam] = useState(0);
  const [metal, setMetal] = useState(0);

  // Hesaplama Mantığı
  const totalTrees =
    kagit * 0.017 +
    plastik * 0.0001 +
    cam * 0.0002 +
    metal * 0.0003;

  const totalWater =
    plastik * 3 +
    kagit * 26 +
    cam * 1.2 +
    metal * 5;

  const totalCO2 =
    plastik * 0.08 +
    kagit * 0.9 +
    cam * 0.3 +
    metal * 0.5;

  return (
    <>
      <NeKurtardimPanel 
        plastik={plastik}
        setPlastik={setPlastik}
        kagit={kagit}
        setKagit={setKagit}
        cam={cam}
        setCam={setCam}
        metal={metal}
        setMetal={setMetal}
        totalTrees={totalTrees}
        totalWater={totalWater}
        totalCO2={totalCO2}
      />
      <NeKurtardimArkaPlan />
    </>
  );
}

export default NeKurtardim;
