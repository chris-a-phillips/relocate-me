import React, { useState } from 'react';

const SearchBar = ({ searchValue, setSearchValue }) => {


  const handleSubmit = (event) => {
    event.preventDefault()
    setSearchValue(event.target.city.value)
  }
// this is tough
  console.log(searchValue)

  return (
    <div>
      <input 
      key="city"
      // value={keyword}
      placeholder={"search city"}
      // onChange={(e) => setKeyword(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
// fetch for search`
// show as list
// second fetch for details