import React from 'react';

function NeKurtardimPanel({
  plastik, setPlastik,
  kagit, setKagit,
  cam, setCam,
  metal, setMetal,
  totalTrees, totalWater, totalCO2
}) {
  return (
    <main className="pageMainContent">
      <div className="container">
        <div className="row justify-content-start">
          <div className="col-lg-6 col-md-8 col-sm-10">
            <div className="interaktifPanel">
              <div>
                <span className="sectionTag">Ne Kurtardım</span>
                <h2>Ekolojik Tasarruf</h2>
              </div>

              <div className="girdiTablosu">
                <div className="girdiler">
                  <label>Plastik (kg)</label>
                  <input
                    type="number"
                    value={plastik}
                    onChange={(e) => setPlastik(Number(e.target.value))}
                    min="0"
                  />
                </div>
                <div className="girdiler">
                  <label>Kağıt (kg)</label>
                  <input
                    type="number"
                    value={kagit}
                    onChange={(e) => setKagit(Number(e.target.value))}
                    min="0"
                  />
                </div>
                <div className="girdiler">
                  <label>Cam (kg)</label>
                  <input
                    type="number"
                    value={cam}
                    onChange={(e) => setCam(Number(e.target.value))}
                    min="0"
                  />
                </div>
                <div className="girdiler">
                  <label>Metal (kg)</label>
                  <input
                    type="number"
                    value={metal}
                    onChange={(e) => setMetal(Number(e.target.value))}
                    min="0"
                  />
                </div>
              </div>

              {/* Tasarruf sonuçları */}
              <div className="canliTasarrufSonuclari">
                Şu ana kadar doğada tam{" "}
                <span className="highlightText">{totalTrees.toFixed(3)}</span> ağaç,{" "}
                <span className="highlightText">{Math.round(totalWater)}</span> litre su ve{" "}
                <span className="highlightText">{totalCO2.toFixed(1)}</span> kg CO2
                salınımı engellediniz!
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default NeKurtardimPanel;
