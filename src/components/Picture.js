import React, { useState, useEffect } from 'react';

const Picture = ({ name }) => {
  const [info, setInfo] = useState(null)

  const url = (`https://api.teleport.org/api/urban_areas/slug:${name.toLowerCase().replace(/ /g, '-').replace(',', '')}/images/`)

    useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(res => {
        setInfo(res)
      })
  }, [])

    if (info === null) {
    return(null)
  }

  console.log(info)

  return (

    <div>
      Picture
    </div>
  );
};

export default Picture;