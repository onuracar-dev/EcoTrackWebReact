import React from 'react';
import saveVideo from '../assets/videos/save.mp4';

function NeKurtardimArkaPlan() {
  return (
    <>
      <div className="pageVideoBg saveVideoBg">
        <video autoPlay muted loop playsInline>
          <source src={saveVideo} type="video/mp4" />
        </video>
      </div>
      <div className="pageVideoOverlay"></div>
    </>
  );
}

export default NeKurtardimArkaPlan;
