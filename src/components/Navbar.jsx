import React from 'react';
// Sayfalar arası geçişi sayfa yenilenmeden yapmak için Link bileşenini kullanıyoruz.
// Bulunduğumuz sayfanın yolunu (path) öğrenmek için useLocation kancasını (hook) kullanıyoruz.
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  // useLocation() bize mevcut sayfanın url adresini verir. (Örneğin: "/", "/atikNoktalari" vb.)
  const location = useLocation();
  const currentPath = location.pathname;

  // Bu fonksiyon, eğer menüdeki linkin adresi ile şu an bulunduğumuz sayfanın adresi eşleşiyorsa,
  // o linke "active" sınıfı ekler. Böylece aktif menü öğesi yeşil renkte parlar.
  function getNavLinkClass(path) {
    if (currentPath === path) {
      return "nav-link active";
    }
    return "nav-link";
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top custom-navbar">
      <div className="container-fluid">
        {/* href="index.html" yerine to="/" kullanarak ana sayfaya yönlendiriyoruz */}
        <Link className="navbar-brand logo" to="/">
          <span className="logo-text"></span>
          EcoTrack
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul className="navbar-nav gap-2">
            <li className="nav-item">
              <Link to="/" className={getNavLinkClass("/")}>Ana Sayfa</Link>
            </li>
            <li className="nav-item">
              <Link to="/atikNoktalari" className={getNavLinkClass("/atikNoktalari")}>Atık Noktaları</Link>
            </li>
            <li className="nav-item">
              <Link to="/atikEkle" className={getNavLinkClass("/atikEkle")}>Atık Noktası Ekle</Link>
            </li>
            <li className="nav-item">
              <Link to="/neKurtardim" className={getNavLinkClass("/neKurtardim")}>Ne Kurtardım</Link>
            </li>
            <li className="nav-item">
              <Link to="/atikBankasi" className={getNavLinkClass("/atikBankasi")}>Atık Bankası</Link>
            </li>
            <li className="nav-item">
              <Link to="/hakkimizda" className={getNavLinkClass("/hakkimizda")}>Hakkımızda</Link>
            </li>
            <li className="nav-item">
              <Link to="/ayarlar" className={getNavLinkClass("/ayarlar")}>Ayarlar</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
