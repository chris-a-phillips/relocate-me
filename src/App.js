import React, { useState, useEffect } from 'react';
import { Route, Link, Redirect } from 'react-router-dom'
import './App.css';
import Nav from './Components/Nav'
import CityMap from './Components/CityMap'
import CityLink from './Components/CityLink'
import Footer from './Components/Footer'
import About from './Components/About'
import PageInfo from './Components/PageInfo'
import Landing from './Components/Landing'

// go back and try to make details work


function App() {
  const [citiesList, setCitiesList] = useState([])

  const ListUrl = 'https://api.teleport.org/api/urban_areas/'

  useEffect(() => {
    fetch(ListUrl)
      .then(res => res.json())
      .then(res => {
        setCitiesList(res._links.['ua:item'])
      })
  }, [])



  return (
    <div className='app'>

      <header>
        <Nav />
      </header>

      <main>
        <Route path='/cities' exact render={() => {
          return(
            <CityMap 
            citiesList={citiesList}
            />
            )
          }}/>
          <Route path='/about' exact component={About}/>
          <Route path='/cities/:name' exact render={routerProps => {
            return(
              <PageInfo 
                match={routerProps.match}
              />
            )
          }}/>
          <Route path='/' exact component={Landing}/>
      </main>

      <footer>
        <Footer />
      </footer>

    </div>
  );
}

export default App;