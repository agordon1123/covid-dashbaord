import React, { useEffect, useState } from 'react';
import MapChart from './components/MapChart';
import axios from 'axios';
import './App.css';

const App = () => {
  const [data, setData] = useState({});
  const url = 'https://api.covid19api.com/summary';

  useEffect(() => {
    axios.get(url)
      .then((res) => {
        let dict = {};
        let sortedData = res.data.Countries.sort((a, b) => b.TotalConfirmed - a.TotalConfirmed);
        let largest = sortedData[0].TotalConfirmed;
        dict['largest'] = largest;
        sortedData.map(el=> dict[el.CountryCode] = el.TotalConfirmed);
        setData(dict);
      })
      .catch((err) => console.log(err));
  }, []);
  
  return (
    <div className="App">
      <h1>Covid-19 Dashboard</h1>
      {Object.keys(data).length ? (
        <MapChart data={data} />
      ) : null}
    </div>
  );
}

export default App;
