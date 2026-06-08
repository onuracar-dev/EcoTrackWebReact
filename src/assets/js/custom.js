// Preloader Auto-Hide on Load
window.addEventListener("load", function () {
  const preloader = document.querySelector(".preloaders");
  if (preloader) {
    setTimeout(function () {
      preloader.style.transition = "opacity 0.5s ease";
      preloader.style.opacity = 0;
      setTimeout(function () {
        preloader.style.display = "none";
      }, 500);
    }, 800);
  }
});

// Active Navbar Highlighting & Page Initializations
document.addEventListener("DOMContentLoaded", function () {
  // Highlight active link in the navigation
  const currentPath = window.location.pathname;
  const navLinks = document.querySelectorAll(".custom-navbar .nav-link");
  navLinks.forEach((link) => {
    const href = link.getAttribute("href");
    if (
      currentPath.endsWith(href) ||
      (href === "index.html" &&
        (currentPath.endsWith("/") || currentPath.endsWith("/index.html")))
    ) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });

  // Page Specific Initializations
  // 1. Atık Noktaları Map Page
  if (document.getElementById("map")) {
    initLeafletMap();
  }

  // 2. Ne Kurtardım Calculator Page
  const inputs = ["plastikInput", "kagıtInput", "camInput", "metalInput"];
  let hasInputs = false;
  inputs.forEach((id) => {
    const el = document.getElementById(id);
    if (el) {
      el.addEventListener("input", hesaplaTasarruf);
      hasInputs = true;
    }
  });
  if (hasInputs) {
    hesaplaTasarruf();
  }

  // 3. Atık Bankası Page
  const searchEl = document.getElementById("atikAramasi");
  if (searchEl) {
    searchEl.addEventListener("input", filtreleAtikBankasi);
  }

  // 4. Ayarlar Page Settings
  const toggleBtns = document.querySelectorAll(".toggleBtn");
  toggleBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      toggleSetting(this);
    });
  });

  const saveBtn = document.querySelector(".settingsSaveBtn");
  if (saveBtn) {
    saveBtn.addEventListener("click", function () {
      const originalText = saveBtn.textContent;
      saveBtn.textContent = "Tercihler Kaydedildi! ✓";
      saveBtn.style.background = "#ffffff";
      saveBtn.style.color = "#000000";

      setTimeout(function () {
        saveBtn.textContent = originalText;
        saveBtn.style.background = "var(--neon-green)";
        saveBtn.style.color = "#000000";
      }, 2000);
    });
  }
});

// Map Initialization Function
function initLeafletMap() {
  const mapEl = document.getElementById("map");
  if (!mapEl) return;

  const lat = parseFloat(mapEl.getAttribute("data-lat")) || 41.3284;
  const lng = parseFloat(mapEl.getAttribute("data-lng")) || 36.2699;
  const zoom = parseInt(mapEl.getAttribute("data-zoom")) || 14;


  window.leafletMapInstance = L.map("map", {
    center: [lat, lng],
    zoom: zoom,
    zoomControl: false,
  });

  L.tileLayer("https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png", {
    attribution: "&copy; OpenStreetMap &copy; CARTO",
  }).addTo(window.leafletMapInstance);

  const customIcon = L.divIcon({
    className: "custom-map-pin",
    html: '<div class="map-pulse-pin"></div>',
    iconSize: [12, 12],
    iconAnchor: [6, 6],
  });

  L.marker([41.332, 36.265], { icon: customIcon })
    .addTo(window.leafletMapInstance)
    .bindPopup(
      '<b style="color:#000;">Atakum Sahil Geri Dönüşüm</b><br><span style="color:#666;">Organik & Gıda Atıkları</span>',
    );

  L.marker([41.325, 36.275], { icon: customIcon })
    .addTo(window.leafletMapInstance)
    .bindPopup(
      '<b style="color:#000;">Ömürevleri Mobil İstasyon</b><br><span style="color:#666;">Cam, Kağıt, Plastik</span>',
    );

  L.marker([41.335, 36.265], { icon: customIcon })
    .addTo(window.leafletMapInstance)
    .bindPopup(
      '<b style="color:#000;">Ömürevleri Mobil İstasyon</b><br><span style="color:#666;">Cam, Kağıt, Plastik</span>',
    );
}

// Savings Calculator Function
function hesaplaTasarruf() {
  const plasticInput = document.getElementById("plastikInput");
  const paperInput = document.getElementById("kagıtInput");
  const glassInput = document.getElementById("camInput");
  const metalInput = document.getElementById("metalInput");

  if (!plasticInput) return;

  const plasticCount = Number(plasticInput.value) || 0;
  const paperKg = Number(paperInput.value) || 0;
  const glassCount = Number(glassInput.value) || 0;
  const metalCount = Number(metalInput.value) || 0;

  const totalTrees =
    paperKg * 0.017 +
    plasticCount * 0.0001 +
    glassCount * 0.0002 +
    metalCount * 0.0003;
  const totalWater =
    plasticCount * 3 + paperKg * 26 + glassCount * 1.2 + metalCount * 5;
  const totalCO2 =
    plasticCount * 0.08 + paperKg * 0.9 + glassCount * 0.3 + metalCount * 0.5;

  const agacSayisiEl = document.getElementById("agacSayisi");
  const suMiktariEl = document.getElementById("suMiktari");
  const co2MiktariEl = document.getElementById("co2Miktari");

  if (agacSayisiEl) agacSayisiEl.textContent = totalTrees.toFixed(3);
  if (suMiktariEl) suMiktariEl.textContent = Math.round(totalWater);
  if (co2MiktariEl) co2MiktariEl.textContent = totalCO2.toFixed(1);
}

// Waste Bank Filter database & logic
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

function filtreleAtikBankasi() {
  const searchInputEl = document.getElementById("atikAramasi");
  if (!searchInputEl) return;

  const searchInput = searchInputEl.value.trim().toLowerCase();
  const searchContainer = document.getElementById("atikAramaContainer");
  const resultsGrid = document.getElementById("aramaSonuclari");

  if (searchInput.length > 0) {
    searchContainer.classList.add("searching");
    let resultsHtml = '<div class="aramaSonuclariKismi">';
    let foundAny = false;

    for (let i = 0; i < wasteDatabase.length; i++) {
      const item = wasteDatabase[i];
      if (
        item.name.toLowerCase().includes(searchInput) ||
        item.category.toLowerCase().includes(searchInput)
      ) {
        foundAny = true;
        resultsHtml +=
          '<div class="result-card">' +
          '<span class="res-points">' +
          item.points +
          "</span>" +
          "<h4>" +
          item.name +
          "</h4>" +
          "<p>" +
          item.desc +
          "</p>" +
          "</div>";
      }
    }
    resultsHtml += "</div>";

    if (foundAny) {
      resultsGrid.innerHTML = resultsHtml;
    } else {
      resultsGrid.innerHTML =
        '<div class="result-card" style="grid-column: 1 / -1; text-align: center; border-color: var(--good-orange); max-width: 100%; width: 100%;">' +
        '<h4 style="color: var(--good-orange);">Atık Türü Bulunamadı</h4>' +
        "<p>Lütfen plastik, kağıt, cam veya metal aramayı deneyin.</p>" +
        "</div>";
    }
  } else {
    searchContainer.classList.remove("searching");
    resultsGrid.innerHTML = "";
  }
}

// Toggle settings
function toggleSetting(button) {
  button.classList.toggle("active");
  if (button.classList.contains("active")) {
    button.textContent = "Aktif";
  } else {
    button.textContent = "Pasif";
  }
}
