import React, { useState, useEffect } from "react";
import { Cards, Chart, CountryPicker } from "./components";

import styles from "./App.module.css";
import { fetchData } from "./api";

function App() {
  const [apiData, setData] = useState({});
  const [selectedCountry, setSelectedCountry] = useState("");

  useEffect(() => {
    const asyncFetchDailyData = async () => {
      const fData = await fetchData();
      setData(fData);
    };

    asyncFetchDailyData();
  }, []);

  const handleCountryChange = async country => {
    const fData = await fetchData(country);
    setData(fData);
    setSelectedCountry(country);
  };

  return (
    <div className={styles.container}>
      <img
        className={styles.image}
        src="https://i.ibb.co/7QpKsCX/image.png"
        alt="covid"
      />
      <Cards data={apiData} />
      <CountryPicker handleCountryChange={handleCountryChange} />
      <Chart data={apiData} country={selectedCountry} />
    </div>
  );
}

export default App;
