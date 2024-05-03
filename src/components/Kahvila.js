// Kahvila.js
import React from 'react';

const Kahvila = () => {
  const paragraphStyle = {
    color: '#F0AE2E', 
  };
  return (
    <div>
      <div>
      <h3 style={paragraphStyle}>Herkkuja</h3>
      <p>Tervetuloa herkuttelemaan turnauksen tauolla! Mokkapalloja, ...</p>
      <p> Grillipisteemme tarjoaa vastapaistettua makkaraa. </p>
      </div>
      <div>
      <h3 style={paragraphStyle}>Lämäritutka</h3>
      <p>Tule testaamaan laukauksesi nopeutta ja voimaa.</p>
      
      </div>
    </div>
  );
};

export default Kahvila;
