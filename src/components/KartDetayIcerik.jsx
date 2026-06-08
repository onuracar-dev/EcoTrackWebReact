import React from 'react';

function KartDetayIcerik({ title, tags, address, hours, parking, accessibility }) {
  return (
    <div className="bankBottom" style={{ opacity: 1, transform: 'none', maxHeight: 'none', overflow: 'visible' }}>
      <div className="aramaSonuclariKismi">
        <div className="result-card">
          <span className="res-points">{tags}</span>
          <h4>{title}</h4>
          <p>Adres: {address}</p>
          <p>Saat: {hours}</p>
          <p>Otopark: {parking}</p>
          <p>Engelli Rampası: {accessibility}</p>
          <div id="map" style={{ width: '100%', height: '300px' }} className="m-3"></div>
        </div>
      </div>
    </div>
  );
}

export default KartDetayIcerik;
