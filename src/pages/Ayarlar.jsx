import React from 'react';
import '../assets/css/custom-settings.css';
import settingsVideo from '../assets/videos/settings.mp4';

function Ayarlar() {
  // Bu fonksiyon tıklandığında ekrana bir uyarı (alert) penceresi çıkarır.
  function handleAlert(message) {
    alert(message);
  }

  return (
    <>
      {/* ANA İÇERİK BÖLÜMÜ */}
      <main className="pageMainContent">
        <div className="container">
          <div className="row justify-content-end">
            <div className="col-lg-6 col-md-8 col-sm-10">
              <div className="interaktifPanel settingsPanel">
                <div>
                  <span className="sectionTag">Ayarlar</span>
                  <h2>Kişiselleştirme Seçenekleri</h2>
                </div>

                <div className="ayarlarListesi">
                  {/* HTML'deki onclick="alert(...)" yapısını React'in onClick={...} yapısına çevirdik */}
                  <div
                    className="ayarlarItem"
                    onClick={function() { handleAlert('Hesap Bilgilerim yakında aktif olacaktır.'); }}
                    style={{ cursor: 'pointer' }}
                  >
                    <label style={{ cursor: 'pointer' }}>Hesap Bilgilerim</label>
                    <i className="fa-solid fa-chevron-right text-secondary"></i>
                  </div>

                  <div
                    className="ayarlarItem"
                    onClick={function() { handleAlert('Arayüz Tercihleri yakında aktif olacaktır.'); }}
                    style={{ cursor: 'pointer' }}
                  >
                    <label style={{ cursor: 'pointer' }}>Arayüz Tercihleri</label>
                    <i className="fa-solid fa-chevron-right text-secondary"></i>
                  </div>

                  <div
                    className="ayarlarItem"
                    onClick={function() { handleAlert('Oturum ve Güvenlik yakında aktif olacaktır.'); }}
                    style={{ cursor: 'pointer' }}
                  >
                    <label style={{ cursor: 'pointer' }}>Oturum ve Güvenlik</label>
                    <i className="fa-solid fa-chevron-right text-secondary"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* ARKA PLAN VİDEOSU */}
      <div className="pageVideoBg settingsVideoBg">
        <video autoPlay muted loop playsInline>
          <source src={settingsVideo} type="video/mp4" />
        </video>
      </div>
      <div className="pageVideoOverlay"></div>
    </>
  );
}

export default Ayarlar;
