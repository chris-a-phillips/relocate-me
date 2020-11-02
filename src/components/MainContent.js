// I had to hard code this unfortunately
import React, { useState, useEffect } from 'react';

const MainContent = ({ name }) => {
  const [info, setInfo] = useState(null)
  const [datasetZero, setDatasetZero] = useState(null)
  

  const url = (`https://api.teleport.org/api/urban_areas/slug:${name.toLowerCase().replace(/ /g, '-').replace(',', '')}/details/`)


  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(res => {
        setInfo(res.categories)
        console.log(res.categories)
        if (res.categories[0] !== undefined) {
          setDatasetZero(res.categories[0].data)
        }
      })
    }, [])

  const toggleInfo = () => {

  }


  if (info === null) {
    return(null)
  } else if (datasetZero === null) {
    return(null)
  }

  return (
    <div>
      {datasetZero !== null 
      ? datasetZero.map(category => {
        return(
          <div>
            <h4 onClick={toggleInfo}>{category.label}</h4>
              <div>
                {category.type === 'float' ? category.float_value : null}
                {category.type === 'int' ? category.int_value : null}
                {category.type === 'percent' ? category.percent_value * 100: null}
                {category.type === 'string' ? category.string_value : null}
                {category.type === 'currency_dollar' ? `$${category.currency_dollar_value}` : null}
                {category.type === 'url' ? <a href={category.url_value} target='blank'>{category.url_value}</a> : null}
              </div>
          </div>
        )
      })
      : null
      }
      {/* <div>
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

//found animation on stack overflow