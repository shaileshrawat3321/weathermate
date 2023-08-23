import { createContext, useContext, useState } from "react";
import { weatherDetailsForCity } from "../api/apiConfig";
const weatherContext = createContext();

export const useWeatherContext = () => {
  return useContext(weatherContext);
};

const WeatherProvider = ({ children }) => {
  const [data, setData] = useState(null);
  const [searchCity, setSearchCity] = useState(null);

  const fetchApiData = async () => {
    // fetching the data of the user input city
    const response = await weatherDetailsForCity(searchCity);
    // setting the searched city details into setData function
    setData(response);
  };

  return (
    <weatherContext.Provider
      value={{
        data,
        searchCity,
        setSearchCity,
        fetchApiData,
      }}
    >
      {children}
    </weatherContext.Provider>
  );
};

export default WeatherProvider;
