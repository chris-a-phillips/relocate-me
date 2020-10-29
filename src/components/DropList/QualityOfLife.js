import React, { useState, useEffect } from 'react';

const QualityOfLife = () => {
///
  const [info, setInfo] = useState([])


  const url = 'https://api.teleport.org/api/urban_areas/slug:san-francisco-bay-area/scores/'


  useEffect(() => {
    fetch(url) 
      .then (res => res.json())
      .then (res =>{
        setInfo(res)
      })
    ;
  }, [])

    if (info.length === 0) {
    return(
      <p>Loading...</p>
    )
  }

  return (
    <div>
    {info.categories.map(category => {
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

export default QualityOfLife;