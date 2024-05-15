import React from 'react';

const Lamaritutka = () => {
  const data = {
    u8: [
      { name: 'Pelaja ', speed: 0 },
      { name: 'Pelaja ', speed: 0 },
      { name: 'Pelaaja', speed: 0 },
      { name: 'Pelaaja', speed: 0 },
      { name: 'Pelaaja', speed: 0 }
    ],
    u7: [
      { name: 'Pelaaja', speed: 0 },
      { name: 'Pelaaja', speed: 0 },
      { name: 'Pelaaja', speed: 0 },
      { name: 'Pelaaja', speed: 0 },
      { name: 'Pelaaja', speed: 0 }
    ],
    others: [
      { name: 'Pelaaja', speed: 0 },
      { name: 'Pelaaja', speed: 0 },
      { name: 'Pelaaja', speed: 0 },
      { name: 'Pelaaja', speed: 0 },
      { name: 'Pelaaja', speed: 0 }
    ]
  };

  const sortPlayersBySpeed = (players) => {
    return players.sort((a, b) => b.speed - a.speed);
  };

  const renderTable = (category, players) => (
    <div key={category}>
      <h3>{category.toUpperCase()}</h3>
      <table className='ranking-table'>
        <thead>
          <tr>
            <th>Sija</th>
            <th style={{ width: '60%' }}>Pelaaja</th>
            <th style={{ width: '20%' }}>Laukauksen nopeus</th>
          </tr>
        </thead>
        <tbody>
          {sortPlayersBySpeed(players).map((player, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{player.name}</td>
              <td>{player.speed}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  const paragraphStyle = {
    color: '#F0AE2E',
    textAlign: 'center'
  };
  const paragraphStyle1 = {
    fontSize: '18px'
  };

  return (
    <div className="lämäritutka">
      <h4 style={paragraphStyle}> Tule testaamaan laukauksesi nopeutta ja voimaa   klo 11.00-15.00</h4>
      <div style={paragraphStyle1}>
        <p>
          </p>
        <p>Lämäritutkassa on molempana turnauspäivänä vetokilpailu, jossa 2€:lla pääsee vetämään kolmesti.
          Päivän kovin laukaus jokaisesta ryhmästä  saa upean palkinnon.
        </p>
      </div>
      <div>
        {renderTable('U7', data.u7)}
        {renderTable('U8', data.u8)}
        
        {renderTable('Muut', data.others)}
      </div>
    </div>
  );
};

export default Lamaritutka;
