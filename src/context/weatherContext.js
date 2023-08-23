import { createContext, useContext, useState } from "react";
import { weatherDetailsForCity } from "../api/apiConfig";
const weatherContext = createContext();

export const useWeatherContext = () => {
  return useContext(weatherContext);
};

const WeatherProvider = ({ children }) => {
  const [data, setData] = useState(null);
  const [searchCity, setSearchCity] = useState(null);
  const [mode, setMode] = useState("light");

  const fetchApiData = async () => {
    // <---- fetching the data of the user input city --->
    const response = await weatherDetailsForCity(searchCity);
    // <---- setting the searched city details into setData function ---->
    setData(response);
  };

  const toggleTheme = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#27374D";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "#E8DFCA";
    }
  };

  return (
    <weatherContext.Provider
      value={{
        data,
        searchCity,
        mode,
        setSearchCity,
        fetchApiData,
        toggleTheme,
      }}
    >
      {children}
    </weatherContext.Provider>
  );
};

export default WeatherProvider;
