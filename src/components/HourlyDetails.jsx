import { useSelector } from "react-redux";
import { selectWeather } from "../state/weatherSlice";
import { useEffect } from "react";
import { WeatherIcon } from "./WeatherIcons";
import './Scroll.css'

export const HourlyDetails = () => {
  const selectedWeather = useSelector(selectWeather);

  // Meghatározzuk az elkövetkező 24 óra adatait. Az időjárási adatok napokra, azonb elül órákra bontva vannak.
  // Emiatt meg kell határozni, hogy az aktuális napból hány óra van hára, és hány óra kell még a következő napból.
  let next24Hours = null;

  if (selectedWeather && selectedWeather?.days?.length > 0) {
    next24Hours = {
      currentDay: selectedWeather?.days[0]?.hours.slice(
        new Date().getHours(),
        24
      ),
      nextDay: selectedWeather?.days[1]?.hours.slice(0, new Date().getHours()),
    };
  }

  console.log(next24Hours);

  return (
    <div className="w-5/6 scrollbar scrollbar-indigo thin">
      <div className="text-xl md:text-m font-bold text-white text-center">
        <span>Következő 24 óra</span>
      </div>

      {
        <div className="flex flex-row overflow-x-auto mt-3 pb-3">
          {/* Az aktuális nap órái */}
          {next24Hours?.currentDay?.map((hour, index) => {
            return (
              <div
                key={index}
                className="flex flex-col justify-center items-center"
                style={{ minWidth: "90px", maxWidth: "90px" }}
                 // Itt állítsd be az óránkénti adatok maximális szélességét, pl. 150px
              >
                <div className="text-white text-lg md:text-xl font-bold">
                  Ma
                </div>
                <div className="text-white text-m md:text-lg">
                    {hour.datetime.split(":")[0]}:00
                </div>
                <div className="mt-6 mb-6 text-white">
                    <WeatherIcon icon={hour.icon} width="w-8" height="h-8" mr="mr-0" />
                </div>
                <div className="text-white text-m md:text-lg">
                    {hour.precipprob > 0 ? <span>{Math.round(hour.precipprob)}%</span> : <span></span>}
                </div>
                <div className="text-white text-lg md:text-xl font-bold">
                  {Math.round(hour.temp)}°C
                </div>
              </div>
            );
          })}

          {/* A következő nap órái */}
          {next24Hours?.nextDay?.map((hour, index) => {
            return (
                <div
                key={index}
                className="flex flex-col justify-center items-center"
                style={{ minWidth: "90px", maxWidth: "90px" }}
                // Itt állítsd be az óránkénti adatok maximális szélességét, pl. 150px
              >
                <div className="text-white text-lg md:text-xl font-bold">
                  Holnap
                </div>
                <div className="text-white text-m md:text-lg">
                    {hour.datetime.split(":")[0]}:00
                </div>
                <div className="mt-6 mb-6 text-white">
                    <WeatherIcon icon={hour.icon} width="w-8" height="h-8" mr="mr-0" />
                </div>
                <div className="text-white text-m md:text-lg">
                    {hour.precipprob > 0 ? <span>{Math.round(hour.precipprob)}%</span> : <div className="h-6"></div>}
                </div>
                <div className="text-white text-lg md:text-xl font-bold">
                  {Math.round(hour.temp)}°C
                </div>
              </div>
            );
          })}
        </div>
      }
    </div>
  );
};
