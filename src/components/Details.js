import React, { useState, useEffect } from 'react';

const Details = ({ name }) => {
  const [selectedCity, setSelectedCity] = useState([])

  const url = (`https://api.teleport.org/api/urban_areas/slug:${name}/details/`)

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((json) => {
        setSelectedCity(json)
      })
      .catch(console.error)
  }, [])

  return (
    <div>
      {/* {selectedCity} */}
    </div>
  );
};

export default Details;