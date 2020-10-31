import React, { useState, useEffect } from 'react';

const Numbers = ({ name }) => {
  const [info, setInfo] = useState(null)

  const url = (`https://api.teleport.org/api/urban_areas/slug:${name.toLowerCase().replace(/ /g, '-').replace(',', '')}/scores/`)


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

  return (
    <div>
      Numbers
      {info.categories.map(category => {
        return(
          <div key={category.name}>
            <h2>{category.name}</h2>
            <p>{category.score_out_of_10}</p>
          </div>
        )
      })}
    </div>
  );
};

export default Numbers;