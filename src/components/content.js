import React from 'react';
import Alohko from './aLohko';
import Blohko from './bLohko';
//import Ruokailu from './Ruokailu';
import Pukukopit from './Pukukopit';
import Kahvila from './Kahvila';
//import Arpajaiset from './Arpajaiset';
import TurnausInfo from './TurnausInfo';
//import Lamaritutka from './Lamaritutka';
import { useLocation } from 'react-router-dom';

const Content = () => {
  const location = useLocation();
  const activeTab = location.pathname.substring(1); // Extract the active tab from the URL

  return (
    <div>
      {activeTab === 'turnausInfo' && <TurnausInfo/>}
      {activeTab === 'aLohko' && <Alohko />}
      {activeTab === 'bLohko' && < Blohko />}
            {/*{activeTab === 'ruokailu' && <Ruokailu />}*/}
      {activeTab === 'pukukopit' && <Pukukopit />}
      {activeTab === 'kahvila' && <Kahvila />}
      {/*{activeTab === 'arpajaiset' && <Arpajaiset />}*/}
    </div>
  );
};

export default Content;
