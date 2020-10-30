import React, { useState, useEffect } from 'react';

const CityNames = ({ name, key, id }) => {
  const [city, setCity] = useState('')

  const passDown = (event) => {
    setCity(event.target.innerText.toLowerCase())
    console.log(event.target.innerText)
    console.log(event.target.innerHTML)
    console.log(id)
    console.log(city)
  }
  
  return (
    <div onClick={passDown}>
      <button>
        {name}
      </button>
    </div>
  );
};

export default CityNames;