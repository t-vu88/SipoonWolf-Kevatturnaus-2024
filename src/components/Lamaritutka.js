
import React from 'react';

const Lamaritutka = () => {
  const paragraphStyle = {
    color: '#F0AE2E',
    textAlign: 'center'
  };
  const paragraphStyle1 = {
    fontSize:'18px'
  };
  
  return (
    <div>
      

      <h3 style={paragraphStyle}>Lämäritutka</h3>
      <div style={paragraphStyle1}>
      <p>Tule testaamaan laukauksesi nopeutta ja voimaa. 
      Lämäritutkassa on molempana turnauspäivänä vetokilpailu, jossa 2€:lla pääsee vetämään kolmesti. 
        Päivän kovin laukaus saa muhkean karkkiämpärin. </p>    
      </div>
    </div>
  );
};

export default Lamaritutka;
