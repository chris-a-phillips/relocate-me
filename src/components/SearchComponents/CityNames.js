import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Details from '../Details'


const CityNames = ({ name, id }) => {
  const [select, setSelect] = useState('')

  const clickItem = (event) => {
    setSelect(event.target.name)
  }

  return (
    <div onCLick={clickItem}>
      <Link to={`details/${id}`} key={name}>
        {name}
      </Link>
      <Details name={name}/>
    </div>
  );
};

export default CityNames;