import React, { useState, useEffect } from 'react';
import { Route, Link } from 'react-router-dom'
import './App.css';
import NavBar from './components/NavBar'
// import Weather from './components/Weather'
// import Banner from './components/Banner'
import PageData from './components/PageData'

function App() {
  // const [searchValue, setSearchValue] = useState()
  const [cityData, setCityData] = useState([])

  // const handleSubmit = (event) => {
  //   event.preventDefault()
  //   setSearchValue(event.target.city.value)
  // }
    // const url = 'https://api.teleport.org/api/'


  // function getData() {
  //   fetch(url) 
  //     .then (res => res.json())
  //     .then (console.log)
  //     .then (res =>{
  //       setInfo(res)
  //   })
  // }


  return (
    <div className="App">
      <Link to='/'>Home</Link>
      <NavBar />
      {/* <button onClick={getData}>Get Data</button>
      
      <Link to='/pagedata'>
        Page Data
      </Link> */}
      {/* <PageData info={info}/> */}
      {/* <Route path='/pagedata' exact render={() => {
          return (
            <PageData/>
          )
        }}/> */}


    </div>
  );
}

export default App;

      {/* <NavBar searchValue={searchValue}/>
      <div>
        <form onSubmit={handleSubmit}>
          <label htmlFor='city'></label>
          <input id='city'></input>
          <button>Search</button>
        </form>
      </div>
      <Weather searchValue={searchValue}/>
      <Banner searchValue={searchValue}/>
      <PageData info={info} setInfo={setInfo}/> */}