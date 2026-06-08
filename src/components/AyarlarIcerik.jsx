import React from "react";

function AyarlarIcerik({ onAlert }) {
  return (
    <>
      <main className="pageMainContent">
        <div className="container">
          <div className="row justify-content-end">
            <div className="col-lg-6 col-md-8 col-sm-10">
              <div className="interaktifPanel settingsPanel">
                <div>
                  <span className="sectionTag">Ayarlar</span>
                  <h2>Kişiselleştirme Seçenekleri</h2>
                </div>

                <div className="ayarlarListesi">
                  <div
                    className="ayarlarItem"
                    onClick={function () {
                      onAlert("Hesap Bilgilerim yakında aktif olacaktır.");
                    }}
                    style={{ cursor: "pointer" }}
                  >
                    <label style={{ cursor: "pointer" }}>
                      Hesap Bilgilerim
                    </label>
                    <i className="fa-solid fa-chevron-right text-secondary"></i>
                  </div>

                  <div
                    className="ayarlarItem"
                    onClick={function () {
                      onAlert("Arayüz Tercihleri yakında aktif olacaktır.");
                    }}
                    style={{ cursor: "pointer" }}
                  >
                    <label style={{ cursor: "pointer" }}>
                      Arayüz Tercihleri
                    </label>
                    <i className="fa-solid fa-chevron-right text-secondary"></i>
                  </div>

                  <div
                    className="ayarlarItem"
                    onClick={function () {
                      onAlert(
                        "Oturum ve Güvenlik yakında aktif olacaktır.",
                      );
                    }}
                    style={{ cursor: "pointer" }}
                  >
                    <label style={{ cursor: "pointer" }}>
                      Oturum ve Güvenlik
                    </label>
                    <i className="fa-solid fa-chevron-right text-secondary"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default AyarlarIcerik;
