import React, { useState, useEffect } from 'react';

const Weather = ({ name }) => {
  const [info, setInfo] = useState(null)

  const url = (`https://api.teleport.org/api/urban_areas/slug:${name.toLowerCase().replace(/ /g, '-').replace(',', '')}/details/`)

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(res => {
        setInfo(res.categories[2])
        console.log(res.categories[2])
      })
  }, [])

  // if (info ) {
    
  // }

  // const weather = info.map(stats => {

  // })



  if (info === null) {
    return(null)
  }

  return (
    <div>
      Weather
      <h2>
        {info.label}
      </h2>
    </div>
  );
};

export default Weather;