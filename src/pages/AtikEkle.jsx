import React, { useState, useEffect } from 'react';
import '../assets/css/custom-maps.css';

function AtikEkle() {
  // Form alanlarındaki verileri takip etmek için React'in useState durumlarını tanımlıyoruz.
  const [atikTuru, setAtikTuru] = useState("Tür seçin");
  const [konum, setKonum] = useState("");
  const [aciklama, setAciklama] = useState("");

  // Haritayı başlatmak için useEffect kullanıyoruz.
  useEffect(() => {
    const L = window.L;
    if (!L) return;

    // Önceki sayfadan kalma harita nesnesini hafızadan siliyoruz.
    if (window.leafletMapInstance) {
      window.leafletMapInstance.remove();
    }

    const mapInstance = L.map("map", {
      center: [41.3284, 36.2699],
      zoom: 14,
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

    window.leafletMapInstance = mapInstance;

    return () => {
      if (window.leafletMapInstance) {
        window.leafletMapInstance.remove();
        window.leafletMapInstance = null;
      }
    };
  }, []);

  // Kaydet butonuna tıklandığında çalışacak fonksiyon
  function handleKaydet() {
    if (atikTuru === "Tür seçin") {
      alert("Lütfen önce bir atık türü seçiniz!");
      return;
    }
    if (konum.trim() === "") {
      alert("Lütfen bir konum arayıp seçiniz!");
      return;
    }

    // Bilgileri bir alert (uyarı) kutusuyla ekrana yazdırıyoruz.
    alert(
      "Atık Noktası Kaydedildi!\n\n" +
      "Tür: " + atikTuru + "\n" +
      "Konum: " + konum + "\n" +
      "Açıklama: " + aciklama
    );

    // Formu temizliyoruz.
    setAtikTuru("Tür seçin");
    setKonum("");
    setAciklama("");
  }

  return (
    <main className="pageMainContent">
      <section className="blog-page">
        <div className="container">
          <div className="row justify-content-end">

            {/* SOL SÜTUN: Harita */}
            <div className="col-lg-7 col-sm-12 col-xs-12">
              <div className="atikEklePanel">
                <div id="map"></div>
              </div>
            </div>

            {/* SAĞ SÜTUN: Form Giriş Alanları */}
            <div className="col-lg-5 col-sm-12 col-xs-12">

              <div className="sidebar-post" style={{ background: '#000', border: '1px solid rgba(255,255,255,0.12)' }}>
                <div className="mapHelperRow">
                  <span className="mapHelperChip">Konum Seçimi</span>
                  <p className="formLead">
                    Haritada eklemek istediğiniz yeri yazın ve Enter'a basın.
                  </p>
                </div>

                {/* Atık Türü Dropdown */}
                <div className="ecoField">
                  <label htmlFor="atikTuru">Atık Türü</label>
                  <select
                    id="atikTuru"
                    className="ecoSelect"
                    value={atikTuru}
                    onChange={function (e) { setAtikTuru(e.target.value); }}
                  >
                    <option>Tür seçin</option>
                    <option>Plastik</option>
                    <option>Cam</option>
                    <option>Kağıt</option>
                    <option>Metal</option>
                    <option>Organik</option>
                  </select>
                </div>

                {/* Konum Arama Alanı */}
                <div className="ecoField">
                  <label htmlFor="konumAra">Konum Seçimi</label>
                  <input
                    id="konumAra"
                    className="ecoInput"
                    type="search"
                    value={konum}
                    onChange={function (e) { setKonum(e.target.value); }}
                    placeholder="Haritada eklemek istediğiniz yerin adını yazın"
                  />
                </div>

                {/* Açıklama Notu */}
                <div className="ecoField">
                  <label htmlFor="atikNotu">Açıklama</label>
                  <textarea
                    id="atikNotu"
                    className="ecoTextarea"
                    value={aciklama}
                    onChange={function (e) { setAciklama(e.target.value); }}
                    placeholder="Çalışma saatleri, adres notu veya ek detayları yazın."
                  ></textarea>
                </div>
              </div>

              {/* Kaydet Butonu */}
              <div className="sidebar-post" style={{ background: '#000', border: '1px solid rgba(255,255,255,0.12)' }}>
                <div className="subscribe">
                  <button type="button" onClick={handleKaydet} className="kaydetBtn">
                    Kaydet
                  </button>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>
    </main>
  );
}

export default AtikEkle;
