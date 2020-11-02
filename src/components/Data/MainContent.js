// I had to hard code this unfortunately
import React, { useState, useEffect } from 'react';
import Dataset from './Dataset'

const MainContent = ({ name }) => {
  const [info, setInfo] = useState(null)

  const url = (`https://api.teleport.org/api/urban_areas/slug:${name.toLowerCase().replace(/ /g, '-').replace(',', '')}/details/`)

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(res => {
        setInfo(res.categories)
        console.log(res.categories)
      })
    }, [])

  if (info === null) {
    return(null)
  }

  return (
    <div className='full-content-page'>
      <Dataset info={info[0]}/>
      <Dataset info={info[1]}/>
      <Dataset info={info[2]}/>
      <Dataset info={info[3]}/>
      <Dataset info={info[4]}/>
      <Dataset info={info[5]}/>
      <Dataset info={info[6]}/>
      <Dataset info={info[7]}/>
      <Dataset info={info[8]}/>
      <Dataset info={info[9]}/>
      <Dataset info={info[10]}/>
      <Dataset info={info[11]}/>
      <Dataset info={info[12]}/>
      <Dataset info={info[13]}/>
      <Dataset info={info[14]}/>
      <Dataset info={info[15]}/>
      <Dataset info={info[16]}/>
      <Dataset info={info[17]}/>
      <Dataset info={info[18]}/>
      <Dataset info={info[19]}/>
      <Dataset info={info[20]}/>
      <Dataset info={info[21]}/>    
    </div>
  );
};

export default MainContent;

//fetch all data
//make use state for all variables
//map all in div with mousein/mouse out
//in map make sure each label is read correctly

//found animation on stack overflow