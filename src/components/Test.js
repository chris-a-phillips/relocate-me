import React, { useState, useEffect} from 'react';

const Test = ({ name }) => {
  const [coordinates, setCoordinates] = useState(null)

  const url = (`https://api.teleport.org/api/cities/?search=${name.toLowerCase().replace(/ /g, '%20').replace(',', '')}&embed=city%3Asearch-results%2Fcity%3Aitem`)

  useEffect(() => {
      fetch(url)
        .then(res => res.json())
        .then(res => {
          setCoordinates(res._embedded.["city:search-results"][0]._embedded["city:item"].location)
          console.log(coordinates)
        })
  }, [])

  if (coordinates === null) {
    return(null)
  }


  return (
    <div>
      <img
      src={`https://maps.googleapis.com/maps/api/staticmap?center=San%20Jose,CA&zoom=14&size=400x400&key=${process.env.REACT_APP_STOCK_API_KEY}`}
      alt='might work'
      ></img>
    </div>
  );
};

export default Test;