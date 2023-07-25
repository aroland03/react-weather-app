import { WeatherIcon } from "../Tools/WeatherIcons";

export const WeatherCard = ({ date, day, icon, precipprob, temp }) => {
  return (
    <div
      className="flex flex-col justify-center items-center"
      style={{ minWidth: "90px", maxWidth: "90px" }}
    >
      <div className="text-white text-lg md:text-xl font-bold">{date}</div>
      <div className="text-white text-m md:text-lg">{day}</div>
      <div className="mt-6 mb-6 text-white">
        <WeatherIcon icon={icon} width="w-8" height="h-8" mr="mr-0" />
      </div>
      <div className="text-white text-m md:text-lg">
        {precipprob > 0 ? (
          <span>{Math.round(precipprob)}%</span>
        ) : (
          <div className="h-6"></div>
        )}
      </div>
      <div className="text-white text-lg md:text-xl font-bold">
        {Math.round(temp)}°C
      </div>
    </div>
  );
};
