import React from 'react';

function AtikEkleForm({ 
  atikTuru, setAtikTuru, 
  konum, setKonum, 
  aciklama, setAciklama, 
  onKaydet 
}) {
  return (
    <div className="col-lg-5 col-sm-12 col-xs-12">
      <div className="sidebar-post" style={{ background: '#000', border: '1px solid rgba(255,255,255,0.12)' }}>
        <div className="mapHelperRow">
          <span className="mapHelperChip">Konum Seçimi</span>
          <p className="formLead">Haritada eklemek istediğiniz yeri yazın ve Enter'a basın.</p>
        </div>

        {/* Atık Türü Dropdown */}
        <div className="ecoField">
          <label htmlFor="atikTuru">Atık Türü</label>
          <select
            id="atikTuru"
            className="ecoSelect"
            value={atikTuru}
            onChange={(e) => setAtikTuru(e.target.value)}
          >
            <option>Tür seçin</option>
            <option>Plastik</option>
            <option>Cam</option>
            <option>Kağıt</option>
            <option>Metal</option>
            <option>Organik</option>
          </select>
        </div>

        {/* Konum Arama Alanı */}
        <div className="ecoField">
          <label htmlFor="konumAra">Konum Seçimi</label>
          <input
            id="konumAra"
            className="ecoInput"
            type="search"
            value={konum}
            onChange={(e) => setKonum(e.target.value)}
            placeholder="Haritada eklemek istediğiniz yerin adını yazın"
          />
        </div>

        {/* Açıklama Notu */}
        <div className="ecoField">
          <label htmlFor="atikNotu">Açıklama</label>
          <textarea
            id="atikNotu"
            className="ecoTextarea"
            value={aciklama}
            onChange={(e) => setAciklama(e.target.value)}
            placeholder="Çalışma saatleri, adres notu veya ek detayları yazın."
          ></textarea>
        </div>
      </div>

      {/* Kaydet Butonu */}
      <div className="sidebar-post" style={{ background: '#000', border: '1px solid rgba(255,255,255,0.12)' }}>
        <div className="subscribe">
          <button type="button" onClick={onKaydet} className="kaydetBtn">
            Kaydet
          </button>
        </div>
      </div>
    </div>
  );
}

export default AtikEkleForm;
