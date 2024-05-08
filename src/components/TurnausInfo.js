import React from 'react';

const TurnausInfo = () => {
  const paragraphStyle = {
    color: '#F0AE2E', 
    fontSize: '20px'
  };
  const paragraphStyle1 = {
    fontSize:"17px"
  };
  const linkStyle = {
    color: 'white', // Change this color to the desired color for links
    textDecoration: 'underline' // Add underline to make it look more like a traditional link
  };
  return (
    <div>
      <di className ="introduction">
            <p style={paragraphStyle}> Tervetuloa Sipoon Wolfin U7 ja U8 ikäluokan jännittävään ja innostavaan kevätturnaukseen Sipoossa!</p>
            <div style={paragraphStyle1}>
               <p>Pelit pelataan Sipoon jäähallissa (Urheilutie 2, 04130 Sipoo). 
Hallin läheisyydessä on runsaasti pysäköintipaikkoja, joten saapuminen paikalle autolla on vaivatonta.</p>

<p>Katsomossa on runsaasti istumapaikkoja, 
  joten rohkaisemme teitä tuomaan mukananne koko perheen nauttimaan jääkiekon taikasta ja kannustamaan nuoria urheilijoitamme. 
</p>
<p>Turnauspäivänä on paljon muutakin kuin otteluita. Varaamme aikaa myös yhteiselle hauskanpidolle ja virkistykselle. 
  Kahviosta saa sekä suolaista että makeaa koko viikonlopun ajan, lisäksi on arpajaisia, onnenpyörää, lämäritutkaa sekä herkullista grillattua makkaraa.
  Hallilla on myös teroitusmahdollisuus hintaan 5 €/pari (tiedustelut kahviosta). </p>

<p>Lopuksi haluamme kiittää lämpimästi tapahtuman sponsoreita, jotka ovat mahdollistaneet tämän upean turnauksen:</p>
<ul style={{ paddingLeft: '20px', listStyleType: 'disc' }}>
<li><a href="https://corrector.fi" style={linkStyle} >Corrector Oy</a></li>
            <li><a href="https://www.mw-putki.fi" style={linkStyle} >Tapwell Oy/ MW-Putki Oy</a></li>
    <li>-----</li>
    </ul>

<p>Lisätietoja turnauksesta ja sen ohjelmasta löydätte yllä olevista välilehdistä.</p>
</div>
      </di>
    </div>
  );
};

export default TurnausInfo;