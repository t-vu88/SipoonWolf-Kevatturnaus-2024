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
  const cellStyle = {
    border: '1px solid #F0AE2E',
    padding: '8px',
  };
  return (
    <div>
      
      <h3 style={paragraphStyle}>Tervetuloa herkuttelemaan turnauksen tauolla!</h3>
      <div style={paragraphStyle1}>
      <p>Turnauskahvio palvelee hallin alakerrassa. Kahviosta voi ostaa lipukkeita arpajaisiin, onnenpyörään ja grillipisteelle.</p>
      <p> Kahviossa on myynnissä monipuolisesti makeita ja suolaisia herkkuja mm.</p>
<table style={{ borderCollapse: 'collapse' }}>
  <thead>
    <tr>
      <th></th>
      <th></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style={cellStyle}>
        <ul style={{ paddingLeft: '15px', listStyleType: 'disc' }}>
          <li>Täytettyä sämpylää/leipää</li>
          <li>Kinkkupiirakkaa</li>
          <li>Kasvikevätrullat</li>
          <li>Grillattua makkaraa</li>
          <li>Popcornia</li>
          yms...
        </ul>
      </td>
      <td style={cellStyle}>
        <ul style={{ paddingLeft: '15px', listStyleType: 'disc' }}>
          <li>Mokkapalaa</li>
          <li>Munkit</li>
          <li>Donitsit</li>
          <li>Mehujäät</li>
          <li>Mehukattivälipalaa</li>
          <li>Limua / Urheilujuomaa / Pillimehua</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

<p> </p>
      </div>
    </div>
  );
};

export default Kahvila;
