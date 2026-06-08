import React, { useState } from 'react';
import '../assets/css/custom-bank.css';

import AtikBankasiHeader from '../components/AtikBankasiHeader';
import AtikBankasiSonuc from '../components/AtikBankasiSonuc';
import AtikBankasiArkaPlan from '../components/AtikBankasiArkaPlan';

const wasteDatabase = [ /* ... atık verileri ... */ ];

function AtikBankasi() {
  const [aramaMetni, setAramaMetni] = useState("");

  function handleAramaChange(event) {
    setAramaMetni(event.target.value);
  }

  const temizAramaMetni = aramaMetni.trim().toLowerCase();
  const filtrelenmisAtiklar = wasteDatabase.filter(function (item) {
    const isim = item.name.toLowerCase();
    const kategori = item.category.toLowerCase();
    return isim.includes(temizAramaMetni) || kategori.includes(temizAramaMetni);
  });

  const aramaYapiliyor = temizAramaMetni.length > 0;

  return (
    <>
      <main className={aramaYapiliyor ? "pageMainContent searching" : "pageMainContent"}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10 col-md-12 bankDuzen">
              <AtikBankasiHeader 
                aramaMetni={aramaMetni} 
                onAramaChange={handleAramaChange} 
              />
              <AtikBankasiSonuc 
                aramaYapiliyor={aramaYapiliyor} 
                filtrelenmisAtiklar={filtrelenmisAtiklar} 
              />

            </div>
          </div>
        </div>
      </main>
      <AtikBankasiArkaPlan />
    </>
  );
}

export default AtikBankasi;
