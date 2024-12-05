import React from 'react';

const TurnausInfo = () => {
  /*const paragraphStyle = {
    color: '#F0AE2E', 
    fontSize: '20px',
    textAlign:'center'
  };*/
  const paragraphStyle1 = {
    fontSize:"19px"
  };
  return (
    <div>
      <di className ="introduction">
            <div style={paragraphStyle1}>
               <p>Pelit pelataan Sipoon jäähallissa (Urheilutie 2, 04130 Sipoo)</p>
               <p > Pelejä voi seurata myös Leijonat TV:stä</p>

<p>Turnauspäivänä on paljon muutakin kuin otteluita. Varaamme aikaa myös yhteiselle hauskanpidolle ja virkistykselle. 
  Kahviosta saa sekä suolaista että makeaa koko turnauspäivän ajan, lisäksi on arpajaisia, onnenpyörää sekä herkullista grillattua makkaraa.
  Hallilla on myös teroitusmahdollisuus hintaan 5 €/pari (tiedustelut kahviosta). </p>

<p>Katsomossa on runsaasti istumapaikkoja, 
  joten rohkaisemme teitä tuomaan mukananne koko perheen nauttimaan jääkiekon taikasta ja kannustamaan nuoria urheilijoitamme. 
    </p>
<p> Sipoon Wolf U8 kiittää lämpimästi tapahtuman sponsoreita, jotka ovat mahdollistaneet tämän upean turnauksen:</p>
<ul style={{ paddingLeft: '20px', listStyleType: 'disc' }}>
    <li>Prodessendum Oy</li>
    <li>Konevel Oy</li>
    </ul>

    <p> Lisäksi haluamme kiittä Oulun Kärppiä ja Kiekko-Espoota yhteistyöstä.</p>

<p>Lisätietoja turnauksesta ja sen ohjelmasta löydätte yllä olevista välilehdistä.</p>

</div>
      </di>
    </div>
  );
};

export default TurnausInfo;