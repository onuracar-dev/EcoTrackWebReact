import React from 'react';
import '../assets/css/custom-maps.css';
import AtikNoktalariHarita from '../components/AtikNoktalariHarita';
import AtikNoktalariListe from '../components/AtikNoktalariListe';
import AtikNoktalariArkaPlan from '../components/AtikNoktalariArkaPlan';

function AtikNoktalari() {
  return (
    <>
      <main className="pageMainContent">
        <div className="container">
          <div className="row justify-content-end">
            <AtikNoktalariHarita />
            <AtikNoktalariListe />

          </div>
        </div>
      </main>
      <AtikNoktalariArkaPlan />
    </>
  );
}

export default AtikNoktalari;
