import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom'
import './App.css';
import Nav from './components/Nav/Nav'
import CityMap from './components/CityMap/CityMap'
import Footer from './components/Footer/Footer'
import PageInfo from './components/PageInfo/PageInfo'
import Landing from './components/Landing/Landing'
import About from './components/About/About'

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