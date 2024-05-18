import React, { useState } from 'react';
import '../App.css';
const Lauantai = () => {
  const [activeTabs, setActiveTabs] = useState({
    u8lohkoA: null,
    u8lohkoB: null,
    u7: null,
  });
  const teams = {
    u8lohkoa: [
      { name: "Wolf Musta", logoUrl: "https://files.eliteprospects.com/layout/logos/f667f640-87d9-4879-b248-dde1387fac00_large.png" },
      { name: "Salamat White", logoUrl: "https://upload.wikimedia.org/wikipedia/en/b/b1/HCK_Salamat_logo_2021.png" },
      { name: "Hunters Blue", logoUrl: "https://static.jopox.fi/hunters/logos/logo-600.png" },
      { name: "HJK Blue", logoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Helsingin_J%C3%A4%C3%A4kiekkoklubi_logo.png/240px-Helsingin_J%C3%A4%C3%A4kiekkoklubi_logo.png" }
    ],
    u8lohkob: [
      { name: "Wolf Keltainen", logoUrl: "https://files.eliteprospects.com/layout/logos/f667f640-87d9-4879-b248-dde1387fac00_large.png" },
      { name: "Salamat Blue", logoUrl: "https://upload.wikimedia.org/wikipedia/en/b/b1/HCK_Salamat_logo_2021.png" },
      { name: "Hunters Yellow", logoUrl: "https://static.jopox.fi/hunters/logos/logo-600.png" },
      { name: "HJK White", logoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Helsingin_J%C3%A4%C3%A4kiekkoklubi_logo.png/240px-Helsingin_J%C3%A4%C3%A4kiekkoklubi_logo.png" }
    ],
    u7: [
      { name: "Wolf", logoUrl: "https://files.eliteprospects.com/layout/logos/f667f640-87d9-4879-b248-dde1387fac00_large.png" },
      { name: "Haki Blue", logoUrl: "https://upload.wikimedia.org/wikipedia/fi/thumb/b/b0/Haki-logo.png/500px-Haki-logo.png" },
      { name: "HIFK Red", logoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/HIFK-J%C3%A4%C3%A4kiekko.svg/300px-HIFK-J%C3%A4%C3%A4kiekko.svg.png" },
      { name: "Haki Black", logoUrl: "https://upload.wikimedia.org/wikipedia/fi/thumb/b/b0/Haki-logo.png/500px-Haki-logo.png" },
      { name: "Hunters U7", logoUrl: "https://static.jopox.fi/hunters/logos/logo-600.png" }
    ]
  };
  /* you can add the result here, type carefully  */
  const games = {
    u8lohkoa: [
      { id: 1, time: '10:00', team1: 'Wolf Musta', team2: 'Salamat White', result1: 14, result2: 12 },
      { id: 2, time: '10:40', team1: 'Hunters Blue', team2: 'HJK Blue', result1: 21, result2: 3 },
      { id: 3, time: '11:20', team1: 'Wolf Musta', team2: 'Hunters Blue', result1: 7, result2: 24 },
      { id: 4, time: '12:00', team1: 'Salamat White', team2: 'HJK Blue', result1: 0, result2: 0 },
      { id: 5, time: '14:00', team1: 'Wolf Musta', team2: 'HJK Blue', result1: 0, result2: 0 },
      { id: 6, time: '14:40', team1: 'Salamat White', team2: 'Hunters Blue', result1: 0, result2: 0 }
    ],
    u8lohkob: [
      { id: 1, time: '10:00', team1: 'Wolf Keltainen', team2: 'Salamat Blue', result1: 7, result2: 9 },
      { id: 2, time: '10:40', team1: 'Hunters Yellow', team2: 'HJK White', result1: 9, result2: 3 },
      { id: 3, time: '11:20', team1: 'Wolf Keltainen', team2: 'Hunters Yellow', result1: 5, result2: 14 },
      { id: 4, time: '12:00', team1: 'Salamat Blue', team2: 'HJK White', result1: 0, result2: 0 },
      { id: 5, time: '14:00', team1: 'Wolf Keltainen', team2: 'HJK White', result1: 0, result2: 0 },
      { id: 6, time: '14:40', team1: 'Salamat Blue', team2: 'Hunters Yellow', result1: 0, result2: 0 }
    ],
    u7: [
      { id: 1, time: '10:00', team1: 'Wolf', team2: 'Haki Black', result1: 7, result2: 15 },
      { id: 2, time: '10:40', team1: 'HIFK Red', team2: 'Haki Blue', result1: 15, result2: 0 },
      { id: 3, time: '11:20', team1: 'Hunters U7', team2: 'Haki Black', result1: 11, result2: 8 },
      { id: 4, time: '12:00', team1: 'Wolf', team2: 'HIFK Red', result1: 0, result2: 0 },
      { id: 5, time: '13:20', team1: 'Hunters U7', team2: 'Haki Blue', result1: 0, result2: 0 },
      { id: 6, time: '14:00', team1: 'HIFK Red', team2: 'Haki Black', result1: 0, result2: 0 },
      { id: 7, time: '14:40', team1: 'Wolf', team2: 'Haki Blue', result1: 0, result2: 0 },
      { id: 8, time: '15:20', team1: 'HIFK Red', team2: 'Hunters U7', result1: 0, result2: 0 },
      { id: 9, time: '16:00', team1: 'Haki Blue', team2: 'Haki Black', result1: 0, result2: 0 },
      { id: 10, time: '16:40', team1: 'Wolf', team2: 'Hunters U7', result1: 0, result2: 0 },
    ]
  };
  
  // Define the quarter-finals games
  const quarterFinalsGames = [
    { id: 1, time: '15:20', team1: 'A Lohko | sija 4', team2: 'B Lohko | sija 4', result1: 0, result2: 0 },
    { id: 2, time: '15:20', team1: 'A Lohko | sija 3', team2: 'B Lohko | sija 3', result1: 0, result2: 0 },
    { id: 3, time: '16:00', team1: 'A Lohko | sija 2', team2: 'B Lohko | sija 2', result1: 0, result2: 0 },
    { id: 4, time: '16:00', team1: 'A Lohko | sija 1', team2: 'B Lohko | sija 1', result1: 0, result2: 0 },
  ];

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
        <h1 className='group'>U8 Lohko A</h1>
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
                  (Kellopääty)
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

       {/* Team list for U8 group B */}
      <div>

        <h1 className='group'>U8 Lohko B</h1>
       
        <div className="team-list">
          {teams.u8lohkob.map((team, index) => (
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
            onClick={() => handleTabClick('u8lohkoB', 'lohkotilanne')}
            className={`tab-button-lohko ${activeTabs['u8lohkoB'] === 'lohkotilanne' ? 'active' : ''}`}
          >
            Lohkotilanne
          </button>
          <button
            onClick={() => handleTabClick('otteluohjelmaB', 'otteluohjelma')}
            className={`tab-button-lohko ${activeTabs['otteluohjelmaB'] === 'otteluohjelma' ? 'active' : ''}`}
          >
            Otteluohjelma
          </button>
          </div>
        {activeTabs.u8lohkoB && (
          <div>
            <h3>Lohkotilanne</h3>
            {/* Ranking table for U8 lohko B */}
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
              {calculateTeamStats('u8lohkob').map((teamStats) => (
                <tr key={teamStats.name}>
                  <td>
                    <img style={{ marginRight: '4px' }} src={teams.u8lohkob.find(team => team.name === teamStats.name)?.logoUrl} alt={teamStats.name} className="team-logo" /> {/* Display the team logo */}
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
        
        {activeTabs.otteluohjelmaB && (
          <div>
            <h3>Otteluohjelma</h3>
          
            <div className="game-container">
          {games.u8lohkob.map((game) => (
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
                          src={teams.u8lohkob.find(team => team.name === game.team1)?.logoUrl}
                          alt={game.team1}
                          className="team-logo"
                        />
                      </td>
                      <td></td>
                      <td>-</td>
                      <td></td>
                      <td>
                        <img
                          src={teams.u8lohkob.find(team => team.name === game.team2)?.logoUrl}
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
      <hr />

      {/* quaterfinal games */}
      <div>
      
      <div className="tab-buttons-container">
      <button
          onClick={() => handleTabClick('sijoituspelit', 'otteluohjelma')}
          className={`tab-button-sijoitus ${activeTabs['sijoituspelit'] === 'otteluohjelma' ? 'active' : ''}`}
          style={{ width: '100%', padding: '15px', fontSize: '1.2rem' }}
        >
           U8 Sijoitusottelut
        </button>
        </div>
      {activeTabs.sijoituspelit && (
        <div className="game-container">
          {quarterFinalsGames.map((game,index) => (
            <div className="game-info" key={game.id}>
              <div className="game-row" style={{ paddingTop: '15px', paddingBottom: '5px' }}>Klo {game.time}</div>
              <div className="game-row" style={{ paddingBottom: '15px', fontSize: '0.8rem' }}>
              ({index % 2 === 0 ? 'Lehvosen pääty' : 'Kellopääty'})
              </div>
              <div className="game-row" style={{ paddingBottom: '15px' }}>
                <table className="sijoituspeli">
                  <tbody>
                    <tr>
                      <td className="team-name">{game.team1}</td>
                      <td>-</td>
                      <td className="team-name">{game.team2}</td>
                    </tr>
                    <tr>
                      <td>{game.result1}</td>
                      <td></td>
                      <td>{game.result2}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>

      {/* U7 */}
      <div>
        <hr/>
        <h1 className='group'>U7</h1>
        <div className="team-list">
          {teams.u7.map((team, index) => (
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
            onClick={() => handleTabClick('u7', 'lohkotilanne')}
            className={`tab-button-lohko ${activeTabs['u7'] === 'lohkotilanne' ? 'active' : ''}`}
          >
            Lohkotilanne
          </button>
          <button
            onClick={() => handleTabClick('otteluohjelmaU7', 'otteluohjelma')}
            className={`tab-button-lohko ${activeTabs['otteluohjelmaU7'] === 'otteluohjelma' ? 'active' : ''}`}
          >
            Otteluohjelma
          </button>
          </div>
        {activeTabs.u7 && (
          <div>
            <h3>Lohkotilanne</h3>
          
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
              {calculateTeamStats('u7').map((teamStats) => (
                <tr key={teamStats.name}>
                  <td>
                    <img style={{ marginRight: '4px' }} src={teams.u7.find(team => team.name === teamStats.name)?.logoUrl} alt={teamStats.name} className="team-logo" /> {/* Display the team logo */}
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
       
        {activeTabs.otteluohjelmaU7 && (
          <div>
            <h3>Otteluohjelma</h3>
           
            <div className="game-container">
          {games.u7.map((game) => (
            <div className="game-info" key={game.id}>
              <div className="game-row" style={{ paddingTop:'15px' , paddingBottom: '5px' }}>Klo {game.time}</div>
              <div className="game-row" style={{ paddingBottom: '15px', fontSize: '0.8rem' }}>
                  (Keski kenttä)
              </div>
              <div className="game-row" style={{ paddingBottom: '15px' }} >
                <table>
                  <tbody>
                    <tr>
                      <td className="team-name">{game.team1}</td>
                      <td>
                        <img
                          src={teams.u7.find(team => team.name === game.team1)?.logoUrl}
                          alt={game.team1}
                          className="team-logo"
                        />
                      </td>
                      <td></td>
                      <td>-</td>
                      <td></td>
                      <td>
                        <img
                          src={teams.u7.find(team => team.name === game.team2)?.logoUrl}
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
    </div>
  );
};

export default Lauantai;