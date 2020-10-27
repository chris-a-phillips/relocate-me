import React, { useState, useEffect } from 'react';

const Summary = () => {
  const [summary, setSummary] = useState()

  const url = 'https://api.teleport.org/api/cities/geonameid:5391959/'

  function fetchSummary() {
    fetch(url)
      .then(res => res.json())
      .then(res => {
      setSummary(res)
      }
  )}

  useEffect(() => {
    fetchSummary()
  })

  console.log(summary)

  // const info = summary ? {setSummary} : null

  return (
    <div>
      <button onClick={fetchSummary}>Give Me Something New</button>

      {/* {summary.map((info) => (
        <div>
          location={info.location.geohash}
        </div>
      ))} */}

    </div>
  );
};

export default Summary;