import React, { useState, useEffect } from 'react';

const Scores = ({ name }) => {
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
      <br></br>
      {info.categories.map(category => {
        return(
          <div className='numbers-spacing'>
            <table>
              <tr>
              <th><h3>{category.name}</h3></th>
              </tr>
              <tr>
              <td>{Math.round(category.score_out_of_10)}</td>
              </tr>
            </table>
          </div>
        )
      })}
    </div>
  );
};

export default Scores;