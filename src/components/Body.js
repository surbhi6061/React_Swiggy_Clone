import RestaurantCard, { withOpenLabel } from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const onlineStatus = useOnlineStatus();
  console.log("Body", listOfRestaurants);

  const RestaurantCardIsOpen = withOpenLabel(RestaurantCard);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9915639&lng=80.2336857&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();

    console.log(json);
    setListOfRestaurants(
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurant(
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };
  if (listOfRestaurants.length === 0) {
    return <Shimmer />;
  }
  if (onlineStatus === false)
    return (
      <h1>Looks like you're offline!! Please check your internet connection</h1>
    );

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter flex">
        <div className="search m-4 p-4">
          <input
            type="text"
            data-testid="searchInput"
            className="border border-solid border-black"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="px-4 py-2 bg-green-100 m-4 rounded-lg "
            onClick={() => {
              const filteredRestaurants = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurant(filteredRestaurants);
            }}
          >
            Search
          </button>
        </div>
        <div className="search m-4 p-4 flex items-center">
          <button
            className="search px-4 py-2 bg-gray-100 rounded-lg"
            onClick={() => {
              const filteredList = listOfRestaurants.filter(
                (res) => res.info.avgRating > 4
              );
              setListOfRestaurants(filteredList);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
      </div>
      <div className="flex flex-wrap">
        {filteredRestaurant.map((restaurant) => (
          <Link
            key={restaurant?.info.id}
            to={"/restaurants/" + restaurant?.info.id}
          >
            {restaurant.info.isOpen ? (
              <RestaurantCardIsOpen resData={restaurant?.info} />
            ) : (
              <RestaurantCard resData={restaurant?.info} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Body;
