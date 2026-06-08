import React from 'react';
import { Link } from 'react-router-dom';

function HomeIcerik() {
  return (
    <main className="pageMainContent">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-10 homeContent">
            <h1 className="heroTitle">Gelecek Dönüşümle Başlar</h1>
            <p className="heroSubtitle">
              Atıklarınızı değer katan birer enerjiye dönüştürün
            </p>
            <Link to="/neKurtardim" className="homeButton">Tasarrufunu Hesapla</Link>
          </div>
        </div>
      </div>
    </main>
  );
}

export default HomeIcerik;
