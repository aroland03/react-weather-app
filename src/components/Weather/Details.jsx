import { WeatherCard } from "./WeatherCard";

export const Details = ({ title, data }) => {
  return (
    <div className="w-5/6 mt-8">
      <div className="text-xl md:text-m font-bold text-white text-center">
        <span>{title}</span>
      </div>
        <div className="flex flex-row overflow-x-auto mt-4 pb-3">
          {data?.map((item, index) => (
            <WeatherCard
              key={index}
              date={item.date}
              day={item.day}
              icon={item.icon}
              precipprob={item.precipprob}
              temp={item.temp}
            />
          ))}
        </div>
    </div>
  );
};