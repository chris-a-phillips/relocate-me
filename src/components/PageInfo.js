import React, { useState, useEffect} from 'react';
import Scores from './PageSections/Scores'
import Picture from './PageSections/Picture'
import Summary from './PageSections/Summary'
import Map from './PageSections/Map'
import MainContent from './Data/MainContent'

const PageInfo = ({ match }) => {
  const [fullName, setFullName] = useState(null)

  const url = (`https://api.teleport.org/api/cities/?search=${match.params.name.toLowerCase().replace(/ /g, '%20').replace(',', '')}`)

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(res => {
        if (res.count !== 0) {
          setFullName(res._embedded.["city:search-results"].[0].matching_full_name)
        }
      })
  }, [])

  if (!match) {
    return(null)
  }

  return (
    <div>
      <Picture name={match.params.name}/>
      <div className='page-info'>
        <div className='page-info-header'><h2>{fullName !== null? fullName : match.params.name}</h2></div>
        <div className='page-info-summary'><Summary name={match.params.name}/></div>
        <Map name={match.params.name}/>
        <h1 className='page-info-header'>Statistics</h1>
        <div className='numbers-and-salaries'>
          <div className='numbers'><Scores name={match.params.name}/></div>
          <div><MainContent name={match.params.name}/></div>
        </div>
      </div>
    </div>
  );
};

export default PageInfo;