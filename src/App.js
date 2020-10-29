import React, { useState, useEffect } from 'react';
import { Route, Link } from 'react-router-dom'
import './App.css';
import NavBar from './Components/NavBar'
// import Weather from './components/Weather'
// import Banner from './components/Banner'

function App() {
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



    </div>
  );
}

export default App;