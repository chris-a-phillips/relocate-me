import React, { useState } from 'react';
import './App.css';
import NavBar from './components/NavBar'
import Weather from './components/Weather'
import Banner from './components/Banner'
import PageData from './components/PageData'

function App() {
  const [searchValue, setSearchValue] = useState()

    const handleSubmit = (event) => {
    event.preventDefault()
    setSearchValue(event.target.city.value)
  }

    console.log(searchValue)
    const url = 'https://api.teleport.org/api/'


  fetch(url)
    .then(res => res.json())
    .then(res => {})



  return (
    <div className="App">
      <NavBar searchValue={searchValue}/>
      <div>
        <form onSubmit={handleSubmit}>
          <label htmlFor='city'></label>
          <input id='city'></input>
          <button>Search</button>
        </form>
      </div>
      <Weather searchValue={searchValue}/>
      <Banner searchValue={searchValue}/>
      <PageData searchValue={searchValue} url={url}/>

    </div>
  );
}

export default App;
