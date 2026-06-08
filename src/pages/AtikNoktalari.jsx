import React, { useEffect } from 'react';
// Sayfa değiştirmek için useNavigate kancasını (hook) kullanıyoruz.
import { useNavigate } from 'react-router-dom';
import '../assets/css/custom-maps.css';
import mapsVideo from '../assets/videos/maps.mp4';

function AtikNoktalari() {
  // Yönlendirme yapabilmek için navigate fonksiyonunu tanımlıyoruz.
  const navigate = useNavigate();

  // useEffect: Sayfa ekranda ilk gösterildiğinde haritayı başlatmak için kullanıyoruz.
  useEffect(() => {
    // index.html'de CDN ile yüklediğimiz Leaflet kütüphanesini tarayıcı nesnesi (window) üzerinden alıyoruz.
    const L = window.L;
    if (!L) {
      // Eğer Leaflet henüz yüklenmediyse işlemi sonlandır
      return;
    }

    // Önceki sayfadan kalma bir harita örneği varsa hafızadan temizliyoruz.
    // Bu temizlik yapılmazsa "Map container is already initialized" (Harita zaten başlatılmış) hatası alınır.
    if (window.leafletMapInstance) {
      window.leafletMapInstance.remove();
    }

    // "map" ID'sine sahip div içerisine haritayı yerleştiriyoruz.
    const mapInstance = L.map("map", {
      center: [41.3284, 36.2699], // Haritanın merkez koordinatları
      zoom: 14,                   // Yakınlaştırma derecesi
      zoomControl: false,         // Sol üstteki varsayılan butonları gizle
    });

    // Karanlık harita temasını (CARTO Dark Matter) yüklüyoruz.
    L.tileLayer("https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png", {
      attribution: "&copy; OpenStreetMap &copy; CARTO",
    }).addTo(mapInstance);

    // Kendi özel harita işaretçimizi (pin) oluşturuyoruz.
    const customIcon = L.divIcon({
      className: "custom-map-pin",
      html: '<div class="map-pulse-pin"></div>',
      iconSize: [12, 12],
      iconAnchor: [6, 6],
    });

    // Harita üzerine konum işaretçilerini (Marker) ekliyoruz.
    L.marker([41.332, 36.265], { icon: customIcon })
      .addTo(mapInstance)
      .bindPopup(
        '<b style="color:#000;">Atakum Sahil Geri Dönüşüm</b><br><span style="color:#666;">Organik & Gıda Atıkları</span>'
      );

    L.marker([41.325, 36.275], { icon: customIcon })
      .addTo(mapInstance)
      .bindPopup(
        '<b style="color:#000;">Ömürevleri Mobil İstasyon</b><br><span style="color:#666;">Cam, Kağıt, Plastik</span>'
      );

    L.marker([41.335, 36.265], { icon: customIcon })
      .addTo(mapInstance)
      .bindPopup(
        '<b style="color:#000;">Ömürevleri Mobil İstasyon</b><br><span style="color:#666;">Cam, Kağıt, Plastik</span>'
      );

    // Oluşturduğumuz harita örneğini global değişkene kaydediyoruz.
    window.leafletMapInstance = mapInstance;

    // Temizlik Fonksiyonu (Cleanup Function):
    // Kullanıcı bu sayfadan ayrıldığında (component unmount olduğunda) bu blok tetiklenir
    // ve harita nesnesini hafızadan tamamen siler.
    return () => {
      if (window.leafletMapInstance) {
        window.leafletMapInstance.remove();
        window.leafletMapInstance = null;
      }
    };
  }, []); // Boş dizi [] bu efektin sadece sayfa ilk açıldığında çalışmasını sağlar.

  return (
    <>
      {/* ANA İÇERİK BÖLÜMÜ */}
      <main className="pageMainContent">
        <div className="container">
          <div className="row justify-content-end">
            
            {/* Üst Taraf: Harita Kutusu */}
            <div className="col-lg-8 col-md-10 mb-4 d-flex justify-content-end">
              <div id="map"></div>
            </div>

            {/* Alt Taraf: Lokasyon Detay Listesi */}
            <div className="col-lg-8 col-md-10 d-flex justify-content-end">
              <div className="interaktifPanel mapsPanel">
                <div>
                  <span className="sectionTag">Harita & Konum</span>
                  <h2>Atık Noktaları</h2>
                </div>

                <div className="atikLokasyonListesi">
                  
                  {/* Birinci Lokasyon Kartı */}
                  <div
                    className="atikLokasyonlari"
                    onClick={function() { navigate("/kartDetay"); }}
                    style={{ cursor: 'pointer' }}
                  >
                    <div className="d-flex align-items-center gap-3">
                      <span className="loc-bullet">🌱</span>
                      <div className="atikLokasyonBilgisi">
                        <h3>Atakum Sahil Geri Dönüşüm</h3>
                        <p>Adres: Atakum Sahil Yolu, Samsun</p>
                        <p>Çalışma Saatleri: 08:00 - 18:00</p>
                      </div>
                    </div>
                    <a
                      href="https://www.google.com/maps/search/?api=1&query=41.3320,36.2650"
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-outline-light btn-sm rounded-pill px-3"
                      onClick={function(e) { e.stopPropagation(); }} // Dış link tıklandığında kartın tıklama olayını engellemek için
                    >
                      Haritada Aç
                    </a>
                  </div>

                  {/* İkinci Lokasyon Kartı */}
                  <div
                    className="atikLokasyonlari"
                    onClick={function() { navigate("/kartDetay1"); }}
                    style={{ cursor: 'pointer' }}
                  >
                    <div className="d-flex align-items-center gap-3">
                      <span className="loc-bullet">🌱</span>
                      <div className="atikLokasyonBilgisi">
                        <h3>Ömürevleri Mobil İstasyon</h3>
                        <p>Adres: Ömürevleri Metro Durağı Yanı, Samsun</p>
                        <p>Çalışma Saatleri: 08:00 - 18:00</p>
                      </div>
                    </div>
                    <a
                      href="https://www.google.com/maps/search/?api=1&query=41.3250,36.2750"
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-outline-light btn-sm rounded-pill px-3"
                      onClick={function(e) { e.stopPropagation(); }}
                    >
                      Haritada Aç
                    </a>
                  </div>

                  {/* Üçüncü Lokasyon Kartı */}
                  <div
                    className="atikLokasyonlari"
                    onClick={function() { navigate("/kartDetay3"); }}
                    style={{ cursor: 'pointer' }}
                  >
                    <div className="d-flex align-items-center gap-3">
                      <span className="loc-bullet">🌱</span>
                      <div className="atikLokasyonBilgisi">
                        <h3>Cumhuriyet Atık Noktası</h3>
                        <p>Adres: Cumhuriyet Caddesi, Samsun</p>
                        <p>Çalışma Saatleri: 07:00 - 19:00</p>
                      </div>
                    </div>
                    <a
                      href="https://www.google.com/maps/search/?api=1&query=42.3250,35.2750"
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-outline-light btn-sm rounded-pill px-3"
                      onClick={function(e) { e.stopPropagation(); }}
                    >
                      Haritada Aç
                    </a>
                  </div>

                </div>
              </div>
            </div>

          </div>
        </div>
      </main>

      {/* ARKA PLAN VİDEOSU */}
      <div className="pageVideoBg mapsVideoBg">
        <video autoPlay muted loop playsInline>
          <source src={mapsVideo} type="video/mp4" />
        </video>
      </div>
      <div className="pageVideoOverlay"></div>
    </>
  );
}

export default AtikNoktalari;
