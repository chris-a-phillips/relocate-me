import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'

const CityLink = ({ name }) => {
  
  return (
    <div>
      <Link to={`/cities/${name}`}>
        {name}
      </Link>
    </div>
  );
};

export default CityLink;