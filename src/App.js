import React, { useState, useEffect } from 'react';
import { Route, Link } from 'react-router-dom'
import './App.css';
import PageData from './Components/PageData'
// import Summary from './'
// import Weather from './components/Weather'

function App() {
  return (
    <div className="App">
      
      <PageData />
      {/* <Summary /> */}

    </div>
  );
}

export default App;