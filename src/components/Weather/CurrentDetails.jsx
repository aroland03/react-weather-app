import { UV } from "../Tools/icons";
import { selectWeather } from "../../state/weatherSlice";
import { useSelector } from "react-redux";
import { WindDir } from "../Tools/WindDir";
import {
  Droplet,
  Sunrise,
  Sunset,
  Umbrella,
  Wind,
} from "react-bootstrap-icons";

export const CurrentDetails = () => {
  const selectedWeather = useSelector(selectWeather);

  const sunrise = `${
    selectedWeather?.currentConditions?.sunrise.split(":")[0]
  }:${selectedWeather?.currentConditions?.sunrise.split(":")[1]}`;
  const sunset = `${selectedWeather?.currentConditions?.sunset.split(":")[0]}:${
    selectedWeather?.currentConditions?.sunset.split(":")[1]
  }`;

  return (
    <div className="grid grid-cols-2 md:grid-cols-6 justify-items-center mt-8 text-white">
      <div className="mt-2 md:mt-0">
        <Droplet className="h-6 w-6 mr-1 inline" />{" "}
        {selectedWeather?.currentConditions?.humidity}%
      </div>
      <div className="mt-2 md:mt-0">
        {" "}
        <Wind className="h-6 w-6 mr-1 inline" />{" "}
        {selectedWeather?.currentConditions?.windspeed} km/h{" "}
        <WindDir dirDegree={selectedWeather?.currentConditions?.winddir} />
      </div>
      <div className="mt-2 md:mt-0">
        <UV /> - {selectedWeather?.currentConditions?.uvindex}
      </div>
      <div className="mt-2 md:mt-0">
        <Umbrella className="h-6 w-6 mr-1 inline" />{" "}
        {selectedWeather?.currentConditions?.precipprob}%
      </div>
      <div className="mt-2 md:mt-0">
        <Sunrise className="h-6 w-6 mr-1 inline" /> {sunrise}
      </div>
      <div className="mt-2 md:mt-0">
        <Sunset className="h-6 w-6 mr-1 inline" /> {sunset}
      </div>
    </div>
  );
};
