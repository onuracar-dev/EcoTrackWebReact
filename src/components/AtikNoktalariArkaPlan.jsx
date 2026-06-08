import React from 'react';
import mapsVideo from '../assets/videos/maps.mp4';

function AtikNoktalariArkaPlan() {
  return (
    <>
      <div className="pageVideoBg mapsVideoBg">
        <video autoPlay muted loop playsInline>
          <source src={mapsVideo} type="video/mp4" />
        </video>
      </div>
      <div className="pageVideoOverlay"></div>
    </>
  );
}

export default AtikNoktalariArkaPlan;
