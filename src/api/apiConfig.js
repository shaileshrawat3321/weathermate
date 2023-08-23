const base =
  "https://api.weatherapi.com/v1/current.json?key=de8b9eb07ad9415e920234211232807";

export const weatherDetailsForCity = async (cityName) => {
  const response = await fetch(`${base}&q=${cityName}&aqi=yes`);
  return await response.json();
};
