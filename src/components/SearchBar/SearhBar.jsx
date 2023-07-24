import { useDispatch } from "react-redux";
import { setCities } from "../../state/citiesSlice";
import { useSearchCityMutation } from "../../state/searchCityApi";
import { useEffect, useState } from "react";
import { Suggestions } from "./Suggestions";

export const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [placeHolder, setPlaceHolder] = useState("Keresés");
  const [isOnFocus, setisOnFocus] = useState(false);
  const [getCities, data] = useSearchCityMutation();

  const dispatch = useDispatch();

  const handleSearchTermChange = async (e) => {
    setSearchTerm(e.target.value);
    if (e.target.value.length > 2) {
      console.log(e.target.value);
      await getCities(e.target.value)
        .unwrap()
        .then((res) => {
          console.log(res);
          dispatch(setCities(res.features));
        })
        .catch((err) => {
          console.error("Error:", err);
        });
    } else {
      dispatch(setCities([]));
    }
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 mb-8">
        <div></div>
        <div className="relative">
          <input
            className="border-2 border-gray-300 bg-white bg-opacity-80 h-10 px-5 pr-16 rounded-full text-sm focus:outline-none w-full"
            type="search"
            name="search"
            placeholder={placeHolder}
            value={searchTerm}
            onChange={handleSearchTermChange}
            onFocus={() => setisOnFocus(true)}
            onBlur={() => setisOnFocus(false)}
            autoComplete="off"
          />

          <div className="absolute top-0 mt-3 text-gray-600 right-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 512 512"
              fill="currentColor"
            >
              <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
            </svg>
          </div>
          <Suggestions
            visible={isOnFocus}
            setTerm={setSearchTerm}
            setPlaceholder={setPlaceHolder}
          />
        </div>

        <div></div>
      </div>
    </>
  );
};
