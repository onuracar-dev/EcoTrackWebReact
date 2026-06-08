import React from 'react';
import bankVideo from '../assets/videos/bank.mp4';

function AtikBankasiArkaPlan() {
  return (
    <>
      <div className="pageVideoBg bankVideoBg">
        <video autoPlay muted loop playsInline>
          <source src={bankVideo} type="video/mp4" />
        </video>
      </div>
      <div className="pageVideoOverlay"></div>
    </>
  );
}

export default AtikBankasiArkaPlan;
