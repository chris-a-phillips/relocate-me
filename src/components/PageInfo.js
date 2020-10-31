import React, { useState, useEffect} from 'react';
import Weather from './Weather'
import Numbers from './Numbers'
import Picture from './Picture'
import Summary from './Summary'

const PageInfo = ({ match }) => {


  if (!match) {
    return(null)
  }

  return (
    <div>
      <h2>{match.params.name}</h2>
      <Weather name={match.params.name}/>
      <Picture name={match.params.name}/>
      <Summary name={match.params.name}/>
      <Numbers name={match.params.name}/>
    </div>
  );
};

export default PageInfo;