import React, { useEffect } from 'react';

function KartDetayHarita({ center, title, subtitle }) {
  useEffect(() => {
    const L = window.L;
    if (!L) return;

    if (window.leafletMapInstance) {
      window.leafletMapInstance.remove();
    }

    const mapInstance = L.map("map", {
      center: center,
      zoom: 16,
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

    L.marker(center, { icon: customIcon })
      .addTo(mapInstance)
      .bindPopup(`<b style="color:#000;">${title}</b><br><span style="color:#666;">${subtitle}</span>`);

    window.leafletMapInstance = mapInstance;

    return () => {
      if (window.leafletMapInstance) {
        window.leafletMapInstance.remove();
        window.leafletMapInstance = null;
      }
    };
  }, [center, title, subtitle]);

  return null;
}

export default KartDetayHarita;
