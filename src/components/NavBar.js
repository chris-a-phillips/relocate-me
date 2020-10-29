import React from 'react';
import Dropdown from './Dropdown';
import SearchInput from './SearchComponents/SearchInput'
import { Link } from 'react-router-dom';


const NavBar = () => {


  return (
    <div>
      <div>
        <Link to='/'>Home</Link>
        <span>Logo</span>
        {/* <Dropdown /> */}
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