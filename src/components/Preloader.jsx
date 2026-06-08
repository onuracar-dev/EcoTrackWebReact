import React, { useState, useEffect } from 'react';

function Preloader() {
  // isVisible: Preloader'ın görünürlük durumu (opaklık/opacity kontrolü için)
  const [isVisible, setIsVisible] = useState(true);
  // isRendered: Preloader'ın ekranda çizilip çizilmeyeceği (tamamen kaldırmak/display none için)
  const [isRendered, setIsRendered] = useState(true);

  // useEffect: Bileşen ekrana ilk yüklendiğinde (mount olduğunda) bir kez çalışacak kod bloğu
  useEffect(() => {
    // 1. Adım: 800 milisaniye sonra opaklığı 0 yapıyoruz (CSS geçişi tetiklenir)
    const fadeTimeout = setTimeout(() => {
      setIsVisible(false);
    }, 800);

    // 2. Adım: 1300 milisaniye sonra bileşeni ekrandan tamamen kaldırıyoruz
    const removeTimeout = setTimeout(() => {
      setIsRendered(false);
    }, 1300);

    // Temizlik fonksiyonu: Zamanlayıcıların tarayıcı hafızasında birikmemesi için temizlik yapıyoruz
    return () => {
      clearTimeout(fadeTimeout);
      clearTimeout(removeTimeout);
    };
  }, []); // Boş dizi [] bu efektin sadece 1 kez sayfa açılışında çalışmasını sağlar

  // Eğer ekrandan tamamen kaldırıldıysa hiçbir şey gösterme
  if (isRendered === false) {
    return null;
  }

  // Preloader'ın animasyonlu yumuşak geçişi için inline stiller kullanıyoruz
  const preloaderStyle = {
    transition: 'opacity 0.5s ease',
    opacity: isVisible ? 1 : 0
  };

  return (
    <div className="preloaders" style={preloaderStyle}>
      <span className="loader"></span>
    </div>
  );
}

export default Preloader;
