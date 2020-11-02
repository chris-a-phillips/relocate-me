//  copy of old app.js
import React, { useState, useEffect } from 'react';
import { Route, Link, Redirect } from 'react-router-dom'
import './App.css';
import Header from './OldComponents/Header'
import SearchInput from './OldComponents/SearchComponents/SearchInput'


function App() {
  return (
    <div>
      <nav>
        <Header />
        <Route path='/' exact render={() => <Redirect to='/home'/>}/>
      </nav>
      <main>
        {/* </LandingPage> */}
        {/* <Weather /> */}
        <SearchInput />
      </main>
      <footer>
        {/* <Footer /> */}
      </footer>
    </div>
  );
}

export default App;