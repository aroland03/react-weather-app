import { useSelector } from "react-redux";
import { selectWeather } from "../../state/weatherSlice";
import { Details } from "./Details";

export const Forecast = () => {
  const selectedWeather = useSelector(selectWeather);

  let next24Hours = null;
  let next10Days = null;
  const today = new Date().getDay();

  if (selectedWeather && selectedWeather?.days?.length > 0) {
    const next24HoursData = {
      currentDay: selectedWeather?.days[0]?.hours.slice(
        new Date().getHours(),
        24
      ),
      nextDay: selectedWeather?.days[1]?.hours.slice(0, new Date().getHours()),
    };
    const next10DaysData = selectedWeather?.days.slice(0, 10);

    next24Hours = next24HoursData?.currentDay?.map((hour) => {
      return {
        date: hour.datetime.split(":")[0] + ":00",
        day: "Ma",
        icon: hour.icon,
        precipprob: hour.precipprob,
        temp: Math.round(hour.temp),
      };
    });

    next24Hours = next24Hours.concat(
      next24HoursData?.nextDay?.map((hour) => {
        return {
          date: hour.datetime.split(":")[0] + ":00",
          day: "Holnap",
          icon: hour.icon,
          precipprob: hour.precipprob,
          temp: Math.round(hour.temp),
        };
      })
    );

    next10Days = next10DaysData?.map((day, index) => {
        return {
            date: day.datetime.split("-")[1] + "." + day.datetime.split("-")[2],
            day: new Date(day.datetime).toLocaleString('hu-HU', { weekday: 'long' }),
            icon: day.icon,
            precipprob: day.precipprob,
            temp: Math.round(day.temp),
        }
    })
  }

  console.log(next24Hours);
    console.log(next10Days);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center">
      <Details title="Következő 24 óra" data={next24Hours} />
      <Details title="Következő 10 nap" data={next10Days} />
    </div>
  );
};
