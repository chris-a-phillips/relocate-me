import React, { useState } from 'react';

const SearchBar = ({ searchValue, setSearchValue }) => {


  const handleSubmit = (event) => {
    event.preventDefault()
    setSearchValue(event.target.city.value)
  }

  console.log(searchValue)

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor='city'></label>
        <input id='city'></input>
        <button>Search</button>
      </form>
    </div>
  );
};

export default SearchBar;