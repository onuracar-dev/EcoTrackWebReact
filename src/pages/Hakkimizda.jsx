import React from 'react';
import '../assets/css/custom-about.css';
import aboutVideo from '../assets/videos/about.mp4';

function Hakkimizda() {
  return (
    <>
      {/* ANA İÇERİK BÖLÜMÜ */}
      <main className="pageMainContent">
        <div className="container">
          <div className="row justify-content-start">
            <div className="col-lg-7 col-md-9">
              <div className="row mb-5 text-start">
                <div className="col-12">
                  <span className="sectionTag">Hakkımızda</span>
                  <h2 className="display-6 fw-bold text-white mt-2">Biz Kimiz?</h2>
                </div>
              </div>
              <div className="row g-4">
                {/* Hakkımızda Kartı */}
                <div className="col-12">
                  <div className="aboutCard">
                    <h3>Hakkımızda</h3>
                    <p>
                      EcoTrack, çevre dostu yaşam tarzını destekleyen bir
                      platformdur. Misyonumuz, insanların çevre üzerindeki
                      etkisini azaltmalarına yardımcı olmaktır.
                    </p>
                  </div>
                </div>
                {/* Vizyonumuz Kartı */}
                <div className="col-12">
                  <div className="aboutCard">
                    <h3>Vizyonumuz</h3>
                    <p>
                      Gelecekte, herkesin sürdürülebilir bir yaşam tarzını
                      benimseyerek gezegenimizi koruduğu bir dünya hayal ediyoruz.
                    </p>
                  </div>
                </div>
                {/* Değerlerimiz Kartı */}
                <div className="col-12">
                  <div className="aboutCard">
                    <h3>Değerlerimiz</h3>
                    <p>
                      Çevre bilinci, topluluk desteği ve sürekli gelişim,
                      EcoTrack'in temel değerleridir.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* ARKA PLAN VİDEOSU */}
      <div className="pageVideoBg aboutVideoBg">
        <video autoPlay muted loop playsInline>
          <source src={aboutVideo} type="video/mp4" />
        </video>
      </div>
      <div className="pageVideoOverlay"></div>
    </>
  );
}

export default Hakkimizda;
