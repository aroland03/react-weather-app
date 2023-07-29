import { useCallback, useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectCities,
  setCities,
  setSelectedCity,
} from "../../state/citiesSlice";

export const Suggestions = ({ visible, setVisible, setTerm, setPlaceholder }) => {
  const selectedCities = useSelector(selectCities);
  const dispatch = useDispatch();

  const suggestionsRef = useRef(null);

  const sortByCountry = (cities) => {
    const sortedCities = [...cities];
    const hungarianCities = sortedCities.filter(
      (city) => city.properties.country_code === countryCode
    );
    const nonHungarianCities = sortedCities.filter(
      (city) => city.properties.country_code !== countryCode
    );
    return hungarianCities.concat(nonHungarianCities);
  };

  useEffect(() => {
    if (selectedCities.length > 0) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  }, [selectedCities, setVisible]);
  
    const handleOutsideClick = useCallback((event) => {
      if (suggestionsRef.current && !suggestionsRef.current.contains(event.target)) {
        setVisible(false);
      }
    }, [setVisible]);
  
    useEffect(() => {
      document.addEventListener("click", handleOutsideClick);
  
      return () => {
        document.removeEventListener("click", handleOutsideClick);
      };
    }, [handleOutsideClick]);


  const countryCode = "hu";
  const sortedCities = sortByCountry(selectedCities);

  const handleCityClick = useCallback(
    (city) => {
      //console.log(city)
      dispatch(setSelectedCity(city));
      dispatch(setCities([]));
      setPlaceholder(`${city.properties.address_line1}, ${city.properties.address_line2}`);
      setTerm("");
    }, [dispatch, setPlaceholder, setTerm]
  );

  return (
    <>
      {(visible) && selectedCities.length > 0 && (
        <div
          ref={suggestionsRef}
          className="absolute mt-2 w-full overflow-hidden rounded-lg bg-white"
        >
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
