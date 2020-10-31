import React, { useState, useEffect } from 'react';
import axios from 'axios'

const Weather = ({ latitude, longitude }) => {
  const [info, setInfo] = useState(null)

  const url = (`api.openweathermap.org/data/2.5/forecast?lat=${latitude}lon=&${longitude}&appid=${process.env.API_KEY}`)

  useEffect(() => {
    // axios.get(url)
    //   .then(response => {
    //     setInfo(response)
    //     console.log(info)
    //   })
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