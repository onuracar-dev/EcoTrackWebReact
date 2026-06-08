import React, { useEffect } from 'react';
import '../assets/css/custom-bank.css';
import '../assets/css/custom-maps.css';

function KartDetay() {
  useEffect(() => {
    const L = window.L;
    if (!L) return;

    // Harita yenilenirken eski örnek kalmasın diye temizlik
    if (window.leafletMapInstance) {
      window.leafletMapInstance.remove();
    }

    // Haritayı Atakum Sahil Geri Dönüşüm koordinatlarında (41.3320, 36.2650) başlatıyoruz.
    const mapInstance = L.map("map", {
      center: [41.3320, 36.2650],
      zoom: 16,
      zoomControl: false,
    });

    L.tileLayer("https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png", {
      attribution: "&copy; OpenStreetMap &copy; CARTO",
    }).addTo(mapInstance);

    const customIcon = L.divIcon({
      className: "custom-map-pin",
      html: '<div class="map-pulse-pin"></div>',
      iconSize: [12, 12],
      iconAnchor: [6, 6],
    });

    // Bu konuma bir işaretçi koyuyoruz
    L.marker([41.3320, 36.2650], { icon: customIcon })
      .addTo(mapInstance)
      .bindPopup(
        '<b style="color:#000;">Atakum Sahil Geri Dönüşüm</b><br><span style="color:#666;">Organik & Gıda Atıkları</span>'
      );

    window.leafletMapInstance = mapInstance;

    return () => {
      if (window.leafletMapInstance) {
        window.leafletMapInstance.remove();
        window.leafletMapInstance = null;
      }
    };
  }, []);

  return (
    <main className="pageMainContent" id="atikAramaContainer">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10 col-md-12 bankDuzen">
            <div className="bankTop">
              <span className="sectionTag">Konum Detayları</span>
              <h2>Seçilen Kartın Detayları</h2>
              <p>
                Kartlarda adres, kabul edilen atık türleri, çalışma saatleri,
                otopark durumu, engelli rampası, harita konumu gibi bilgiler yer
                alır.
              </p>
            </div>

            <div className="bankBottom" style={{ opacity: 1, transform: 'none', maxHeight: 'none', overflow: 'visible' }}>
              <div className="aramaSonuclariKismi">
                <div className="result-card">
                  <span className="res-points">Plastik • Cam • Metal</span>
                  <h4>Atakum Sahil Geri Dönüşüm</h4>
                  <p>Adres: Atakum Sahil Yolu, Samsun</p>
                  <p>Saat: 08:00 - 18:00</p>
                  <p>Otopark: Var</p>
                  <p>Engelli Rampası: Var</p>
                  <div id="map" style={{ width: '100%', height: '300px' }} className="m-3"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default KartDetay;
