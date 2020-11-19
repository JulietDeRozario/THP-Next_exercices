import React, { useState } from 'react';
import ProfileInfos from './Components/ProfileInfos';
import PublicationsArea from './Components/PublicationsArea';
import data from './ProfileData';

const App = () => {

  return (
    <div id='main' style={{ margin: 50 }}>
      < ProfileInfos data={data} />
      < PublicationsArea data={data} />
    </div>
  )
}

export default App;
