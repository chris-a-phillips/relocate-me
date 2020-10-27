import React, { useState, useEffect } from 'react';

const Summary = () => {
  const [summary, setSummary] = useState()

  

  function fetchSummary() {
    const url = 'https://api.teleport.org/api/cities/geonameid:5391959/'
    
    fetch(url)
      .then(res => res.json())
      .then(res => {
      setSummary(res.name)
      }
  )}



  return (
    <div>
      <button onClick={fetchSummary}>Give Me Something New</button>

      {summary}

    </div>
  );
};

export default Summary;