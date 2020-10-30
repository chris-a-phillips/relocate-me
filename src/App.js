import React, { useState, useEffect } from 'react';
import { Route, Link, Redirect } from 'react-router-dom'
import './App.css';
import Nav from './Components/Nav'
import PageInfo from './Components/PageInfo'
import Footer from './Components/Footer'
import About from './Components/About'
import CityNames from './Components/CityNames'


function App() {
  const [citiesList, setCitiesList] = useState([])
  const [city, setCity] = useState()

  const ListUrl = 'https://api.teleport.org/api/urban_areas/'

  // const ScoresUrl = `https://api.teleport.org/api/urban_areas/slug:${city}/scores/`

  useEffect(() => {
      fetch(ListUrl)
    .then(res => res.json())
    .then(res => {
      setCitiesList(res._links.['ua:item'])
    })
  }, [])

  const selectCity = () => {
    setCitiesList('')
  }

    const listItem = (citiesList) 
    ?  (citiesList.map(cityName => {
        return(
            <CityNames
              key={cityName.href}
              id={cityName.name}
              name={cityName.name}
          />
        )
      }))
    : null

  return (
    <div>

      <div onClick={selectCity}>
        <h2>Cities</h2>
        {listItem}
      </div>

      <nav>
        <Nav />
      </nav>

      <main>
        <PageInfo />
      </main>

      <footer>
        <Footer />
      </footer>
      {/* <Route path='/' exact render={() => <Redirect to='/home'/>}/> */}
      <Route path='/about' component={About}/>

    </div>
  );
}

export default App;