// Kahvila.js
import React from 'react';

const Kahvila = () => {
  const paragraphStyle = {
    color: '#F0AE2E',
    textAlign: 'center'
  };
  const paragraphStyle1 = {
    fontSize:'19px'
  };
  return (
    <div>
      
      <h3 style={paragraphStyle}>Tervetuloa herkuttelemaan turnauksen tauolla!</h3>
      <div style={paragraphStyle1}>
      <p>Turnauskahvio palvelee hallin alakerrassa. Kahviosta voi ostaa lipukkeita arpajaisiin, onnenpyörään ja grillipisteelle.</p>
      <p> Kahviossa on myynnissä monipuolisesti makeita ja suolaisia herkkuja.</p>

<p> </p>
      </div>
    </div>
  );
};

export default Kahvila;
