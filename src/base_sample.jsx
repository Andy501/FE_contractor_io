// full poc
import ReactDOM from 'react-dom/client';
import React, { useEffect, useState } from 'react';


const SampleLayout = () => {

const [data, setData] = useState(null);

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/contractor/list/')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
    {/* header */}

    {/* body */}
      <h1>Sample Layout</h1>
      <p>Sample paragraph</p>
      {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : <p>Loading...</p>}



    {/* footer */}
    &trade; 2025
    </div>


  );
}


export default SampleLayout;