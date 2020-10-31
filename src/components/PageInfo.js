import React, { useState, useEffect} from 'react';
import Weather from './Weather'
import Numbers from './Numbers'
import Picture from './Picture'
import Summary from './Summary'

const PageInfo = ({ match }) => {
  const [searchInfo, setSearchInfo] = useState(null)
  const [fullName, setfullName] = useState(null)
  const [latitude, setLatitude] = useState(null)
  const [longitude, setLongitude] = useState(null)

  const dataUrl = (`https://api.teleport.org/api/cities/?search=${match.params.name.toLowerCase().replace(/ /g, '%20').replace(',', '')}`)

  const weatherUrl = (`https://api.teleport.org/api/cities/?search=${match.params.name.toLowerCase().replace(/ /g, '%20').replace(',', '')}&embed=city%3Asearch-results%2Fcity%3Aitem`)

  useEffect(() => {
    fetch(dataUrl)
      .then(res => res.json())
      .then(res => {
        setSearchInfo(res)
        console.log(res)
        // if (res._embedded["city:search-results"][0].matching_full_name) {
        //   setfullName(res._embedded["city:search-results"][0].matching_full_name)
        // }
      })
  }, [])

  // useEffect(() => {
  //   fetch(weatherUrl)
  // .then(res => res.json())
  // .then(res => {
  //   console.log(res._embedded)
  // })
  // }, [])

  if (!match) {
    return(null)
  }



  return (
    <div>
      <h2>{fullName ? fullName : match.params.name}</h2>
      <Picture name={match.params.name}/>
      <Summary name={match.params.name}/>
      {/* <Weather geoNameId={geoNameID}/> */}
      <Numbers name={match.params.name}/>
    </div>
  );
};

export default PageInfo;