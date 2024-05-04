import React from 'react';

const Lauantai = () => {
  
  const games = {
    u8lohkoa: [
      { id: 1, time: '10:00', team1: 'Wolf Musta', team2: 'Salamat White', result1: 0, result2: 0 },
      { id: 2, time: '10:40', team1: 'Hunters Blue', team2: 'HJK Blue', result1: 0, result2: 0 },
      { id: 3, time: '11:20', team1: 'Wolf Musta', team2: 'Hunters Blue', result1: 0, result2: 0 },
      { id: 4, time: '12:10', team1: 'Salamat White', team2: 'HJK Blue', result1: 0, result2: 0 },
      { id: 5, time: '12:50', team1: 'Wolf Musta', team2: 'HJK Blue', result1: 0, result2: 0 },
      { id: 6, time: '13:40', team1: 'Salamat White', team2: 'Hunters Blue', result1: 0, result2: 0 }
    ],
    u8lohkob: [
      { id: 1, time: '10:00', team1: 'Wolf Keltainen', team2: 'Salamat Blue', result1: 0, result2: 0 },
      { id: 2, time: '10:40', team1: 'Hunters Yellow', team2: 'HJK White', result1: 0, result2: 0 },
      { id: 3, time: '11:20', team1: 'Wolf Keltainen', team2: 'Hunters Yellow', result1: 0, result2: 0 },
      { id: 4, time: '12:10', team1: 'Salamat Blue', team2: 'HJK White', result1: 0, result2: 0 },
      { id: 5, time: '12:50', team1: 'Wolf Keltainen', team2: 'HJK White', result1: 0, result2: 0 },
      { id: 6, time: '13:40', team1: 'Salamat Blue', team2: 'Hunters Yellow', result1: 0, result2: 0 }
    ],
    u7: [
      { id: 1, time: '10:00', team1: 'Wolf', team2: 'Hunters U7', result1: 0, result2: 0 },
      { id: 2, time: '10:40', team1: 'HIFK Red', team2: 'Haki Blue', result1: 0, result2: 0 },
      { id: 3, time: '11:20', team1: 'Haki Blue', team2: 'Haki Black', result1: 0, result2: 0 },
      { id: 4, time: '12:10', team1: 'HIFK Red', team2: 'Hunters U7', result1: 0, result2: 0 },
      { id: 5, time: '12:50', team1: 'Wolf', team2: 'HIFK Red', result1: 0, result2: 0 },
      { id: 6, time: '13:40', team1: 'Hunters U7', team2: 'Haki Black', result1: 0, result2: 0 },
      { id: 7, time: '14:20', team1: 'Wolf', team2: 'Haki Blue', result1: 0, result2: 0 },
      { id: 8, time: '15:10', team1: 'HIFK Red', team2: 'Haki Black', result1: 0, result2: 0 },
      { id: 9, time: '15:50', team1: 'Wolf', team2: 'Haki Black', result1: 0, result2: 0 },
      { id: 10, time: '15:50', team1: 'Haki Blue', team2: 'Hunters U7', result1: 0, result2: 0 },
    ]
  };
  const teams = {
    u8lohkoa: [
      { name: "Wolf Musta", logoUrl: "https://files.eliteprospects.com/layout/logos/f667f640-87d9-4879-b248-dde1387fac00_large.png" },
      { name: "Salamat White", logoUrl: "https://scontent.fqlf1-2.fna.fbcdn.net/v/t39.30808-1/309048836_590434576208237_1242104477708606014_n.png?stp=c99.0.480.480a_dst-png_p480x480&_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_ohc=1eiwrLQmBMUQ7kNvgHq5634&_nc_ht=scontent.fqlf1-2.fna&oh=00_AfCPuTTFjWh2TP3D0A0jvJEZ9GjvJCiR77q0ZwoNBXQJvQ&oe=663992CD" },
      { name: "Hunters Blue", logoUrl: "https://static.jopox.fi/hunters/logos/logo-600.png" },
      { name: "HJK Blue", logoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Helsingin_J%C3%A4%C3%A4kiekkoklubi_logo.png/240px-Helsingin_J%C3%A4%C3%A4kiekkoklubi_logo.png" }
    ],
    u8lohkob: [
      { name: "Wolf Keltainen", logoUrl: "https://files.eliteprospects.com/layout/logos/f667f640-87d9-4879-b248-dde1387fac00_large.png" },
      { name: "Salamat Blue", logoUrl: "https://scontent.fqlf1-2.fna.fbcdn.net/v/t39.30808-1/309048836_590434576208237_1242104477708606014_n.png?stp=c99.0.480.480a_dst-png_p480x480&_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_ohc=1eiwrLQmBMUQ7kNvgHq5634&_nc_ht=scontent.fqlf1-2.fna&oh=00_AfCPuTTFjWh2TP3D0A0jvJEZ9GjvJCiR77q0ZwoNBXQJvQ&oe=663992CD" },
      { name: "Hunters Yellow", logoUrl: "https://static.jopox.fi/hunters/logos/logo-600.png" },
      { name: "HJK White", logoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Helsingin_J%C3%A4%C3%A4kiekkoklubi_logo.png/240px-Helsingin_J%C3%A4%C3%A4kiekkoklubi_logo.png" }
    ],
    u7: [
      { name: "Wolf", logoUrl: "https://files.eliteprospects.com/layout/logos/f667f640-87d9-4879-b248-dde1387fac00_large.png" },
      { name: "Haki Blue", logoUrl: "https://upload.wikimedia.org/wikipedia/fi/thumb/b/b0/Haki-logo.png/500px-Haki-logo.png" },
      { name: "HIFK Red", logoUrl: "https://hifk.fi/wp-content/themes/hifk/assets/images/ifk.svg" },
      { name: "Haki Black", logoUrl: "https://upload.wikimedia.org/wikipedia/fi/thumb/b/b0/Haki-logo.png/500px-Haki-logo.png" },
      { name: "Hunters U7", logoUrl: "https://static.jopox.fi/hunters/logos/logo-600.png" }
    ]
  };
  // Define the quarter-finals games
  const quarterFinalsGames = [
    { id: 1, time: '14:20', team1: 'A Lohko | sija 4', team2: 'B Lohko | sija 4', result1: 0, result2: 0 },
    { id: 2, time: '14:20', team1: 'A Lohko | sija 3', team2: 'B Lohko | sija 3', result1: 0, result2: 0 },
    { id: 3, time: '15:10', team1: 'A Lohko | sija 2', team2: 'B Lohko | sija 2', result1: 0, result2: 0 },
    { id: 4, time: '15:10', team1: 'A Lohko | sija 1', team2: 'B Lohko | sija 1', result1: 0, result2: 0 },
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
  return (
    <div>
      {/* U8 group A */}
      <div>
        <hr />
        <h2 className='group'>U8 lohko A</h2>
        {/* Team list for U8 group A */}
        <div className="team-list">
          {teams.u8lohkoa.map((team, index) => (
            <React.Fragment key={index} style={{ font: '10px'}}>
              <span className="team">
                <img style={{ marginRight: '10px'}} src={team.logoUrl} alt={team.name} className="team-logo" /> {/* Display the team logo */}
                {team.name}
              </span>
              {index !== teams.u8lohkoa.length - 1 && <hr className="team-divider" />}
            </React.Fragment>
          ))}
        </div>
        {/* Ranking table for U8 group A */}
        <div>
          
          <h3>Lohkotilanteet</h3>
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
        <div>
        <h3> Otteluohjelma </h3>

          </div>
        {/* Rendering U8 group A games */}
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
  
      {/* U8 group B */}
      <div>
        <hr />
        <h2 className='group'>U8 lohko B</h2>
        {/* Team list for U8 group B */}
        <div className="team-list">
          {teams.u8lohkob.map((team, index) => (
            <React.Fragment key={index}>
              <span className="team">
                <img style={{ marginRight: '15px' }} src={team.logoUrl} alt={team.name} className="team-logo" /> {/* Display the team logo */}
                {team.name}
              </span>
              {index !== teams.u8lohkob.length - 1 && <hr className="team-divider" />}
            </React.Fragment>
          ))}
        </div>
        {/* Ranking table for U8 group B */}
        <div>
          <h3>Lohkotilanteet</h3>
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
                    <img style={{ marginRight: '4px' }}src={teams.u8lohkob.find(team => team.name === teamStats.name)?.logoUrl} alt={teamStats.name} className="team-logo" /> {/* Display the team logo */}
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
        <div>
        <h3> Otteluohjelma </h3>
          </div>
        {/* Rendering U8 group B games */}
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
  
      {/* Quarterfinal games for U8 */}
      <div>
  <hr />
  <h3>U8 Sijoitusottelut</h3>
  {/* Rendering quarterfinal games for U8 */}
  <div className="game-container">
    {quarterFinalsGames.map((game, index) => (
      <div className="game-info" key={index}>
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
</div>
      {/* U7 */}
      <div>
        <hr />
        <h2 className='group'>U7</h2>
        {/* Team list for U7 */}
        <div className="team-list">
          {teams.u7.map((team, index) => (
            <React.Fragment key={index}>
              <span className="team">
                <img style={{ marginRight: '15px' }} src={team.logoUrl} alt={team.name} className="team-logo" /> {/* Display the team logo */}
                {team.name}
              </span>
              {index !== teams.u7.length - 1 && <hr className="team-divider" />}
            </React.Fragment>
          ))}
        </div>
        {/* Ranking table for U7 */}
        <div>
          <h3>Lohkotilanteet</h3>
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
                    <img style={{ marginRight: '7px' }}src={teams.u7.find(team => team.name === teamStats.name)?.logoUrl} alt={teamStats.name} className="team-logo" /> {/* Display the team logo */}
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
        {/* Rendering U7 games */}
        <div>
            <h3> Otteluohjelma</h3>
          </div>
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
    </div>
  );
          }  

export default Lauantai;
