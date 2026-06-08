import React from 'react';
import Preloader from './Preloader';
import Navbar from './Navbar';
import Footer from './Footer';

// Bu bileşen, içine aldığı tüm sayfaları (children) ortak Navbar ve Footer ile sarmalar.
// props olarak gelen "children" değişkeni, o an gösterilmekte olan sayfa içeriğidir.
function Layout({ children }) {
  return (
    <>
      {/* Sayfa açılışındaki animasyonlu yükleyici */}
      <Preloader />

      {/* Üst Menü */}
      <Navbar />

      {/* Aktif sayfa içeriği buraya yerleşir */}
      {children}

      {/* Alt Bilgi */}
      <Footer />
    </>
  );
}

export default Layout;
