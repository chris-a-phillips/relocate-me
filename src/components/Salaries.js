import React, { useState, useEffect } from 'react';

const Salaries = ({ name }) => {
  const [info, setInfo] = useState(null)

  const url = (`https://api.teleport.org/api/urban_areas/slug:${name.toLowerCase().replace(/ /g, '-').replace(',', '')}/salaries/`)


  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(res => {
        setInfo(res)
        console.log(info)
      })
  }, [])

    if (info === null) {
    return(null)
  }

  return (
    <div>
      {/* {info.map(salary => {
        return(

        )
      })} */}
      <table>
        <tr>
        <th>Job Title</th>
        <th>Salary</th>

        </tr>
        <tr>
        <td>Peter</td>
        <td>Griffin</td>

        </tr>
        <tr>
        <td>Lois</td>
        <td>Griffin</td>

        </tr>
        <tr>
        <td>Joe</td>
        <td>Swanson</td>

        </tr>
        <tr>
        <td>Cleveland</td>
        <td>Brown</td>

        </tr>
      </table>
    </div>
  );
};

export default Salaries;