import React, { useState } from 'react';
import '../assets/css/custom-bank.css';
import bankVideo from '../assets/videos/bank.mp4';

// Atık veritabanı (Verileri bileşenin dışında tanımlıyoruz çünkü statik bir veri)
const wasteDatabase = [
  {
    name: "Pet Şişe",
    category: "plastik",
    points: "15 Puan/Adet",
    desc: "Plastik su/alkolsüz içecek şişeleri ve kapakları.",
  },
  {
    name: "Naylon Poşet",
    category: "plastik",
    points: "5 Puan/Adet",
    desc: "Yırtılmamış temiz market poşetleri.",
  },
  {
    name: "Karton Koli",
    category: "kağıt",
    points: "25 Puan/Kg",
    desc: "Kuru, katlanmış temiz karton kutular.",
  },
  {
    name: "Gazete & Defter",
    category: "kağıt",
    points: "20 Puan/Kg",
    desc: "Okunmuş gazeteler, eski okul defterleri.",
  },
  {
    name: "Cam Kavanoz",
    category: "cam",
    points: "20 Puan/Adet",
    desc: "Temizlenmiş boş cam kavanozlar.",
  },
  {
    name: "Maden Suyu Şişesi",
    category: "cam",
    points: "15 Puan/Adet",
    desc: "Kırılmamış yeşil/beyaz cam içecek şişeleri.",
  },
  {
    name: "Alüminyum Kutu",
    category: "metal",
    points: "30 Puan/Adet",
    desc: "Alüminyum içecek kutuları.",
  },
  {
    name: "Konserve Kutusu",
    category: "metal",
    points: "25 Puan/Adet",
    desc: "Temiz yıkanmış konserve ve salça tenekeleri.",
  },
];

function AtikBankasi() {
  // Arama çubuğuna yazılan metni tutmak için state
  const [aramaMetni, setAramaMetni] = useState("");

  // Arama girdisi değiştikçe tetiklenen fonksiyon
  function handleAramaChange(event) {
    setAramaMetni(event.target.value);
  }

  // Arama metni temizlenip boşluklar atıldıktan sonra küçük harflere çevrilir
  const temizAramaMetni = aramaMetni.trim().toLowerCase();

  // Eğer arama kutusu doluysa, veritabanındaki eşleşen öğeleri filtrele
  const filtrelenmisAtiklar = wasteDatabase.filter(function (item) {
    const isim = item.name.toLowerCase();
    const kategori = item.category.toLowerCase();
    return isim.includes(temizAramaMetni) || kategori.includes(temizAramaMetni);
  });

  // Arama yapılıyor mu (metin girilmiş mi) kontrolü
  const aramaYapiliyor = temizAramaMetni.length > 0;

  return (
    <>
      {/* 
        Eğer arama yapılıyorsa CSS dosyasındaki özel geçiş animasyonları için 
        main etiketine "searching" sınıfını ekliyoruz.
      */}
      <main
        className={aramaYapiliyor ? "pageMainContent searching" : "pageMainContent"}
        id="atikAramaContainer"
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10 col-md-12 bankDuzen">
              <div className="bankTop">
                <span className="sectionTag">Atık Türü Arama</span>
                <h2>Atık Bankası Rehberi</h2>
                <p>
                  Kabul Edilen Atık Türlerini Arayın Ve Yeşil Puanınızı Öğrenin
                </p>

                <div className="aramaCubugu">
                  <input
                    type="text"
                    value={aramaMetni}
                    onChange={handleAramaChange}
                    placeholder="Atık türünü yazın..."
                    autoComplete="off"
                  />
                </div>
              </div>

              {/* Arama yapılıyorsa sonuç listesini ekranda göster */}
              {aramaYapiliyor && (
                <div className="bankBottom" id="aramaSonuclari" style={{ display: 'block' }}>
                  <div className="aramaSonuclariKismi">
                    {/* Eşleşen sonuç varsa map() ile listele */}
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
                      // Eşleşen sonuç yoksa uyarı kartı göster
                      <div
                        className="result-card"
                        style={{
                          gridColumn: "1 / -1",
                          textAlign: "center",
                          borderColor: "var(--good-orange)",
                          maxWidth: "100%",
                          width: "100%"
                        }}
                      >
                        <h4 style={{ color: "var(--good-orange)" }}>Atık Türü Bulunamadı</h4>
                        <p>Lütfen plastik, kağıt, cam veya metal aramayı deneyin.</p>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      {/* ARKA PLAN VİDEOSU */}
      <div className="pageVideoBg bankVideoBg">
        <video autoPlay muted loop playsInline>
          <source src={bankVideo} type="video/mp4" />
        </video>
      </div>
      <div className="pageVideoOverlay"></div>
    </>
  );
}

export default AtikBankasi;
