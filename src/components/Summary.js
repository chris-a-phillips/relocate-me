import React, { useState, useEffect} from 'react';
import Weather from './Weather'

const Summary = ({ match }) => {
  const [info, setInfo] = useState(null)

  const url = `https://api.teleport.org/api/urban_areas/slug:${match.params.name.toLowerCase()}/scores/`


  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(res => {
        console.log(res)
        setInfo(res)
      })
  }, [])

  // const summary = (info)
  // ? info.categories.map(category => {
  //   return(
  //     <div key={category.name}>
  //       <h3>{category.name}</h3>
  //       <p>{category.score_out_of_10}</p>
  //     </div>
  //   )
  // })
  // : null

  // console.log(info)
  if (!info) {
    return(null)
  }

  console.log(match)

  return (
    <div>
      <Weather name={match.params.name}/>
      {match.params.name}
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

export default Summary;