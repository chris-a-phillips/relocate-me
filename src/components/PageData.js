import React from 'react';
import Summary from './DropList/Summary'
import QualityOfLife from './DropList/QualityOfLife'
import EconomicStatistics from './DropList/EconomicStatistics'
import PopulationAndDemographics from './DropList/PopulationAndDemographics'
import CountryIndexAndVisa from './DropList/CountryIndexAndVisa'

const PageData = ({ searchValue, setSearchValue }) => {

  return (
    <div>
      <Summary />
      <QualityOfLife searchValue={searchValue}/>
      <EconomicStatistics />
      <PopulationAndDemographics />
      <CountryIndexAndVisa />
    </div>
  );
};

export default PageData;