import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import CityNames from './CityNames'
import Details from '../Details'

const SearchInput = () => {
  const [search, setSearch] = useState('')
  const [cities, setCities] = useState([])
  const [filteredCities, setFilteredCities] = useState([])

  const url = 'https://api.teleport.org/api/urban_areas/'

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(json => setCities(json._links.["ua:item"]))
      .catch(console.error)
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

  // const clearSearchBar = () => {
  //   setFilteredCities()
  // }

    const listItem = (search) 
    ?  (filteredCities.map(city => {
        return(
            <CityNames
              id={city.href}
              name={city.name}
          />
        )
      }))
    : null
  
  return (
    <div className="SearchInput">

      <input type='text'
      placeholder='City Name'
      value={search}
      onChange={updateSearch}
      />

      <div className='FilteredSearch'>{listItem}</div>
      <main>
        <Route path='/details/:id' component={Details} />
      </main>

    </div>
  );
};

export default SearchInput;