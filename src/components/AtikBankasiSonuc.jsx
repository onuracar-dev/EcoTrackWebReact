import React from 'react';

function AtikBankasiSonuc({ aramaYapiliyor, filtrelenmisAtiklar }) {
  if (!aramaYapiliyor) return null; // Arama yapılmıyorsa hiçbir şey gösterme

  return (
    <div className="bankBottom" id="aramaSonuclari" style={{ display: 'block' }}>
      <div className="aramaSonuclariKismi">
        {filtrelenmisAtiklar.length > 0 ? (
          filtrelenmisAtiklar.map(function (item, index) {
            return (
              <div className="result-card" key={index}>
                <span className="res-points">{item.points}</span>
                <h4>{item.name}</h4>
                <p>{item.desc}</p>
              </div>
            );
          })
        ) : (
          <div className="result-card" style={{ gridColumn: "1 / -1", textAlign: "center", borderColor: "var(--good-orange)", maxWidth: "100%", width: "100%" }}>
            <h4 style={{ color: "var(--good-orange)" }}>Atık Türü Bulunamadı</h4>
            <p>Lütfen plastik, kağıt, cam veya metal aramayı deneyin.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default AtikBankasiSonuc;
