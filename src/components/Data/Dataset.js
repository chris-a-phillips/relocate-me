import React, { useState, useEffect } from 'react';
import SpecificCategory from './SpecificCategory';

const Dataset = ({ info }) => {
  if (info === null) {
    return(null)
  }

  return (
    <div>
      {info !== null 
      ? 
      <div>
        <h2>{info.label}</h2>
          <div>
            <input type="checkbox" id="expend" />
              <div class="medium-12 small-12 columns smalldesc">
                <SpecificCategory info={info}/>
              </div>
            <label for="expend">Read More</label>
          </div>
      </div>
      : null
      }      
    </div>
  );
};

export default Dataset
;