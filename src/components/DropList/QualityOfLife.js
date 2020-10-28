import React, { useState } from 'react';

const QualityOfLife = ({ searchValue, setSearchValue }) => {
  const [info, setInfo] = useState([])
  const url = 'https://api.teleport.org/api/'

    
  fetch(`${url}`)
    .then(res => res.json())
    .then(res => {
      setInfo(res)
    })

  return (
    <div>
      {info.map(())}
    </div>
  );
};

export default QualityOfLife;