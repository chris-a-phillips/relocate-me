import React from 'react';
import CityNames from './CityNames'
import Weather from './Weather'
import Statistics from './Statistics'

const PageInfo = ({ citiesList }) => {
      const listItem = (citiesList) 
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
      {listItem}
      
      {/* Page Info
      <header>
        <Weather />
      </header>

      <main>
        <Statistics />
      </main> */}

    </div>
  );
};

export default PageInfo;