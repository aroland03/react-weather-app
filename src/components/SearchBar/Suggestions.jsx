import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectCities, setCities, setSelectedCity } from "../../state/citiesSlice";

export const Suggestions = ({ visible, setTerm, setPlaceholder }) => {
  const selectedCities = useSelector(selectCities);
  const dispatch = useDispatch();

  const [hovering, setHovering] = React.useState(false);

  const sortByCountry = (cities, country) => {
    const sortedCities = [...cities];
    const hungarianCities = sortedCities.filter(
      (city) => city.properties.country_code === countryCode
    );
    const nonHungarianCities = sortedCities.filter(
      (city) => city.properties.country_code !== countryCode
    );
    return hungarianCities.concat(nonHungarianCities);
  };

  const countryCode = "hu";
  const sortedCities = sortByCountry(selectedCities, countryCode);

  const handleCityClick = useCallback(
    (city) => {
      dispatch(setSelectedCity(city));
      setHovering(false);
      setTerm("");
      dispatch(setCities([]));
      setPlaceholder(`${city.properties.address_line1}, ${city.properties.address_line2}`);
    },
    [dispatch]
  );

  return (
    <>
      {(visible || hovering) && selectedCities.length > 0 && (
        <div className="absolute mt-2 w-full overflow-hidden rounded-lg bg-white"
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}>
            
          {sortedCities.map((city, index) => {
            return (
              <div
                key={index}
                className="cursor-pointer py-2 px-3 hover:bg-slate-100"
                onClick={() => handleCityClick(city)}
              >
                <p className="text-sm font-medium text-gray-600">
                  {city.properties.address_line1}
                </p>
                <p className="text-sm text-gray-500">
                  {city.properties.address_line2}
                </p>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};
