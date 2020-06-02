import React, { useState, useEffect } from "react";
import { NativeSelect, FormControl } from "@material-ui/core";
import { fetchCountry } from "../../api";
const CountryPicker = ({ handleCountryChange }) => {
  const [fetchCountries, setfetchCountry] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setfetchCountry(await fetchCountry());
    };

    fetchAPI();
  }, [setfetchCountry]);

  return (
    <FormControl>
      <NativeSelect
        defaultValue=""
        onChange={e => handleCountryChange(e.target.value)}
      >
        <option value="">Global</option>

        {fetchCountries.map((country, i) => (
          <option key={i} value={country.name}>
            {country.name}
          </option>
        ))}
      </NativeSelect>
    </FormControl>
  );
};

export default CountryPicker;
