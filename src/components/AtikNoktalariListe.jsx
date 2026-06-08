import React from 'react';
import { useNavigate } from 'react-router-dom';

function AtikNoktalariListe() {
  const navigate = useNavigate();

  return (
    <div className="col-lg-8 col-md-10 d-flex justify-content-end">
      <div className="interaktifPanel mapsPanel">
        <div>
          <span className="sectionTag">Harita & Konum</span>
          <h2>Atık Noktaları</h2>
        </div>

        <div className="atikLokasyonListesi">
          {/* Birinci Lokasyon Kartı */}
          <div className="atikLokasyonlari" onClick={() => navigate("/kartDetay")} style={{ cursor: 'pointer' }}>
            <div className="d-flex align-items-center gap-3">
              <span className="loc-bullet">🌱</span>
              <div className="atikLokasyonBilgisi">
                <h3>Atakum Sahil Geri Dönüşüm</h3>
                <p>Adres: Atakum Sahil Yolu, Samsun</p>
                <p>Çalışma Saatleri: 08:00 - 18:00</p>
              </div>
            </div>
            <a href="https://www.google.com/maps/search/?api=1&query=41.3320,36.2650" target="_blank" rel="noreferrer" className="btn btn-outline-light btn-sm rounded-pill px-3" onClick={(e) => e.stopPropagation()}>
              Haritada Aç
            </a>
          </div>

          {/* İkinci Lokasyon Kartı */}
          <div className="atikLokasyonlari" onClick={() => navigate("/kartDetay1")} style={{ cursor: 'pointer' }}>
            <div className="d-flex align-items-center gap-3">
              <span className="loc-bullet">🌱</span>
              <div className="atikLokasyonBilgisi">
                <h3>Ömürevleri Mobil İstasyon</h3>
                <p>Adres: Ömürevleri Metro Durağı Yanı, Samsun</p>
                <p>Çalışma Saatleri: 08:00 - 18:00</p>
              </div>
            </div>
            <a href="https://www.google.com/maps/search/?api=1&query=41.3250,36.2750" target="_blank" rel="noreferrer" className="btn btn-outline-light btn-sm rounded-pill px-3" onClick={(e) => e.stopPropagation()}>
              Haritada Aç
            </a>
          </div>

          {/* Üçüncü Lokasyon Kartı */}
          <div className="atikLokasyonlari" onClick={() => navigate("/kartDetay3")} style={{ cursor: 'pointer' }}>
            <div className="d-flex align-items-center gap-3">
              <span className="loc-bullet">🌱</span>
              <div className="atikLokasyonBilgisi">
                <h3>Cumhuriyet Atık Noktası</h3>
                <p>Adres: Cumhuriyet Caddesi, Samsun</p>
                <p>Çalışma Saatleri: 07:00 - 19:00</p>
              </div>
            </div>
            <a href="https://www.google.com/maps/search/?api=1&query=42.3250,35.2750" target="_blank" rel="noreferrer" className="btn btn-outline-light btn-sm rounded-pill px-3" onClick={(e) => e.stopPropagation()}>
              Haritada Aç
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AtikNoktalariListe;
