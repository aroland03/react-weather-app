import { useDispatch, useSelector } from "react-redux";
import { selectSelectedCity } from "../../state/citiesSlice";
import { useGetWeatherMutation } from "../../state/weatherApi";
import { useEffect } from "react";
import { selectWeather, setWeather } from "../../state/weatherSlice";
import { WeatherIcon } from "../Tools/WeatherIcons";

export const CurrentWeather = () => {
  const selectedCity = useSelector(selectSelectedCity);
  const selectedWeather = useSelector(selectWeather);
  const dispatch = useDispatch();
  const [currentWeatherApi, data] = useGetWeatherMutation();

  const getWeather = async () => {
    await currentWeatherApi({
      lat: selectedCity?.properties.lat,
      lon: selectedCity?.properties.lon,
    })
      .unwrap()
      .then((res) => {
        //console.log(res);
        dispatch(setWeather(res));
      })
      .catch((err) => {
        console.error("Error:", err);
      });
  };

  useEffect(() => {
    getWeather();
  }, [selectedCity]);

  return (
    <>
      {selectedWeather && selectedCity && (
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="flex flex-col justify-center items-center">
            <div className="md:text-6xl text-5xl font-bold text-white mb-4 md:mb-0">
              {selectedCity?.properties?.city}
            </div>
          </div>
          <div className="flex flex-col justify-center items-center">
            <div className="text-6xl font-bold text-white flex">
              <WeatherIcon
                icon={selectedWeather?.currentConditions?.icon}
                width="w-16"
                height="h-16"
                mr="mr-5"
              />
              {Math.round(selectedWeather?.currentConditions?.temp)}°C
            </div>
          </div>
        </div>
      )}
    </>
  );
};
