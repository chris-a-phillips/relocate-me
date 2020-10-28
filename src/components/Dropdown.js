import React from 'react';


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
    </div>
  );
};

export default Dropdown;