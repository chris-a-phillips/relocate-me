import React from 'react';
import Dropdown from './Dropdown';
import SearchInput from './SearchComponents/SearchInput'


const NavBar = () => {


  return (
    <div>
      <div>
        <span>Logo</span>
        <span>Home</span>
        <Dropdown />
        <SearchInput />
      </div>
      <main>

      </main>
    </div>
  );
};

export default NavBar;
// fetch for search`
// show as list
// second fetch for details