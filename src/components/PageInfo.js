import React, { useState, useEffect} from 'react';
import Weather from './Weather'
import Numbers from './Numbers'
import Picture from './Picture'
import Summary from './Summary'
import Salaries from './Salaries'

const PageInfo = ({ match }) => {
  const [searchInfo, setSearchInfo] = useState(null)
  const [fullName, setFullName] = useState(null)
  const [coordinates, setCoordinates] = useState(null)

  const dataUrl = (`https://api.teleport.org/api/cities/?search=${match.params.name.toLowerCase().replace(/ /g, '%20').replace(',', '')}`)

  const weatherUrl = (`https://api.teleport.org/api/cities/?search=${match.params.name.toLowerCase().replace(/ /g, '%20').replace(',', '')}&embed=city%3Asearch-results%2Fcity%3Aitem`)

  useEffect(() => {
    fetch(dataUrl)
      .then(res => res.json())
      .then(dataRes => {
        setSearchInfo(dataRes)
        // console.log(dataRes._embedded.["city:search-results"])
        // setFullName(dataRes._embedded.["city:search-results"])
      })
      // fetch(weatherUrl)
      //   .then(res => res.json())
      //   .then(weatherRes => {
      //     setCoordinates(weatherRes._embedded.["city:search-results"][0]._embedded["city:item"].location)
      //     console.log(coordinates)
      //   })
  }, [])

  if (!match) {
    return(null)
  }

  // if (fullName === null) {
  //   setFullName(match.params.name)
  // } else {
  //   setFullName(fullName.["city:search-results"][0].matching_full_name)
  // }



  return (
    <div>
      <Picture name={match.params.name}/>
      <div className='page-info'>
        <div className='page-info-header'><h1>{match.params.name}</h1></div>
        {/* <h2>{fullName === []? fullName.["city:search-results"][0].matching_full_name : match.params.name}</h2> */}
        <div className='page-info-summary'><Summary name={match.params.name}/></div>
        <div className='page-info-main-content'><Numbers name={match.params.name}/></div>
        <div className='page-info-salaries'><Salaries name={match.params.name}/></div>
        {/* <div className='page-info-weather'><Weather name={match.params.name}/></div> */}
        
        {/* <h2>{fullName === null ? match.params.name : fullName}</h2> */}
        {/* <Weather latitude={coordinates.latitude} longitude={coordinates.longitude}/> */}
      </div>
    </div>
  );
};

export default PageInfo;