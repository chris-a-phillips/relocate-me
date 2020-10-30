import React, { useState, useEffect } from 'react';
import { Route, Link, Redirect } from 'react-router-dom'
import './App.css';
import Nav from './Components/Nav'
import PageInfo from './Components/PageInfo'
import Footer from './Components/Footer'
import About from './Components/About'
import CityNames from './Components/CityNames'
import Summary from './Components/Summary'
import Landing from './Components/Landing'


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



  return (
    <div>

      {/* <div>
        <h2>Cities</h2>
        {listItem}
      </div> */}

      <nav>
        <Nav />
      </nav>
hello world
      <main>
        <Route path='/home' exact render={() => {
          return(
            <PageInfo 
            citiesList={citiesList}
            />
            )
          }}/>
          <Route path='/about' exact component={About}/>
          <Route path='/cities/:name' exact render={routerProps => {
            return(
              <Summary 
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