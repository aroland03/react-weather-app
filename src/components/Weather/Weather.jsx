import { useSelector } from "react-redux";
import { selectSelectedCity } from "../../state/citiesSlice";
import { CurrentWeather } from "./CurrentWeather";
import { CurrentDetails } from "./CurrentDetails";
import { Forecast } from "./Forecast";

export const Weather = () => {
  const selectedCity = useSelector(selectSelectedCity);

  return (
    <>
      <CurrentWeather />
      <CurrentDetails />
      <Forecast />
    </>
  );
};
