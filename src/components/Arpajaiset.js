import React from 'react';

const Arpajaiset = () => {
  const paragraphStyle = {
    color: 'white', 
    fontSize: '18px'
  };
  return (
    <div style ={paragraphStyle}>
      <p>Tule mukaan jännitykseen ja voita mahtavia palkintoja Turnauksen arpajaisissa! </p>

    <p>Arpajaiset järjestetään kahvion vieressä. Yksi arpa maksaa 2€, ja kolme arpaa on sinun vain 5€:lla.</p>
     <p>  Palkintoina mm. </p>
     <ul style={{ paddingLeft: '20px', listStyleType: 'disc' }}>
     <li>Käärijän allekirjoitamat kiekot (30kpl)</li>
     <li>Pekka Rinteen allekirjoitamat kiekot (2kpl)</li>
      <li>Maila</li>
      <li>Ravintolalahjakortteja</li>
      <li>Hierontalahjakortteja</li>
      <li>50€ nesteen polttoainelahjakortti</li>
      <li>----</li>
      <li>----</li>
      <li>---</li>
</ul>
      
    

    <p>Älä jätä tilaisuuttasi käyttämättä – osta arpa ja liity voittajien joukkoon!</p>
    </div>
    
  );
};

export default Arpajaiset;