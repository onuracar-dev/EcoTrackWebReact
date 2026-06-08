import React from 'react';

function AtikBankasiHeader({ aramaMetni, onAramaChange }) {
  return (
    <div className="bankTop">
      <span className="sectionTag">Atık Türü Arama</span>
      <h2>Atık Bankası Rehberi</h2>
      <p>Kabul Edilen Atık Türlerini Arayın Ve Yeşil Puanınızı Öğrenin</p>
      <div className="aramaCubugu">
        <input
          type="text"
          value={aramaMetni}
          onChange={onAramaChange}
          placeholder="Atık türünü yazın..."
          autoComplete="off"
        />
      </div>
    </div>
  );
}

export default AtikBankasiHeader;
