import React from 'react';

const Lamaritutka = () => {
      /* you can add the result here, type carefully  */

  const paragraphStyle = {
    color: 'white',
    textAlign: 'center'
  };
  const paragraphStyle1 = {
    fontSize: '18px'
  };

  return (
    <div className="lämäritutka">
      <h4 style={paragraphStyle}> Tule testaamaan laukauksesi nopeutta ja voimaa  klo 11.00-15.00</h4>
      <div style={paragraphStyle1}>
        <p>
          </p>
        <p>Lämäritutkassa on molempana turnauspäivänä vetokilpailu, jossa 2€:lla pääsee vetämään kolmesti.
           U7/U8-ryhmän voittajalle palkinnoksi ämpärillinen herkkuja ja Muut-ryhmän voittajalle palkinnoksi allekirjoitettu kiekko.
        </p>
      </div>
    </div>
  );
};

export default Lamaritutka;
