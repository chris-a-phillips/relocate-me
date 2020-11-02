// fetch for the specific categories
// send categories to details page
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Details from '../Details'
import Banner from './Banner'

const CityNames = ({ name, id }) => {
  const [selection, setSelection] = useState('')
  const [chosenCity, setChosenCity] = useState([])

  const url = (`https://api.teleport.org/api/urban_areas/slug:${name.toLowerCase()}/details/`)
  // string replace space with hyphen

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
    <div>
      <div>
        <Banner name={name} citySize={chosenCity[1]}/>
      </div>
      <div onClick={clickItem}>
        <Link to={`/details/${id}`}key={name}>
          {name}
        </Link>
      </div>
      <div>
        <Details
      name={name}
      chosenCity={chosenCity}
      citySize={chosenCity[1]}
      costOfLiving={chosenCity[3]}
      culture={chosenCity[4]}
      economy={chosenCity[5]}
      healthcare={chosenCity[7]}
      housing={chosenCity[8]}
      internal={chosenCity[9]}
      language={chosenCity[11]}
      minorities={chosenCity[12]}
      pollution={chosenCity[15]}
      safety={chosenCity[16]}
      taxation={chosenCity[18]}
      />
      </div>
    </div>
    
  );
};

export default CityNames;