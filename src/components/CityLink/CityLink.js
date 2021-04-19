import React from 'react';
import { Link } from 'react-router-dom'

const CityLink = ({ name }) => {
  
  return (
    <li>
      <Link to={`/cities/${name}`}>
        {name}<br></br>
      </Link>
    </li>
  );
};

export default CityLink;