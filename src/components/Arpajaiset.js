import React from 'react';

const Arpajaiset = () => {
  const paragraphStyle = {
    color: 'white', 
    fontSize: '19px'
  };
  return (
    <div style ={paragraphStyle}>
      
      <h3 style={{ textAlign: 'center', color: 'white' }}>Tule mukaan jännitykseen ja voita mahtavia palkintoja Turnauksen arpajaisissa ja onnenpyörässä! </h3>
      <hr style={{ width: '50%', borderColor:'white' }} />
      <p> <span style={{color:'#F0AE2E'}}>Yhteistyökumppaneitamme </span>, jotka ovat lahjoittaaneet upeita arpajaispalkintoja. </p>
      <ul style={{ paddingLeft: '40px', listStyleType: 'disc' }}>
        <li> ----</li>
        <li> -----</li>
      </ul>
     
      <p> <span style={{color:'#F0AE2E'}}>
      Arpajaiset   </span> järjestetään kahvion vieressä.
 Yksi arpa maksaa 2€, ja kolme arpaa on sinun vain 5€:lla. Upeita Palkintoja mm.</p>
     <ul style={{ paddingLeft: '40px', listStyleType: 'disc' }}>
        <li>----</li>
        <li>----</li>
        <li>----</li>
        <li>----</li>

        <p>... ja paljon muita kiinnostavia palkintoja.</p>
    </ul>

      <p><span style={{color:'#F0AE2E'}} >Onnenpyörässä</span> on mahdollista voittaa mm.</p>
      <ul style={{ paddingLeft: '40px', listStyleType: 'disc' }}>
      <li>----</li>
        <li>----</li>
        <li>----</li>
        <li>----</li>
        
     </ul>



    <h4 style={{ color:'#F0AE2E' }}>Älä jätä tilaisuuttasi käyttämättä – osta arpa, pyöritä onnenpyörä ja liity voittajien joukkoon!</h4>
    </div>
    
  );
};

export default Arpajaiset;