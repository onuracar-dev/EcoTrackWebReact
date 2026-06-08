import React from 'react';
import '../assets/css/custom-bank.css';
import '../assets/css/custom-maps.css';
import KartDetayIcerik from '../components/KartDetayIcerik';
import KartDetayHarita from '../components/KartDetayHarita';

function KartDetay1() {
  const coordinates = [41.325, 36.275];

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
            <KartDetayIcerik 
              title="Ömürevleri Mobil İstasyon"
              tags="Plastik • Cam • Metal"
              address="Ömürevleri Metro Durağı Yanı, Samsun"
              hours="08:00 - 19:00"
              parking="Yok"
              accessibility="Var"
            />
            <KartDetayHarita 
              center={coordinates}
              title="Ömürevleri Mobil İstasyon"
              subtitle="Cam, Kağıt, Plastik"
            />

          </div>
        </div>
      </div>
    </main>
  );
}

export default KartDetay1;
