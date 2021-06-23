export const crossWind = (windSpeed, bearing, windDirection) => {
  return Math.floor(windSpeed * Math.sin(bearing - windDirection));
};
