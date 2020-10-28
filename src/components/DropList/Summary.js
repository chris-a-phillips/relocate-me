import React, { useState, useEffect } from 'react';

const Summary = () => {
///
  const [info, setInfo] = useState([])


  const url = 'https://api.teleport.org/api/urban_areas/slug:san-francisco-bay-area/scores/'


  useEffect(() => {
    fetch(url) 
      .then (res => res.json())
      .then (res =>{
        setInfo(res)
      })
    ;
  }, [])

  const summary = info.summary

    if (info.length === 0) {
    return(
      <p>Loading...</p>
    )
  }

///
  // function createMarkup() {
  //   return {
  //     __html: summary
  //   }
  // }

  return (
    <div>
          {/* <div dangerouslySetInnerHTML={createMarkup()}>
      {summary}
    </div> */}
    {info.categories.map(category => {
        return(
          <div key={category.name}>
            <p>{category.name}</p>
            <p>{category.score_out_of_10}</p>
          </div>
        )
      })}
      {/* figure out replace method so I that I don't have to use dangerouslySetInnerHTML */}
      {summary}
    </div>
  );
};

export default Summary;