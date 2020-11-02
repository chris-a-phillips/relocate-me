// I had to hard code this unfortunately
import React, { useState, useEffect } from 'react';

const MainContent = ({ name }) => {
  const [info, setInfo] = useState(null)
  const [datasetZero, setDatasetZero] = useState(null)
  // const [businessFreedom, setBusinessFreedom] = useState(null)
  // const [citySize, setCitySize] = useState(null)
  // const [climate, setClimate] = useState(null)
  // const [costOfLiving, setCostOfLiving] = useState(null)
  // const [leisureAndCulture, setLeisureAndCulture] = useState(null)
  // const [economy, setEconomy] = useState(null)
  // const [education, setEducation] = useState(null)
  // const [healthcare, sethealthCare] = useState(null)
  // const [housing, setHousing] = useState(null)
  // const [internalApplicationUse, setInternalApplicationUse] = useState(null)
  // const [jobMarket, setJobMarket] = useState(null)
  // const [language, setLanguage] = useState(null)
  // const [tolerance, setTolerance] = useState(null)
  // const [internetAccess, setInternetAccess] = useState(null)
  // const [outdoors, setOutdoors] = useState(null)
  // const [environmentalQuality, setEnvironemntalQuality] = useState(null)
  // const [safety, setSafety] = useState(null)
  // const [startups, setStartups] = useState(null)
  // const [taxation, setTaxation] = useState(null)
  // const [commute, setCommute] = useState(null)
  // const [travelConnectivity, setTravelConnectivity] = useState(null)
  // const [ventureCapital, setVentureCapital] = useState(null)
  

  const url = (`https://api.teleport.org/api/urban_areas/slug:${name.toLowerCase().replace(/ /g, '-').replace(',', '')}/details/`)


  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(res => {
        // console.log(res.categories)
        if (res.categories[0] !== undefined) {
          setDatasetZero(res.categories[0].data)
        }
        // setCitySize(res.categories[1].data)
        // setClimate(res.categories[2].data)
        // setCostOfLiving(res.categories[3].data)
        // setLeisureAndCulture(res.categories[4].data)
        // setEconomy(res.categories[5].data)
        // setEducation(res.categories[6].data)
        // sethealthCare(res.categories[7].data)
        // setHousing(res.categories[8].data)
        // setInternalApplicationUse(res.categories[9].data)
        // setJobMarket(res.categories[10].data)
        // setLanguage(res.categories[11].data)
        // setTolerance(res.categories[12].data)
        // setInternetAccess(res.categories[13].data)
        // setOutdoors(res.categories[14].data)
        // setEnvironemntalQuality(res.categories[15].data)
        // setSafety(res.categories[16].data)
        // setStartups(res.categories[17].data)
        // setTaxation(res.categories[18].data)
        // setCommute(res.categories[19].data)
        // setTravelConnectivity(res.categories[20].data)
      })
    }, [])

  if (info === null) {
    return(null)
  } else if (datasetZero === null) {
    return(null)
  }

  console.log(datasetZero)

  return (
    <div>
      <div>
        {datasetZero.label}
      </div>
    {/* <div>
      <h3>{businessFreedom.label}</h3>
      {businessFreedom.map(category => {
        return(
          <div>
            <h4>{category.label}</h4>
            <div>
              {category.type === 'float' ? category.float_value : null}
            </div>
          </div>
        )
      })}
    </div> */}
    </div>
  );
};

export default MainContent;

//fetch all data
//make use state for all variables
//map all in div with mousein/mouse out
//in map make sure each label is read correctly