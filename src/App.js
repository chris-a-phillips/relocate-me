import React, { useState } from 'react';
import './App.css';
import NavBar from './components/NavBar'
import Weather from './components/Weather'
import Banner from './components/Banner'
import PageData from './components/PageData'

function App({ searchValue, setSearchValue }) {
  const [searchValue, setSearchValue] = useState()

    const handleSubmit = (event) => {
    event.preventDefault()
    setSearchValue(event.target.city.value)
  }

    console.log(searchValue)

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
      <Weather />
      <Banner />
      <PageData />
      App.js
    </div>
  );
}

export default App;
