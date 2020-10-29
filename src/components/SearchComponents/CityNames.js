import React from 'react';
import { Link } from 'react-router-dom';
import Details from '../Details'


const CityNames = ({ name, id }) => {

  return (
    <div>
      <Link to={`details/${id}`} key={name}>
        {name}
      </Link>
      <Details name={name}/>
    </div>
  );
};

export default CityNames;