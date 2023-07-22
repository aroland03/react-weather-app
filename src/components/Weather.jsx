import { useSelector } from "react-redux";
import { selectSelectedCity } from "../state/citiesSlice";
import { CurrentWeather } from "./CurrentWeather";
import { CurrentDetails } from "./CurrentDetails";
import { HourlyDetails } from "./HourlyDetails";
import { DailyDetails } from "./DailyDetails";

export const Weather = () => {
  const selectedCity = useSelector(selectSelectedCity);

  return (
    <>
      <CurrentWeather />
      <CurrentDetails />
      <div className="grid grid-cols-1 md:grid-cols-2 mt-8 justify-items-center">
        <HourlyDetails />
        <DailyDetails />
      </div>
    </>
  );
};
