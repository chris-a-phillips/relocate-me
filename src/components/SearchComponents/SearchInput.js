import React, { useState, useEffect } from 'react';
import Cities from './Cities'
// import SearchPage from './SearchComponents/SearchPage.js';

const SearchInput = () => {
  const [search, setSearch] = useState('')
  const [cities, setCities] = useState([])
  const [filteredCities, setFilteredCities] = useState([])

  const url = 'https://api.teleport.org/api/urban_areas/'

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(json => setCities(json._links.["ua:item"]))
  }, [])

  useEffect(() => {
    setFilteredCities(
      cities.filter(city => {
        return(
          city.name.toLowerCase().includes(search.toLowerCase())
        )
    })
    )
  }, [search, cities])

  const updateSearch = (event) => {
    setSearch(event.target.value)
  }


  
  return (
    <div className="SearchInput">
      <input type='text'
      placeholder='City Name'
      value={search}
      onChange={updateSearch}
      />

      <div className='innerDiv'>
        {filteredCities.map((city,) => {
        return(
          <Cities
            key={city.name}
            name={city.name}
          />
        )
      })}
      </div>


    </div>
  );
}

export default SearchInput;

    {/* <input
    value={keyword}
    placeholder={"search city"}
    onChange={(e) => keyword = (e.target.value)}
    />
    <button
    onChange
    // onClick={() => }
    >Search</button>
       */}