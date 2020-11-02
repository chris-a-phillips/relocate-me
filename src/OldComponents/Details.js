// display all of the deep stats
import React from 'react';

const Details = ({ 
  name, citySize, costOfLiving, culture, economy, healthcare, housing, internal, language, minorities, pollution, safety, taxation }) => {

  return (
    <div className='outerDiv'>

      <div className='pageData'>
        <h1>{citySize ? name : null}</h1>
        <div className='citySize'>
          <h2>{citySize ? citySize.label : null}</h2>
          <h5>{citySize ? citySize.data[0].label : null}</h5>
          <p>{citySize ? citySize.data[0].float_value : null}</p>
        </div>
      
        <div className='costOfLiving'>
          <h2>{costOfLiving ? costOfLiving.label : null}</h2>
          <h5>{costOfLiving ? costOfLiving.data[5].label : null}</h5>
          <p>{costOfLiving ? costOfLiving.data[5].currency_dollar_value : null}</p>
          <h5>{costOfLiving ? costOfLiving.data[7].label : null}</h5>
          <p>{costOfLiving ? costOfLiving.data[7].currency_dollar_value : null}</p>
          <h5>{costOfLiving ? costOfLiving.data[10].label : null}</h5>
          <p>{costOfLiving ? costOfLiving.data[10].currency_dollar_value : null}</p>
        </div>

        <div className='culture'>
          <h2>{culture ? culture.label : null}</h2>
          <h5>{culture ? culture.data[3].label : null}</h5>
          <p>{culture ? culture.data[3].int_value : null}</p>
          <h5>{culture ? culture.data[9].label : null}</h5>
          <p>{culture ? culture.data[9].int_value : null}</p>
          <h5>{culture ? culture.data[11].label : null}</h5>
          <p>{culture ? culture.data[11].int_value : null}</p>
          <h5>{culture ? culture.data[13].label : null}</h5>
          <p>{culture ? culture.data[13].int_value : null}</p>
          {/* optional chaining */}
          <h5>{culture?.data[17]?.label || 'No Data'}</h5>
          <p>{culture ? culture.data[17].int_value : null}</p>
        </div>

        <div className='economy'>
          <h2>{economy ? economy.label : null}</h2>
          <h5>{economy ? economy.data[0].label : null}</h5>
          <p>{economy ? economy.data[0].string_value : null}</p>
          <h5>{economy ? economy.data[1].label : null}</h5>
          <p>{economy ? economy.data[1].float_value : null}</p>
        </div>
        
        <div className='healthcare'>
          <h2>{healthcare ? healthcare.label : null}</h2>
          <h5>{healthcare ? healthcare.data[0].label : null}</h5>
          <p>{healthcare ? healthcare.data[0].float_value : null}</p>
          <h5>{healthcare ? healthcare.data[1].label : null}</h5>
          <p>{healthcare ? healthcare.data[1].float_value : null}</p>
          <h5>{healthcare ? healthcare.data[3].label : null}</h5>
          <p>{healthcare ? healthcare.data[3].float_value : null}</p>
        </div>

        <div className='housing'>
          <h2>{housing ? housing.label : null}</h2>
          <h5>{housing ? housing.data[0].label : null}</h5>
          <p>{housing ? housing.data[0].currency_dollar_value : null}</p>
          <h5>{housing ? housing.data[1].label : null}</h5>
          <p>{housing ? housing.data[1].currency_dollar_value : null}</p>
          <h5>{housing ? housing.data[2].label : null}</h5>
          <p>{housing ? housing.data[2].currency_dollar_value : null}</p>
          <h5>{housing ? housing.data[3].label : null}</h5>
          <p>{housing ? housing.data[3].float_value : null}</p>
        </div>

        <div className='internal'>
          <h2>{internal ? internal.label : null}</h2>
          <h5>{internal ? internal.data[0].label : null}</h5>
          <p>{internal ? internal.data[0].percent_value : null}</p>
          <h5>{internal ? internal.data[1].label : null}</h5>
          <p>{internal ? internal.data[1].float_value : null}</p>
          <h5>{internal ? internal.data[2].label : null}</h5>
          <p>{internal ? internal.data[2].float_value : null}</p>
        </div>

        <div className='language'>
          <h2>{language ? language.label : null}</h2>
          <h5>{language ? language.data[0].label : null}</h5>
          <p>{language ? language.data[0].int_value : null}</p>
          <h5>{language ? language.data[2].label : null}</h5>
          <p>{language ? language.data[2].string_value : null}</p>
        </div>

        <div className='minorities'>
          <h2>{minorities ? minorities.label : null}</h2>
          <h5>{minorities ? minorities.data[7].label : null}</h5>
          <p>{minorities ? minorities.data[7].string_value : null}</p>
          <h5>{minorities ? minorities.data[9].label : null}</h5>
          <p>{minorities ? minorities.data[9].string_value : null}</p>
          <h5>{minorities ? minorities.data[12].label : null}</h5>
          <p>{minorities ? minorities.data[12].float_value : null}</p>
        </div>

        <div className='pollution'>
          <h2>{pollution ? pollution.label : null}</h2>
          <h5>{pollution ? pollution.data[0].label : null}</h5>
          <p>{pollution ? pollution.data[0].float_value : null}</p>
          <h5>{pollution ? pollution.data[1].label : null}</h5>
          <p>{pollution ? pollution.data[1].float_value : null}</p>
          <h5>{pollution ? pollution.data[2].label : null}</h5>
          <p>{pollution ? pollution.data[2].float_value : null}</p>
          <h5>{pollution ? pollution.data[3].label : null}</h5>
          <p>{pollution ? pollution.data[3].float_value : null}</p>
        </div>

        <div className='safety'>
          <h2>{safety ? safety.label : null}</h2>
          <h5>{safety ? safety.data[0].label : null}</h5>
          <p>{safety ? safety.data[0].float_value : null}</p>
        </div>

        <div className='taxation'>
          <h2>{taxation ? taxation.label : null}</h2>
          <h5>{taxation ? taxation.data[2].label : null}</h5>
          <p>{taxation ? taxation.data[2].float_value : null}</p>
          <h5>{taxation ? taxation.data[3].label : null}</h5>
          <p>{taxation ? taxation.data[3].percent_value : null}</p>
        </div>
      </div>

    </div>
  );
};

export default Details;