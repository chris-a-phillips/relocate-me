import React, { useState, useEffect } from 'react';

const Picture = ({ name }) => {
  const [info, setInfo] = useState(null)

  const url = (`https://api.teleport.org/api/urban_areas/slug:${name.toLowerCase().replace(/ /g, '-').replace(',', '')}/images/`)

    useEffect(() => {
		fetch(url)
			.then((res) => res.json())
			.then((res) => {
				setInfo(res.photos[0].image.web);
			});
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

    if (info === null) {
    return(null)
  }

  return (

    <div>
      <img
      src={info}
      alt={name}
      />
    </div>
  );
};

export default Picture;