import React from 'react';

const Arpajaiset = () => {
  const paragraphStyle = {
    color: 'white', 
    fontSize: '18px'
  };
  return (
    <div style ={paragraphStyle}>
      <p>Tule mukaan jännitykseen ja voita mahtavia palkintoja Turnauksen arpajaisissa ja onnenpyörässä! </p>
      <hr style={{ width: '70%', borderColor:'#F0AE2E'  }} />
      <p>Arpajaiset järjestetään kahvion vieressä. Yksi arpa maksaa 2€, ja kolme arpaa on sinun vain 5€:lla. Palkintoina mm.</p>
     <ul style={{ paddingLeft: '20px', listStyleType: 'disc' }}>
        <li>Ravintolalahjakortteja</li>
        <li>Hierontalahjakortteja</li>
        <li>50€ nesteen polttoainelahjakortti</li>
        <li>2kpl Ilmalämpöpumpun vuosihuolto lahjakorttia (arvo 220e/lahjakortti)</li>
        <li>Risteilylahjakortteja</li>
        <p>... ja paljon muita kiinnostavia palkintoja.</p>
</ul>
<hr style={{ width: '70%', borderColor:'#F0AE2E' }} />
      <p>Onnenpyörässä on mahdollista voittaa mm.</p>
      <ul style={{ paddingLeft: '20px', listStyleType: 'disc' }}>
        <li> Suomen yksi kaikkien aikojen parhaista maalivahdeista Pekka Rinteen allekirjoitamia kiekkoja</li>
        <li> SM-liiga konkari Joonas Vihkon allekirjoitamia kiekkoja </li>
        <li>SM-liiga pelajien mailoja </li>
        <p> ... ja paljon muita jääkiekko aiheisia palkintoja.</p>
      
      </ul>
    

    <p>Älä jätä tilaisuuttasi käyttämättä – osta arpa ja liity voittajien joukkoon!</p>
    </div>
    
  );
};

export default Arpajaiset;