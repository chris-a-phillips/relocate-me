import React, { useState, useEffect } from 'react';
import { Route, Link, Redirect } from 'react-router-dom'
import './App.css';
import Header from './Components/Header'
import SearchInput from './Components/SearchComponents/SearchInput'
import Home from './Components/Landing.js/Home'
import About from './Components/Landing.js/About'

//  maybe home isn't needed but it is set up
function App() {
  return (
    <div>
      <nav>
        <Header />
      </nav>
      <main>
        {/* </LandingPage> */}
        {/* <Weather /> */}
        <SearchInput />
      </main>
      <footer>
        {/* <Footer /> */}
      </footer>
      <div>
        <Route path='/home' render={() => <Home />}/>
        <Route path='/about' component={About}/>
        <Route path='/' exact render={() => <Redirect to='/home'/>}/>
      </div>
    </div>
  );
}

export default App;