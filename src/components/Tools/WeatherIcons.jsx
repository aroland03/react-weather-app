import {
  CloudDrizzleFill,
  CloudFogFill,
  CloudLightningRainFill,
  CloudMoonFill,
  CloudSnowFill,
  CloudSunFill,
  CloudyFill,
  MoonFill,
  SunFill,
  Wind,
} from "react-bootstrap-icons";

export const WeatherIcon = ({ icon, width, height, mr }) => {
  switch (icon) {
    case "snow":
      return <CloudSnowFill className={`${width} ${height} ${mr}`} />;
    case "snow-showers-day":
      return <CloudSnowFill className={`${width} ${height} ${mr}`} />;
    case "snow-showers-night":
      return <CloudSnowFill className={`${width} ${height} ${mr}`} />;
    case "thunder-rain":
      return <CloudLightningRainFill className={`${width} ${height} ${mr}`} />;
    case "thunder-showers-day":
      return <CloudLightningRainFill className={`${width} ${height} ${mr}`} />;
    case "thunder-showers-night":
      return <CloudLightningRainFill className={`${width} ${height} ${mr}`} />;
    case "rain":
      return <CloudDrizzleFill className={`${width} ${height} ${mr}`} />;
    case "showers-day":
      return <CloudDrizzleFill className={`${width} ${height} ${mr}`} />;
    case "showers-night":
      return <CloudDrizzleFill className={`${width} ${height} ${mr}`} />;
    case "fog":
      return <CloudFogFill className={`${width} ${height} ${mr}`} />;
    case "wind":
      return <Wind className={`${width} ${height} ${mr}`} />;
    case "cloudy":
      return <CloudyFill className={`${width} ${height} ${mr}`} />;
    case "partly-cloudy-day":
      return <CloudSunFill className={`${width} ${height} ${mr}`} />;
    case "partly-cloudy-night":
      return <CloudMoonFill className={`${width} ${height} ${mr}`} />;
    case "clear-day":
      return <SunFill className={`${width} ${height} ${mr}`} />;
    case "clear-night":
      return <MoonFill className={`${width} ${height} ${mr}`} />;
    default:
      return <SunFill className={`${width} ${height} ${mr}`} />;
  }
};
