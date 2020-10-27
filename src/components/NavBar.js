import React from 'react';
import Dropdown from './Dropdown';
import SearchBar from './SearchBar'

const NavBar = () => {
  return (
    <div>
      <div>
        <span>Logo</span>
        <span>Home</span>
        <Dropdown />
        <SearchBar />
      </div>
    </div>
  );
};

export default NavBar;