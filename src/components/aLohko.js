import React, { useState } from 'react';
import '../App.css';
const Alohko = () => {
  const [activeTabs, setActiveTabs] = useState({
    u8lohkoA: null
  });
  const teams = {
    u8lohkoa: [
      { name: "Wolf Musta", logoUrl: "https://files.eliteprospects.com/layout/logos/f667f640-87d9-4879-b248-dde1387fac00_large.png" },
      { name: "KJT Blue", logoUrl: "https://www.kjthockey.fi/wp-content/uploads/2022/06/kjt-hockey-logo-300x123.png" },
      { name: "EVU", logoUrl: "https://static.jopox.fi/evu/logos/logo-600.png"},
      { name: "Hunters White", logoUrl: "https://static.jopox.fi/hunters/logos/logo-600.png" },
      
      { name: "Karhu-kissat Bears", logoUrl: "https://upload.wikimedia.org/wikipedia/fi/thumb/3/3f/Karhu-Kissat.png/360px-Karhu-Kissat.png"},
    ]
  };
  /* you can add the result here, type carefully  */
  const games = {
    u8lohkoa: [
      {id: 1, time: '09:00', team1: 'KJT Blue', team2: 'Wolf Musta', result1: 4, result2: 7 },
      { id: 2, time: '09:30', team1: 'Hunters White', team2: 'EVU', result1: 8, result2: 3},
      { id: 3, time: '10:00', team1: 'Karhu-kissat Bears', team2: 'KJT Blue', result1: 1, result2: 5 },
      { id: 4, time: '10:50', team1: 'Hunters White', team2: 'Wolf Musta', result1: 4, result2: 1 },
      { id: 5, time: '11:20', team1: 'Karhu-kissat Bears', team2: 'EVU', result1: 1, result2: 9 },
      { id: 6, time: '11:50', team1: 'Hunters White', team2: 'KJT Blue', result1: 2, result2: 4},
      {id: 7, time: '12:40', team1: 'Wolf Musta', team2: 'EVU', result1: 0, result2: 0 },
      { id: 8, time: '13:10', team1: 'Karhu-kissat Bears', team2: 'Hunters White', result1: 0, result2: 0},
      { id: 9, time: '14:10', team1: 'KJT Blue', team2: 'EVU', result1: 0, result2: 0 },
      { id: 10, time: '14:40', team1: 'Wolf Musta', team2: 'Karhu-kissat Bears', result1: 0, result2: 0 }
    ]
  };
  
  // Define the ranking table function
  const calculateTeamStats = (groupId) => {
    const groupGames = games[groupId];
    const teamStats = {};
  
    groupGames.forEach((game) => {
      const team1 = game.team1;
      const team2 = game.team2;
  
      // Initialize team stats with 0 points and games played if not already initialized
      if (!teamStats[team1]) {
        teamStats[team1] = { name: team1, win: 0, loss: 0, draw: 0, points: 0, gamesPlayed: 0 };
      }
      if (!teamStats[team2]) {
        teamStats[team2] = { name: team2, win: 0, loss: 0, draw: 0, points: 0, gamesPlayed: 0 };
      }
  
      // Update points only if the result is not 0-0
      if (game.result1 !== 0 || game.result2 !== 0) {
        if (game.result1 > game.result2) {
          teamStats[team1].win++;
          teamStats[team1].points += 3; // Increment points for team1
          teamStats[team2].loss++;
        } else if (game.result1 < game.result2) {
          teamStats[team2].win++;
          teamStats[team2].points += 3; // Increment points for team2
          teamStats[team1].loss++;
        } else {
          teamStats[team1].draw++;
          teamStats[team2].draw++;
          teamStats[team1].points += 1; // Increment points for team1
          teamStats[team2].points += 1; // Increment points for team2
        }
        teamStats[team1].gamesPlayed++;
        teamStats[team2].gamesPlayed++;
      }
    });
  
    // Transform team stats into an array to sort by points
    const teamStatsArray = Object.values(teamStats);
  
    // Sort teams by points (descending)
    teamStatsArray.sort((a, b) => b.points - a.points);
  
    return teamStatsArray;
  };
  const handleTabClick = (group, tab) => {
    setActiveTabs(prevState => ({
      ...prevState,
      [group]: prevState[group] === tab ? null : tab
    }));
  };
  
  return (
    <div className="container">
      {/* U8 lohko A */}
      <div>
        <h1 className='group'>A-lohko</h1>
        <h3 className='group'> (Lehvosen pääty)</h3>
        {/* Team list for U8 group A */}
        <div className="team-list">
          {teams.u8lohkoa.map((team, index) => (
            <React.Fragment key={index}>
              <span className="team">
                <img style={{ marginRight: '15px' }} src={team.logoUrl} alt={team.name} className="team-logo" /> {/* Display the team logo */}
                {team.name}
              </span>
            </React.Fragment>
          ))}
        </div>
        <div className="tab-buttons-container">
        <button
          onClick={() => handleTabClick('u8lohkoA', 'lohkotilanne')}
          className={`tab-button-lohko ${activeTabs['u8lohkoA'] === 'lohkotilanne' ? 'active' : ''}`}
        >
          Lohkotilanne
        </button>
        <button
          onClick={() => handleTabClick('otteluohjelmaA', 'otteluohjelma')}
          className={`tab-button-lohko ${activeTabs['otteluohjelmaA'] === 'otteluohjelma' ? 'active' : ''}`}
        >
          Otteluohjelma
        </button>
        </div>
        {activeTabs.u8lohkoA && (
          <div>
            <h3>Lohkotilanne</h3>
            {/* Ranking table for U8 lohko A */}
            <table className='ranking-table'>
            <thead>
              <tr>
                <th>Joukkue</th>
                <th>Ott</th>
                <th>V</th>
                <th>H</th>
                <th>T</th>
                <th>Pst</th>
              </tr>
            </thead>
            <tbody>
              {calculateTeamStats('u8lohkoa').map((teamStats) => (
                <tr key={teamStats.name}>
                  <td>
                    <img style={{ marginRight: '4px' }} src={teams.u8lohkoa.find(team => team.name === teamStats.name)?.logoUrl} alt={teamStats.name} className="team-logo" /> {/* Display the team logo */}
                    {teamStats.name}
                  </td>
                  <td>{teamStats.gamesPlayed || 0}</td>
                  <td>{teamStats.win || 0}</td>
                  <td>{teamStats.loss || 0}</td>
                  <td>{teamStats.draw || 0}</td>
                  <td>{teamStats.points || 0}</td>
                </tr>
              ))}
            </tbody>
          </table>
          </div>
        )}
        {/* If otteluohjelma A tab is active, render games info */}
        {activeTabs.otteluohjelmaA && (
          <div>
            <h3>Otteluohjelma</h3>
            {/* Games info for U8 lohko A */}
            <div className="game-container">
          {games.u8lohkoa.map((game) => (
            <div className="game-info" key={game.id}>
              <div className="game-row" style={{ paddingTop:'15px' , paddingBottom: '5px' }}>Klo {game.time}</div>
              <div className="game-row" style={{ paddingBottom: '15px', fontSize: '0.8rem' }}>
                  (Lehvosen pääty)
              </div>
              <div className="game-row" style={{ paddingBottom: '15px' }} >
                <table>
                  <tbody>
                    <tr>
                      <td className="team-name">{game.team1}</td>
                      <td>
                        <img
                          src={teams.u8lohkoa.find(team => team.name === game.team1)?.logoUrl}
                          alt={game.team1}
                          className="team-logo"
                        />
                      </td>
                      <td></td>
                      <td>-</td>
                      <td></td>
                      <td>
                        <img
                          src={teams.u8lohkoa.find(team => team.name === game.team2)?.logoUrl}
                          alt={game.team2}
                          className="team-logo"
                        />
                      </td>
                      <td className="team-name">{game.team2}</td>
                    </tr>
                    <tr>
                      <td>{game.result1}</td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td>{game.result2}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          ))}
        </div>
          </div>
        )}
      </div>
          <hr/>

      <hr />
    </div>
  );
};

export default Alohko;