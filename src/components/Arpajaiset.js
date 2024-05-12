import React from 'react';

const Arpajaiset = () => {
  const paragraphStyle = {
    color: 'white', 
    fontSize: '18px'
  };
  return (
    <div style ={paragraphStyle}>
      
      <h3 style={{ textAlign: 'center', color: 'white' }}>Tule mukaan jännitykseen ja voita mahtavia palkintoja Turnauksen arpajaisissa ja onnenpyörässä! </h3>
      <hr style={{ width: '50%', borderColor:'white' }} />
      <p> <span style={{color:'#F0AE2E'}}>Yhteistyökumppaneitamme </span>, jotka ovat lahjoittaaneet upeita arpajaispalkintoja. </p>
      <ul style={{ paddingLeft: '40px', listStyleType: 'disc' }}>
        <li> Tapwell Oy/ MW-Putki Oy</li>
        <li> AR Asennus Oy</li>
      </ul>
     
      <p> <span style={{color:'#F0AE2E'}}>
      Arpajaiset   </span> järjestetään kahvion vieressä.
 Yksi arpa maksaa 2€, ja kolme arpaa on sinun vain 5€:lla. Palkintoina mm.</p>
     <ul style={{ paddingLeft: '40px', listStyleType: 'disc' }}>
        <li> Tapwell - hana</li>
        <li>Ravintolalahjakortteja</li>
        <li>Hierontalahjakortteja</li>
        <li>50€ nesteen polttoainelahjakortti</li>
        <li>2kpl Ilmalämpöpumpun vuosihuolto lahjakorttia (arvo 220e/lahjakortti)</li>
        <li>Risteilylahjakortteja</li>
        <p>... ja paljon muita kiinnostavia palkintoja.</p>
    </ul>

      <p><span style={{color:'#F0AE2E'}} >Onnenpyörässä</span> on mahdollista voittaa mm.</p>
      <ul style={{ paddingLeft: '40px', listStyleType: 'disc' }}>
        <li> Suomen yksi kaikkien aikojen parhaista maalivahdeista Pekka Rinteen allekirjoitamia kiekkoja</li>
        <li> Stanley Cup voittaja Antti Niemen allekirjoitamia kiekkoja</li>
        <li> SM-liiga konkari Joonas Vihkon allekirjoitamia kiekkoja </li>
        
      
      </ul>

      <p style={{ color:'#F0AE2E' }}> SM liiga pelajan maila huutokauppa</p>
      <p>------/////------</p>


    <p style={{ color:'#F0AE2E' }}>Älä jätä tilaisuuttasi käyttämättä – osta arpa, pyöritä onnenpyörä ja liity voittajien joukkoon!</p>
    </div>
    
  );
};

export default Arpajaiset;