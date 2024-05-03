import React from 'react';
import lunchData from './lunchdata'; // Import lunch data

const Ruokailu = () => {
  const paragraphStyle = {
    color: 'white', // Example color
    lineHeight: '2',
    // Add more styles as needed
  };

  // Style for the day schedule container
  const dayContainerStyle = {
    border: '2px double #F0AE2E',
    marginBottom: '20px', // Add spacing between days
    padding: '10px',
  };

  // Style for the list items (lunch times)
  const listItemStyle = {
    marginBottom: '8px',
    paddingLeft:'12px' // Add margin bottom for extra spacing
  };

  // Style for the space after the time
  const timeSpaceStyle = {
    display: 'inline-block',
    width: '20px', // Adjust width as needed
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
              <ul>
                {location.lunchTimes.map((time, timeIndex) => (
                  <li key={timeIndex} style={listItemStyle}>
                    {time}
                    <span style={timeSpaceStyle}></span> {/* Add space */}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Ruokailu;
