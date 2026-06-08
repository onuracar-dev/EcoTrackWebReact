import React from 'react';
// Yönlendirme (Routing) işlemleri için react-router-dom kütüphanesini kullanıyoruz.
// BrowserRouter: Tarayıcının adres satırını kontrol eder.
// Routes: Bütün yolları (Route) sarmalar.
// Route: Belirli bir adres yolu ile o yolda açılacak olan sayfa bileşenini eşleştirir.
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Her sayfada ortak olan menü (Navbar) ve alt bilgi (Footer) barındıran Layout bileşenimiz
import Layout from './components/Layout';

// Sayfalarımızı tek tek içe aktarıyoruz (import)
import Home from './pages/Home';
import AtikNoktalari from './pages/AtikNoktalari';
import AtikEkle from './pages/AtikEkle';
import NeKurtardim from './pages/NeKurtardim';
import AtikBankasi from './pages/AtikBankasi';
import Hakkimizda from './pages/Hakkimizda';
import Ayarlar from './pages/Ayarlar';
import KartDetay from './pages/KartDetay';
import KartDetay1 from './pages/KartDetay1';
import KartDetay3 from './pages/KartDetay3';

function App() {
  return (
    // Tüm yönlendirme sistemini BrowserRouter ile sarmalıyoruz.
    <BrowserRouter>
      {/* Ortak iskeletimiz olan Layout'u çağırıyoruz. */}
      <Layout>
        {/* Hangi URL yolunda hangi sayfanın açılacağını belirtiyoruz */}
        <Routes>
          {/* 
            Kullanıcıların eski ".html" linklerine tıkladığında da sayfaların düzgün 
            açılması için hem düz yolları hem de ".html" biten yolları aynı bileşene yönlendiriyoruz.
          */}
          
          {/* Ana Sayfa */}
          <Route path="/" element={<Home />} />
          <Route path="/index.html" element={<Home />} />

          {/* Atık Noktaları */}
          <Route path="/atikNoktalari" element={<AtikNoktalari />} />
          <Route path="/atikNoktalari.html" element={<AtikNoktalari />} />

          {/* Atık Ekle */}
          <Route path="/atikEkle" element={<AtikEkle />} />
          <Route path="/atikEkle.html" element={<AtikEkle />} />

          {/* Ne Kurtardım (Tasarruf Hesaplayıcı) */}
          <Route path="/neKurtardim" element={<NeKurtardim />} />
          <Route path="/neKurtardim.html" element={<NeKurtardim />} />

          {/* Atık Bankası */}
          <Route path="/atikBankasi" element={<AtikBankasi />} />
          <Route path="/atikBankasi.html" element={<AtikBankasi />} />

          {/* Hakkımızda */}
          <Route path="/hakkimizda" element={<Hakkimizda />} />
          <Route path="/hakkimizda.html" element={<Hakkimizda />} />

          {/* Ayarlar */}
          <Route path="/ayarlar" element={<Ayarlar />} />
          <Route path="/ayarlar.html" element={<Ayarlar />} />

          {/* Lokasyon Detay Sayfaları */}
          <Route path="/kartDetay" element={<KartDetay />} />
          <Route path="/kartDetay.html" element={<KartDetay />} />

          <Route path="/kartDetay1" element={<KartDetay1 />} />
          <Route path="/kartDetay1.html" element={<KartDetay1 />} />

          <Route path="/kartDetay3" element={<KartDetay3 />} />
          <Route path="/kartDetay3.html" element={<KartDetay3 />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
