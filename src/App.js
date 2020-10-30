import React, { useState, useEffect } from 'react';
import { Route, Link, Redirect } from 'react-router-dom'
import './App.css';
import Nav from './Components/Nav'
import PageInfo from './Components/PageInfo'
import Footer from './Components/Footer'
import About from './Components/About'


function App() {
  return (
    <div>

      <nav>
        <Nav />
      </nav>

      <main>
        <PageInfo />
      </main>

      <footer>
        <Footer />
      </footer>
      {/* <Route path='/' exact render={() => <Redirect to='/home'/>}/> */}
      <Route path='/about' component={About}/>

    </div>
  );
}

export default App;