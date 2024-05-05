// Kahvila.js
import React from 'react';

const Kahvila = () => {
  const paragraphStyle = {
    color: '#F0AE2E', 
  };
  const paragraphStyle1 = {
    fontSize:'18px'
  };
  return (
    <div>
      
      <h3 style={paragraphStyle}>Kahvio</h3>
      <div style={paragraphStyle1}>
      <p>Tervetuloa herkuttelemaan turnauksen tauolla!</p>
      <p>Turnauskahvio palvelee hallin alakerrassa. Kahviossa on myynnissä monipuolisesti makeita ja suolaisia herkkuja, esim:</p>
      <ul style={{ paddingLeft: '20px', listStyleType: 'disc' }}>
  <li>Mokkapalaa</li>
  <li>Täytettyä sämpylää/leipää</li>
  <li>Munkit</li>
  <li>Karkit ja tikkarit</li>
  <li>Popcornia</li>
  <li>Limua</li>

  <li>Urheilujuoma</li>
  <li>Pillimehu</li>

  <li> Maukasta makkaraa ulkona olevasta grillipisteestä.</li>
</ul>
<p>Kahviosta voi ostaa lipukkeita ja niin lämäritutkaan kuin grillipisteellemme. </p>
      </div>

      <h3 style={paragraphStyle}>Lämäritutka</h3>
      <div style={paragraphStyle1}>
      <p>Tule testaamaan laukauksesi nopeutta ja voimaa. Lämäritutkassa on molempana turnauspäivänä vetokilpailu, jossa 2€:lla pääsee vetämään kolmesti. 
        Voittaja saa muhkean karkkiämpärin. </p>    
      </div>
    </div>
  );
};

export default Kahvila;
