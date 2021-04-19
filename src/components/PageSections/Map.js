import React, { useState, useEffect} from 'react';

const Map = ({ name }) => {
  const [lat, setLat] = useState(null)
  const [lon, setLon] = useState(null)

  const url = (`https://api.teleport.org/api/cities/?search=${name.toLowerCase().replace(/ /g, '%20').replace(',', '')}&embed=city%3Asearch-results%2Fcity%3Aitem`)

  useEffect(() => {
      fetch(url)
        .then(res => res.json())
        .then(res => {
          if (res.count !== 0) {
            setLat(res._embedded.["city:search-results"][0]._embedded["city:item"].location.latlon.latitude)
            setLon(res._embedded.["city:search-results"][0]._embedded["city:item"].location.latlon.longitude)
          }
        })
  }, [])

  if (lat === null) {
    return(null)
  }

  return (
    <div>
      <img
      src={`https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lon}&zoom=4&size=400x400&markers=color:blue%7Clabel:%7C${lat},${lon}&key=${process.env.REACT_APP_STOCK_API_KEY}`}
      alt={`map of ${name}`}
      ></img>
    </div>
  );
};

export default Map;