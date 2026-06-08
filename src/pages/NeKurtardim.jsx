import React, { useState } from 'react';
import '../assets/css/custom-savings.css';
import saveVideo from '../assets/videos/save.mp4';

function NeKurtardim() {
  // Her bir atık türünün miktarını (kg) tutmak için ayrı ayrı state (durum) tanımlıyoruz.
  // Başlangıç değerlerini 0 (sıfır) yapıyoruz.
  const [plastik, setPlastik] = useState(0);
  const [kagit, setKagit] = useState(0);
  const [cam, setCam] = useState(0);
  const [metal, setMetal] = useState(0);

  // Inputlardaki değişimleri yakalamak için olay işleyicileri (event handlers) yazıyoruz.
  // Kullanıcı inputa değer girdiğinde bu fonksiyonlar tetiklenir ve ilgili state'i günceller.
  function handlePlastikChange(event) {
    // Number() fonksiyonu gelen metin değerini sayıya dönüştürür.
    setPlastik(Number(event.target.value));
  }

  function handleKagitChange(event) {
    setKagit(Number(event.target.value));
  }

  function handleCamChange(event) {
    setCam(Number(event.target.value));
  }

  function handleMetalChange(event) {
    setMetal(Number(event.target.value));
  }

  // Hesaplama Mantığı:
  // State'ler her güncellendiğinde, bileşen yeniden çizilir (re-render) ve bu hesaplamalar anlık olarak güncellenir.
  const totalTrees =
    kagit * 0.017 +
    plastik * 0.0001 +
    cam * 0.0002 +
    metal * 0.0003;

  const totalWater =
    plastik * 3 +
    kagit * 26 +
    cam * 1.2 +
    metal * 5;

  const totalCO2 =
    plastik * 0.08 +
    kagit * 0.9 +
    cam * 0.3 +
    metal * 0.5;

  return (
    <>
      {/* ANA İÇERİK BÖLÜMÜ */}
      <main className="pageMainContent">
        <div className="container">
          <div className="row justify-content-start">
            <div className="col-lg-6 col-md-8 col-sm-10">
              <div className="interaktifPanel">
                <div>
                  <span className="sectionTag">Ne Kurtardım</span>
                  <h2>Ekolojik Tasarruf</h2>
                </div>

                <div className="girdiTablosu">
                  <div className="girdiler">
                    <label>Plastik (kg)</label>
                    <input
                      type="number"
                      value={plastik}
                      onChange={handlePlastikChange}
                      min="0"
                    />
                  </div>
                  <div className="girdiler">
                    <label>Kağıt (kg)</label>
                    <input
                      type="number"
                      value={kagit}
                      onChange={handleKagitChange}
                      min="0"
                    />
                  </div>
                  <div className="girdiler">
                    <label>Cam (kg)</label>
                    <input
                      type="number"
                      value={cam}
                      onChange={handleCamChange}
                      min="0"
                    />
                  </div>
                  <div className="girdiler">
                    <label>Metal (kg)</label>
                    <input
                      type="number"
                      value={metal}
                      onChange={handleMetalChange}
                      min="0"
                    />
                  </div>
                </div>

                {/* Tasarruf sonuçları */}
                <div className="canliTasarrufSonuclari">
                  Şu ana kadar doğada tam{" "}
                  {/* toFixed(3): Virgülden sonra en fazla 3 basamak gösterir */}
                  <span className="highlightText">{totalTrees.toFixed(3)}</span> ağaç,{" "}
                  {/* Math.round: Sayıyı en yakın tam sayıya yuvarlar */}
                  <span className="highlightText">{Math.round(totalWater)}</span> litre su ve{" "}
                  {/* toFixed(1): Virgülden sonra 1 basamak gösterir */}
                  <span className="highlightText">{totalCO2.toFixed(1)}</span> kg CO2
                  salınımı engellediniz!
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* ARKA PLAN VİDEOSU */}
      <div className="pageVideoBg saveVideoBg">
        <video autoPlay muted loop playsInline>
          <source src={saveVideo} type="video/mp4" />
        </video>
      </div>
      <div className="pageVideoOverlay"></div>
    </>
  );
}

export default NeKurtardim;
