import React from 'react';
import lunchData from './lunchdata'; // Import lunch data

const Ruokailu = () => {
  const paragraphStyle = {
    color: 'white', // Example color
    lineHeight: '2',
    fontSize:'18px',
    textAlign:'center'
    // Add more styles as needed
  };

  // Style for the day schedule container
  const dayContainerStyle = {
    border: '2px double #F0AE2E',
    marginBottom: '20px', // Add spacing between days
    padding: '10px',
  };

  
  return (
    <div>
      <p style={paragraphStyle}>
        Otteluohjelman ollessa kohtuullisen tiivis, niin joukkueita pyydetään noudattamaan alla olevaa ruokailuaikataulua.
      </p>
      {/* Render lunch schedule */}
      {lunchData.map((day, index) => (
        <div key={index} style={dayContainerStyle}>
          <h3>{day.day}</h3>
          {day.locations.map((location, locationIndex) => (
            <div key={locationIndex}>
              <hr />
              <h4>{location.location}</h4>
              <table className='ranking-table'>
                <thead>
                  <tr>
                    <th >Aika</th>
                    <th>Joukkue</th>
                  </tr>
                </thead>
                <tbody>
                  {location.lunchTimes.map((time, timeIndex) => (
                    <tr key={timeIndex}>
                      <td >{time.time}</td>
                      <td >{time.team}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Ruokailu;
