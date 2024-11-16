import React from 'react';

const Pukukopit = () => {
  return (
    <div className="container">
        <p>Pukukopit on joukkueilla käytössä koko turnauspäivän ajan. </p>
      <div className="table-container">
        <hr/>
        <table className='ranking-table'>
          <thead>
            <tr>
              <th>Joukkue</th>
              <th>Koppi</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Wolf</td>
              <td>Iso ulkokoppi</td>
            </tr>
            <tr>
              <td>EVU </td>
              <td>Pieni ulkoKoppi </td>
            </tr>
            <tr>
              <td>Hunters</td>
              <td>Koppi 1</td>
            </tr>
            <tr>
              <td>Viikingit</td>
              <td>Koppi 2</td>
            </tr>
            <tr>
              <td>Karhu-kissat</td>
              <td>Koppi 3</td>
            </tr>
            <tr>
              <td>KJT</td>
              <td>Koppi 4</td>
            </tr>
            
          </tbody>
        </table>
      </div>

      <div className="table-container">
        <hr/>
        
      </div>
    </div>
  );
};

export default Pukukopit;
