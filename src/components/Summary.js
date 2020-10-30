import React, { useState, useEffect} from 'react';

const Summary = () => {
  const [info, setInfo] = useState([])

  const url = 'https://api.teleport.org/api/urban_areas/slug:san-francisco-bay-area/scores/'

  // if (1 === 1) {
    // fetch(url) 
    //   .then (res => res.json())
    //   .then (res =>{
    //     setInfo(res)
    //   })
    // ;
  // }

  // useEffect(() => {
    
  // }, [])

  // const summary = (info)
  // ? info.categories.map(category => {
  //   return(
  //     <div key={category.name}>
  //       <h3>{category.name}</h3>
  //       <p>{category.score_out_of_10}</p>
  //     </div>
  //   )
  // })
  // : null

  // console.log(info)


  return (
    <div>
      Summary
      {/* {info.categories.map(category => {
          return(
            <div key={category.name}>
              <p>{category.name}</p>
              <p>{category.score_out_of_10}</p>
            </div>
          )
        })} */}
    </div>
  );
};

export default Summary;