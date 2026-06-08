import React from 'react';
import '../assets/css/custom-bank.css';
import '../assets/css/custom-maps.css';
import KartDetayIcerik from '../components/KartDetayIcerik';
import KartDetayHarita from '../components/KartDetayHarita';

function KartDetay3() {
  const coordinates = [41.335, 36.265];

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
              title="Atakum Sahil Geri Dönüşüm"
              tags="Plastik • Cam"
              address="Atakum Sahil Yolu, Samsun"
              hours="08:00 - 18:00"
              parking="Var"
              accessibility="Var"
            />
            <KartDetayHarita 
              center={coordinates}
              title="Atakum Sahil Geri Dönüşüm"
              subtitle="Organik & Gıda Atıkları"
            />

          </div>
        </div>
      </div>
    </main>
  );
}

export default KartDetay3;
