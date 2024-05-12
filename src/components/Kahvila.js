// Kahvila.js
import React from 'react';

const Kahvila = () => {
  const paragraphStyle = {
    color: '#F0AE2E',
    textAlign: 'center'
  };
  const paragraphStyle1 = {
    fontSize:'18px'
  };
  const cellStyle = {
    border: '1px solid #F0AE2E',
    padding: '8px',
  };
  return (
    <div>
      
      <h3 style={paragraphStyle}>Tervetuloa herkuttelemaan turnauksen tauolla!</h3>
      <div style={paragraphStyle1}>
      <p>Turnauskahvio palvelee hallin alakerrassa. Kahviosta voi ostaa lipukkeita ja niin lämäritutkaan kuin grillipisteellemme.</p>
      <p> Kahviossa on myynnissä monipuolisesti makeita ja suolaisia herkkuja, esim:</p>
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
          <li>Kinkkupiirakka</li>
          <li>Hodari</li>
          <li>Grillattu makkara</li>
          <li>Popcornia</li>
        </ul>
      </td>
      <td style={cellStyle}>
        <ul style={{ paddingLeft: '15px', listStyleType: 'disc' }}>
          <li>Mokkapalaa</li>
          <li>Munkit</li>
          <li>Donitsi</li>
          <li>Karkit ja tikkarit</li>
          <li>Mehujää</li>
          <li>Mehukattivälipala</li>
          <li>Limua / Urheilujuoma / Pillimehu</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

<p> </p>
      </div>

      <h3 style={paragraphStyle}>Lämäritutka</h3>
      <div style={paragraphStyle1}>
      <p>Tule testaamaan laukauksesi nopeutta ja voimaa. 
      Lämäritutkassa on molempana turnauspäivänä vetokilpailu, jossa 2€:lla pääsee vetämään kolmesti. 
        Päivän kovin laukaus saa muhkean karkkiämpärin. </p>    
      </div>
    </div>
  );
};

export default Kahvila;
