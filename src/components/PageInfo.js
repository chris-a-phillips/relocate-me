import React from 'react';
import Weather from './Weather'
import Statistics from './Statistics'

const PageInfo = () => {
  return (
    <div>

      
      Page Info
      <header>
        <Weather />
      </header>

      <main>
        <Statistics />
      </main>

    </div>
  );
};

export default PageInfo;