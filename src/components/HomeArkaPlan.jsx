import React from 'react';
import homeVideo from '../assets/videos/home.mp4';

function HomeArkaPlan() {
  return (
    <>
      <div className="pageVideoBg">
        <video autoPlay muted loop playsInline>
          <source src={homeVideo} type="video/mp4" />
        </video>
      </div>
      <div className="pageVideoOverlay"></div>
    </>
  );
}

export default HomeArkaPlan;
