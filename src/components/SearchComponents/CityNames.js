import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Details from '../Details'


const CityNames = ({ name, id }) => {
  const [selection, setSelection] = useState('')
  const [chosenCity, setChosenCity] = useState([])

  const url = (`https://api.teleport.org/api/urban_areas/slug:${name.toLowerCase()}/details/`)

  const clickItem = (event) => {
    setSelection(event.target.innerText.toLowerCase())
    fetch(url)
      .then((res) => res.json())
      .then((json) => {
        setChosenCity(json.categories)
      })
      .catch(console.error)
  }



  return (
    <div onClick={clickItem}>
      <Link to={`/details/${id}`}key={name}>
        {name}
      </Link>
      <Details
      chosenCity={chosenCity}
      chosenCity={chosenCity}
      chosenCity={chosenCity}
      chosenCity={chosenCity}
      chosenCity={chosenCity}
      chosenCity={chosenCity}
      chosenCity={chosenCity}
      chosenCity={chosenCity}
      chosenCity={chosenCity}
      chosenCity={chosenCity}
      chosenCity={chosenCity}
      />
    </div>
  );
};

export default CityNames;