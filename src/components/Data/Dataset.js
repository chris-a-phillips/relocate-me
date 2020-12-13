import { React, useState } from 'react';
import SpecificCategory from './SpecificCategory';

const Dataset = ({ info }) => {
  const [show, setShow] = useState(false)

  if (info === null) {
    return null
  }

  const showMore = () => {
    show ? setShow(false) : setShow(true)
  }

  return(
    <div>
      {info !== null ? (
        <div>
          <h2>{info.label}</h2>
          {show && (
            <>
              <div className='show'>
                <SpecificCategory info={info}/>
              </div>
              <button onClick={showMore}>Hide</button>
            </>
          )}
          {!show && (
            <>
              <div className='hide'>
                <SpecificCategory info={info}/>
              </div>
              <button onClick={showMore}>Read More</button>
            </>
          )}
        </div>
      ) : null}
    </div>
  )
};

export default Dataset
;
    // if (info === null) {
    //   return(null)
    // }
    
    // return (
    //   <div>
    //     {info !== null 
    //     ? 
    //     <div>
    //       <h2>{info.label}</h2>
    //         <div>
    //           <input type="checkbox" id="expend" />
    //             <div class="medium-12 small-12 columns smalldesc">
    //               <SpecificCategory info={info}/>
    //             </div>
    //           <label for="expend">Read More</label>
    //         </div>
    //     </div>
    //     : null
    //     }      
    //   </div>
    // );