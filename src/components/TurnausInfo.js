import React from 'react';

const TurnausInfo = () => {
  const paragraphStyle = {
    color: '#F0AE2E', 
    fontSize: '20px',
    textAlign:'center'
  };
  const paragraphStyle1 = {
    fontSize:"17px"
  };
  return (
    <div>
      <di className ="introduction">
            <h3 style={paragraphStyle}> Tervetuloa Sipoon Wolfin U7 ja U8 ikäluokan jännittävään ja innostavaan kevätturnaukseen Sipoossa!</h3>
            <div style={paragraphStyle1}>
               <p>Pelit pelataan Sipoon jäähallissa (Urheilutie 2, 04130 Sipoo). 
Hallin läheisyydessä on runsaasti pysäköintipaikkoja, joten saapuminen paikalle autolla on vaivatonta.</p>

<p>Turnauspäivänä on paljon muutakin kuin otteluita. Varaamme aikaa myös yhteiselle hauskanpidolle ja virkistykselle. 
  Kahviosta saa sekä suolaista että makeaa koko viikonlopun ajan, lisäksi on arpajaisia, onnenpyörää, lämäritutkaa sekä herkullista grillattua makkaraa.
  Hallilla on myös teroitusmahdollisuus hintaan 5 €/pari (tiedustelut kahviosta). </p>

<p>Katsomossa on runsaasti istumapaikkoja, 
  joten rohkaisemme teitä tuomaan mukananne koko perheen nauttimaan jääkiekon taikasta ja kannustamaan nuoria urheilijoitamme. 
  Kerro sitten kuinka onnistuimme ! Jaa kuvia, tarinoita  ja parhaat hetkesi turauksestamme instagramissa 
    hastageilla<span style={{color:'#F0AE2E'}} > #sipoonwolf_2016</span> tai <span style={{color:'#F0AE2E'}} >#u7u8kevätturnaus2024</span>  ja voita arvokas Tapwell-hana.
    </p>
<p> Lopuksi haluamme kiittää lämpimästi tapahtuman sponsoreita, jotka ovat mahdollistaneet tämän upean turnauksen:</p>
<ul style={{ paddingLeft: '20px', listStyleType: 'disc' }}>
    <li>Corrector Oy</li>
    <li>Prodessendum Oy</li>
    </ul>

<p>Lisätietoja turnauksesta ja sen ohjelmasta löydätte yllä olevista välilehdistä.</p>


</div>
      </di>
    </div>
  );
};

export default TurnausInfo;