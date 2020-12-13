import React, { useState, useEffect } from 'react';

const Summary = ({ name }) => {
  const [info, setInfo] = useState(null)

  const url = (`https://api.teleport.org/api/urban_areas/slug:${name.toLowerCase().replace(/ /g, '-').replace(',', '')}/scores/`)


  useEffect(() => {
		fetch(url)
			.then((res) => res.json())
			.then((res) => {
				setInfo(res.summary);
			});
		// eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

    if (info === null) {
    return(null)
  }

  return (
    <div>
      {info
        .replace(/<p>/g, '')
        .replace(/<\/p>/g, '')
        .replace(/<b>/g, '')
        .replace(/<\/b>/g, '')
        .replace(/<br>/g, '')
        .replace(/<\/b>/g, '')
        .replace(/<i>/g, '')
        .replace(/<\/i>/g, '')
      }
    </div>
  );
};

export default Summary;