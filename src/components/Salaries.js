import React, { useState, useEffect } from 'react';

const Salaries = ({ name }) => {
  const [info, setInfo] = useState(null)

  const url = (`https://api.teleport.org/api/urban_areas/slug:${name.toLowerCase().replace(/ /g, '-').replace(',', '')}/salaries/`)


  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(res => {
        setInfo(res.salaries)
      })
    }, [])
    
    if (info === null) {
    return(null)
  }

  return (
    <div className='salaries'>
      <br></br>
      <p>*values need to be converted to USD</p>
      {info.map(salary => {
        return(
      <table>
        <tr>
        <th>{salary.job.title}</th>
        <th>Salary</th>

        </tr>
        <tr>
        <td>25th Percentile</td>
        <td>{Math.round(salary.salary_percentiles.percentile_25)} per year</td>

        </tr>
        <tr>
        <td>50th Percentile</td>
        <td>{Math.round(salary.salary_percentiles.percentile_50)} per year</td>

        </tr>
        <tr>
        <td>75th Percentile</td>
        <td>{Math.round(salary.salary_percentiles.percentile_75)} per year</td>

        </tr>
      </table>
        )
      })}
    </div>
  );
};

export default Salaries;