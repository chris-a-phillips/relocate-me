import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'

const CityNames = ({ name, id, city, setCity }) => {
  // const passDown = (event) => {
  //   console.log(event)
  //   console.log(event.target)
  //   console.log(event.target.innerText.toLowerCase())
  //   setCity(event.target.innerText.toLowerCase())
  //   console.log(city)
  // }

  
  return (
    <div>
    {/* <div onClick={work}> */}
      <Link to={`/cities/${name}`}>
        {name}
      </Link>
      {/* {city && 'city state is defined'} */}
    </div>
  );
};

export default CityNames;