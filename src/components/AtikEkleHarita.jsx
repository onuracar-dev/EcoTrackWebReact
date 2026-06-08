import React, { useEffect } from 'react';

function AtikEkleHarita() {
  useEffect(() => {
    const L = window.L;
    if (!L) return;

    // Önceki sayfadan kalan haritayı temizle
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

    // Sabit Pin'ler
    L.marker([41.332, 36.265], { icon: customIcon })
      .addTo(mapInstance)
      .bindPopup('<b style="color:#000;">Atakum Sahil Geri Dönüşüm</b><br><span style="color:#666;">Organik & Gıda Atıkları</span>');

    L.marker([41.325, 36.275], { icon: customIcon })
      .addTo(mapInstance)
      .bindPopup('<b style="color:#000;">Ömürevleri Mobil İstasyon</b><br><span style="color:#666;">Cam, Kağıt, Plastik</span>');

    L.marker([41.335, 36.265], { icon: customIcon })
      .addTo(mapInstance)
      .bindPopup('<b style="color:#000;">Ömürevleri Mobil İstasyon</b><br><span style="color:#666;">Cam, Kağıt, Plastik</span>');

    window.leafletMapInstance = mapInstance;

    return () => {
      if (window.leafletMapInstance) {
        window.leafletMapInstance.remove();
        window.leafletMapInstance = null;
      }
    };
  }, []);

  return (
    <div className="col-lg-7 col-sm-12 col-xs-12">
      <div className="atikEklePanel">
        <div id="map"></div>
      </div>
    </div>
  );
}

export default AtikEkleHarita;
