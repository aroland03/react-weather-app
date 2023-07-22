import { useSelector } from "react-redux"
import { selectWeather } from "../state/weatherSlice"
import { WeatherIcon } from "./WeatherIcons"

export const DailyDetails = () => {

    const selectedWeather = useSelector(selectWeather)


    return (
        <div className="w-5/6 scrollbar scrollbar-indigo thin">
          <div className="text-xl md:text-m font-bold text-white text-center">
            <span>Következő 10 nap</span>
          </div>
    
          {
            <div className="flex flex-row overflow-x-auto mt-3 pb-3">
              {/* Az aktuális nap órái */}
              {selectedWeather?.days?.map((day, index) => {
                return (
                  <div
                    key={index}
                    className="flex flex-col justify-center items-center"
                    style={{ minWidth: "90px", maxWidth: "90px" }}
                     // Itt állítsd be az óránkénti adatok maximális szélességét, pl. 150px
                  >
                    <div className="text-white text-lg md:text-xl font-bold">
                      {new Date(day.datetime).toLocaleString('hu-HU', { weekday: 'long' })}
                    </div>
                    <div className="text-white text-m md:text-lg">
                        {"asd"}
                    </div>
                    <div className="mt-6 mb-6 text-white">
                        <WeatherIcon icon={day.icon} width="w-8" height="h-8" mr="mr-0" />
                    </div>
                    <div className="text-white text-m md:text-lg">
                        {day.precipprob > 0 ? <span>{Math.round(day.precipprob)}%</span> : <span></span>}
                    </div>
                    <div className="text-white text-lg md:text-xl font-bold">
                      {Math.round(day.temp)}°C
                    </div>
                  </div>
                );
              })}
            </div>
          }
        </div>
      );
}