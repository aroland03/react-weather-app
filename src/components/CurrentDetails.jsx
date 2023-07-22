import { Humidity, SunRise, SunSet, UV, Umbrella } from "../assets/icons";
import { selectWeather } from "../state/weatherSlice";
import { useSelector } from "react-redux";
import { Wind } from "../assets/icons";
import { WindDir } from "./WindDir";

export const CurrentDetails = () => {
    const selectedWeather = useSelector(selectWeather);

    const sunrise = `${selectedWeather?.currentConditions?.sunrise.split(":")[0]}:${selectedWeather?.currentConditions?.sunrise.split(":")[1]}`;
    const sunset = `${selectedWeather?.currentConditions?.sunset.split(":")[0]}:${selectedWeather?.currentConditions?.sunset.split(":")[1]}`;


    return(
        <div className="grid grid-cols-2 md:grid-cols-6 justify-items-center mt-6 text-white">
            <div className="mt-2 md:mt-0"><Humidity/> {selectedWeather?.currentConditions?.humidity}%</div>
            <div className="mt-2 md:mt-0"><Wind/> {selectedWeather?.currentConditions?.windspeed} km/h  <WindDir dirDegree={selectedWeather?.currentConditions?.winddir} /></div>
            <div className="mt-2 md:mt-0"><UV /> - {selectedWeather?.currentConditions?.uvindex}</div>
            <div className="mt-2 md:mt-0"><Umbrella />  {selectedWeather?.currentConditions?.precipprob}%</div>
            <div className="mt-2 md:mt-0"><SunRise /> {sunrise}</div>
            <div className="mt-2 md:mt-0"><SunSet /> {sunset}</div>
        </div>
    )
}