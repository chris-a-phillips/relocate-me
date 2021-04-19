import React, { useState, useEffect } from 'react';
import './Scores.css'

const Scores = ({ name }) => {
  const [info, setInfo] = useState(null)

  const url = (`https://api.teleport.org/api/urban_areas/slug:${name.toLowerCase().replace(/ /g, '-').replace(',', '')}/scores/`)


  useEffect(() => {
		fetch(url)
			.then((res) => res.json())
			.then((res) => {
				setInfo(res);
			});
		// eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

    if (info === null) {
    return(null)
  }

  return (
    <div>
      <br></br>
      {info.categories.map(category => {
        return(
          <div className='numbers-spacing' key={category.name}>
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