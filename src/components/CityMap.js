import React from 'react';
import CityNames from './CityLink'

const CityMap = ({ citiesList }) => {
  const list = (citiesList) 
  ?  (citiesList.map(cityName => {
    return(
      <CityNames
        key={cityName.href}
        id={cityName.name}
        name={cityName.name}
      />
    )
  }))
  : null

  return (
    <div>
      {list}
    </div>
  );
};

export default CityMap;