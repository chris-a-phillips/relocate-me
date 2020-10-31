import React, { useState, useEffect } from 'react';

const Weather = ({ geoNameID }) => {
  const [info, setInfo] = useState(null)

  const url = (`api.openweathermap.org/data/2.5/forecast?id=${geoNameID}appid=${process.env.API_KEY}`)

  useEffect(() => {
    fetch(url)
      // .then(res => res.json())
      .then(res => {
        setInfo(res)
        console.log(res)
      })
  }, [])



  if (info === null) {
    return(null)
  }

  return (
    <div>
      Weather
    </div>
  );
};

export default Weather;