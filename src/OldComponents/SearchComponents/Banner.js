// fetch quality of life scores
// map quality of life scores
import React, { useState, useEffect } from 'react';

const Banner = ({ name, citySize }) => {
  const [info, setInfo] = useState([])

  const url = (`https://api.teleport.org/api/urban_areas/slug:${name.toLowerCase()}/scores/`)

  useEffect(() => {
    fetch(url) 
      .then (res => res.json())
      .then (res =>{
        setInfo(res)
      })
    ;
  }, [])

  return (
    <div>
    {!citySize 
    ? null
  : info.categories.map(category => {
    return(
      <div key={category.name}>
        <p>{category.name}</p>
        <p>{category.score_out_of_10}</p>
      </div>
    )
  })}
    </div>
  );
};

export default Banner;