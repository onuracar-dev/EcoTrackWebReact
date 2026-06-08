import React, { useState } from 'react';
import '../assets/css/custom-maps.css';

import AtikEkleHarita from '../components/AtikEkleHarita';
import AtikEkleForm from '../components/AtikEkleForm';

function AtikEkle() {
  const [atikTuru, setAtikTuru] = useState("Tür seçin");
  const [konum, setKonum] = useState("");
  const [aciklama, setAciklama] = useState("");

  function handleKaydet() {
    if (atikTuru === "Tür seçin") {
      alert("Lütfen önce bir atık türü seçiniz!");
      return;
    }
    if (konum.trim() === "") {
      alert("Lütfen bir konum arayıp seçiniz!");
      return;
    }

    alert(
      "Atık Noktası Kaydedildi!\n\n" +
      "Tür: " + atikTuru + "\n" +
      "Konum: " + konum + "\n" +
      "Açıklama: " + aciklama
    );
    setAtikTuru("Tür seçin");
    setKonum("");
    setAciklama("");
  }

  return (
    <main className="pageMainContent">
      <section className="blog-page">
        <div className="container">
          <div className="row justify-content-end">
            <AtikEkleHarita />
            <AtikEkleForm 
              atikTuru={atikTuru}
              setAtikTuru={setAtikTuru}
              konum={konum}
              setKonum={setKonum}
              aciklama={aciklama}
              setAciklama={setAciklama}
              onKaydet={handleKaydet}
            />

          </div>
        </div>
      </section>
    </main>
  );
}

export default AtikEkle;
