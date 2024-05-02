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
      { id: 6, time: '13:40', team1: 'Salamat Blue', team2: 'Hunter Yellow', result1: 0, result2: 0 }
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
    u8lohkoa: ["Wolf Musta", "Salamat White", "Hunters Blue", "HJK Blue"],
    u8lohkob: ["Wolf Keltainen", "Salamat Blue", "Hunters Yellow", "HJK White"],
    u7: ["Wolf", "Haki Blue", "HIFK Red", "Haki Black", "Hunters U7"]
  };
  // Define the quarter-finals games
  const quarterFinalsGames = [
    { id: 1, time: '14:20', team1: 'Team A', team2: 'Team B', result1: 0, result2: 0 },
    { id: 2, time: '14:20', team1: 'Team C', team2: 'Team D', result1: 0, result2: 0 },
    { id: 3, time: '15:10', team1: 'Team E', team2: 'Team F', result1: 0, result2: 0 },
    { id: 4, time: '15:10', team1: 'Team G', team2: 'Team H', result1: 0, result2: 0 },
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
  const formatGroupName = (groupName) => {
    switch (groupName) {
      case 'u8lohkoa':
        return 'U8 lohko A';
      case 'u8lohkob':
        return 'U8 lohko B';
      case 'u7':
        return 'U7';
      default:
        return groupName;
    }
  };
  return (
    <div>
      {Object.keys(games).map((groupId) => (
        <div key={groupId}>
          <hr />
          <h2 className='group'>{formatGroupName(groupId)}</h2>

          <div className="team-list">
            {teams[groupId].map((team, index) => (
              <React.Fragment key={index}>
                <span className="team">{team}</span>
                {index !== teams[groupId].length - 1 && <hr className="team-divider" />}
              </React.Fragment>
            ))}
          </div>
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
                {calculateTeamStats(groupId).map((teamStats) => (
                  <tr key={teamStats.name}>
                    <td>{teamStats.name}</td>
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
            <h3>Otteluohjelma</h3>
          </div>
          <div className="game-container">
            {games[groupId].map((game) => (
              <div className="game-info" key={game.id}>
                <div className="game-row">Klo {game.time}</div>
                <div className="game-row">
                  <table>
                    <tbody>
                      <tr>
                        <td>{game.team1}</td>
                        <td>-</td>
                        <td>{game.team2}</td>
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
      ))}

      <div>
        <hr/>
        <h2>Sijoitusottelut</h2>
        <div className="game-container">
          {quarterFinalsGames.map((game, index) => (
            <div className="game-info" key={index}>
              <div className="game-row">Klo {game.time}</div>
              <div className="game-row">
                <span>{game.team1}</span>
                <span>-</span>
                <span>{game.team2}</span>
              </div>
              <div className="game-row">
                <span>{game.result1}</span>
                <span>-</span>
                <span>{game.result2}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Lauantai;