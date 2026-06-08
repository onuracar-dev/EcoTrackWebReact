import React from 'react';
import { Link } from 'react-router-dom';

// Sayfaya özel CSS dosyasını import ediyoruz. 
// Bu sayede Vite sadece bu sayfa açıldığında bu stilleri yükler.
import '../assets/css/custom-home.css';

// Arka plandaki video dosyasını Vite'ın asset import özelliğini kullanarak çağırıyoruz.
// Bu sayede Vite, video dosyasının yolunu otomatik olarak ayarlar ve hata oluşmasını engeller.
import homeVideo from '../assets/videos/home.mp4';

function Home() {
  return (
    <>
      {/* ANA İÇERİK BÖLÜMÜ */}
      <main className="pageMainContent">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-md-10 homeContent">
              <h1 className="heroTitle">Gelecek Dönüşümle Başlar</h1>
              <p className="heroSubtitle">
                Atıklarınızı değer katan birer enerjiye dönüştürün
              </p>
              {/* HTML'deki tasarruf.html linki yerine React Router'ın Link bileşeniyle /neKurtardim sayfasına yönlendiriyoruz */}
              <Link to="/neKurtardim" className="homeButton">Tasarrufunu Hesapla</Link>
            </div>
          </div>
        </div>
      </main>

      {/* ARKA PLAN VİDEOSU */}
      <div className="pageVideoBg">
        {/* video elementinin özellikleri: autoplay (otomatik oynat), muted (sessiz), loop (döngüsel), playsInline (mobil uyumlu) */}
        <video autoPlay muted loop playsInline>
          <source src={homeVideo} type="video/mp4" />
        </video>
      </div>
      <div className="pageVideoOverlay"></div>
    </>
  );
}

export default Home;
