import React from 'react';
import Summary from './DropList/Summary'
import QualityOfLife from './DropList/QualityOfLife'
import EconomicStatistics from './DropList/EconomicStatistics'
import PopulationAndDemographics from './DropList/PopulationAndDemographics'
import CountryIndexAndVisa from './DropList/CountryIndexAndVisa'

const Dropdown = () => {
  return (
    <div>
      <label for="dropdown">Selected Data Page:</label>
        <select name="pages" id="pages">
          <option value="Summary">Summary</option>
          <option value="QualityOfLife">Quality of Life</option>
          <option value="EconomicStatistics">Economic Statistics</option>
          <option value="PopulationAndDemographics">Population and Demographics</option>
          <option value="CountryIndexAndVisa">Country Index and Visa</option>
        </select>
      <Summary />
      <QualityOfLife />
      <EconomicStatistics />
      <PopulationAndDemographics />
      <CountryIndexAndVisa />
    </div>
  );
};

export default Dropdown;