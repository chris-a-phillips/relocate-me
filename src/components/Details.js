import React, { useState, useEffect } from 'react';

const Details = ({ 
  name, chosenCity, citySize, costOfLiving, culture, economy, healthcare, housing, internal, language, minorities, outdoors, pollution, safety, taxation }) => {
  // console.log(chosenCity)
  // console.log(citySize)
  // console.log(costOfLiving)
  // console.log(culture)
  // console.log(economy)
  // console.log(healthcare)
  console.log(housing)
  // console.log(internal)
  // console.log(language)
  // console.log(minorities)
  // console.log(outdoors)
  // console.log(pollution)
  // console.log(safety)
  // console.log(taxation)

  

  return (
    <div>
      <h1>{citySize ? name : null}</h1>
      {/* <div className='citySize'>
        <h2>{citySize ? citySize.label : null}</h2>
        <h5>{citySize ? citySize.data[0].label : null}</h5>
        <p>{citySize ? citySize.data[0].float_value : null}</p>
      </div> */}
    
      {/* <div className='costOfLiving'>
        <h2>{costOfLiving ? costOfLiving.label : null}</h2>
        <h5>{costOfLiving ? costOfLiving.data[5].label : null}</h5>
        <p>{costOfLiving ? costOfLiving.data[5].currency_dollar_value : null}</p>
        <h5>{costOfLiving ? costOfLiving.data[7].label : null}</h5>
        <p>{costOfLiving ? costOfLiving.data[7].currency_dollar_value : null}</p>
        <h5>{costOfLiving ? costOfLiving.data[10].label : null}</h5>
        <p>{costOfLiving ? costOfLiving.data[10].currency_dollar_value : null}</p>
      </div> */}

      {/* <div className='culture'>
        <h2>{culture ? culture.label : null}</h2>
        <h5>{culture ? culture.data[3].label : null}</h5>
        <p>{culture ? culture.data[3].int_value : null}</p>
        <h5>{culture ? culture.data[9].label : null}</h5>
        <p>{culture ? culture.data[9].int_value : null}</p>
        <h5>{culture ? culture.data[11].label : null}</h5>
        <p>{culture ? culture.data[11].int_value : null}</p>
        <h5>{culture ? culture.data[13].label : null}</h5>
        <p>{culture ? culture.data[13].int_value : null}</p>
        <h5>{culture ? culture.data[17].label : null}</h5>
        <p>{culture ? culture.data[17].int_value : null}</p>
      </div> */}

      {/* <div className=''>
        <h2>{economy ? economy.label : null}</h2>
        <h5>{economy ? economy.data[0].label : null}</h5>
        <p>{economy ? economy.data[0].string_value : null}</p>
        <h5>{economy ? economy.data[1].label : null}</h5>
        <p>{economy ? economy.data[1].float_value : null}</p>
      </div> */}
      
      {/* <div className='healthcare'>
        <h2>{healthcare ? healthcare.label : null}</h2>
        <h5>{healthcare ? healthcare.data[0].label : null}</h5>
        <p>{healthcare ? healthcare.data[0].float_value : null}</p>
        <h5>{healthcare ? healthcare.data[1].label : null}</h5>
        <p>{healthcare ? healthcare.data[1].float_value : null}</p>
        <h5>{healthcare ? healthcare.data[3].label : null}</h5>
        <p>{healthcare ? healthcare.data[3].float_value : null}</p>
      </div> */}

      <div className=''>
        <h2>{costOfLiving ? costOfLiving.label : null}</h2>
        <h5>{costOfLiving ? costOfLiving.data[0].label : null}</h5>
        <p>{costOfLiving ? costOfLiving.data[0].float_value : null}</p>
      </div>

      {/* <div className=''>
        <h2>{costOfLiving ? costOfLiving.label : null}</h2>
        <h5>{costOfLiving ? costOfLiving.data[0].label : null}</h5>
        <p>{costOfLiving ? costOfLiving.data[0].float_value : null}</p>
      </div> */}

      {/* <div className=''>
        <h2>{costOfLiving ? costOfLiving.label : null}</h2>
        <h5>{costOfLiving ? costOfLiving.data[0].label : null}</h5>
        <p>{costOfLiving ? costOfLiving.data[0].float_value : null}</p>
      </div> */}

      {/* <div className=''>
        <h2>{costOfLiving ? costOfLiving.label : null}</h2>
        <h5>{costOfLiving ? costOfLiving.data[0].label : null}</h5>
        <p>{costOfLiving ? costOfLiving.data[0].float_value : null}</p>
      </div> */}

      {/* <div className=''>
        <h2>{costOfLiving ? costOfLiving.label : null}</h2>
        <h5>{costOfLiving ? costOfLiving.data[0].label : null}</h5>
        <p>{costOfLiving ? costOfLiving.data[0].float_value : null}</p>
      </div> */}

      {/* <div className=''>
        <h2>{costOfLiving ? costOfLiving.label : null}</h2>
        <h5>{costOfLiving ? costOfLiving.data[0].label : null}</h5>
        <p>{costOfLiving ? costOfLiving.data[0].float_value : null}</p>
      </div> */}

      {/* <div className=''>
        <h2>{costOfLiving ? costOfLiving.label : null}</h2>
        <h5>{costOfLiving ? costOfLiving.data[0].label : null}</h5>
        <p>{costOfLiving ? costOfLiving.data[0].float_value : null}</p>
      </div> */}

    </div>
  );
};

export default Details;