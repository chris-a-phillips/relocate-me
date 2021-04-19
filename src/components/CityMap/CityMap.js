import React from 'react';
import CityNames from '../CityLink/CityLink';

const CityMap = ({ citiesList }) => {
	const list = citiesList
		? citiesList.map((cityName) => {
				return (
					<CityNames
						key={cityName.href}
						id={cityName.name}
						name={cityName.name}
					/>
				);
		  })
		: null;

	return (
		<div className='city-heading'>
			<h1>Cities List</h1>
			<h3>Choose a destination</h3>
			<div className='city-list'>
				<ul>{list}</ul>
			</div>
		</div>
	);
};

export default CityMap;
