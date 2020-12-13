// I had to hard code this unfortunately
import React, { useState, useEffect } from 'react';
import Dataset from './Dataset'

const MainContent = ({ name }) => {
  const [info, setInfo] = useState(null)

  const url = (`https://api.teleport.org/api/urban_areas/slug:${name.toLowerCase().replace(/ /g, '-').replace(',', '')}/details/`)

  useEffect(() => {
		fetch(url)
			.then((res) => res.json())
			.then((res) => {
				setInfo(res.categories);
			});
		// eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (info === null) {
    return(null)
  }

  return (
    <div className='full-content-page'>
      {info[0] !== undefined ? <Dataset info={info[0]}/> : null}
      {info[1] !== undefined ? <Dataset info={info[1]}/> : null}
      {info[2] !== undefined ? <Dataset info={info[2]}/> : null}
      {info[3] !== undefined ? <Dataset info={info[3]}/> : null}
      {info[4] !== undefined ? <Dataset info={info[4]}/> : null}
      {info[5] !== undefined ? <Dataset info={info[5]}/> : null}
      {info[6] !== undefined ? <Dataset info={info[6]}/> : null}
      {info[7] !== undefined ? <Dataset info={info[7]}/> : null}
      {info[8] !== undefined ? <Dataset info={info[8]}/> : null}
      {info[9] !== undefined ? <Dataset info={info[9]}/> : null}
      {info[10] !== undefined ? <Dataset info={info[10]}/> : null}
      {info[11] !== undefined ? <Dataset info={info[11]}/> : null}
      {info[12] !== undefined ? <Dataset info={info[12]}/> : null}
      {info[13] !== undefined ? <Dataset info={info[13]}/> : null}
      {info[14] !== undefined ? <Dataset info={info[14]}/> : null}
      {info[15] !== undefined ? <Dataset info={info[15]}/> : null}
      {info[16] !== undefined ? <Dataset info={info[16]}/> : null}
      {info[17] !== undefined ? <Dataset info={info[17]}/> : null}
      {info[18] !== undefined ? <Dataset info={info[18]}/> : null}
      {info[19] !== undefined ? <Dataset info={info[19]}/> : null}
      {info[20] !== undefined ? <Dataset info={info[20]}/> : null}
      {info[21] !== undefined ? <Dataset info={info[21]}/> : null}
    </div>
  );
};

export default MainContent;

//fetch all data
//make use state for all variables
//map all in div with mousein/mouse out
//in map make sure each label is read correctly

//found animation on stack overflow