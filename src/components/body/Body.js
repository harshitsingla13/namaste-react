import { useEffect, useRef, useState } from "react";
import RestaurantCard from "../restaurantCard/RestaurantCard";
import { SWIGGY_URL } from "../../utils/constants";
import Shimmer from "../shimmer/Shimmer";

const Body = () => {
  const [restaurantCards, setRestaurantCards] = useState([]);
  const [filteredData, setFilteredData] = useState(restaurantCards);
  const [loading, setLoading] = useState(false);
  const searchValue = useRef();

  useEffect(() => {
    setLoading(true);
    fetch(SWIGGY_URL, {
      method: "GET",
      mode: "cors",
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setRestaurantCards(
          data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants
        );
        setFilteredData(
          data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants
        );
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  const onSearchClickHandler = (searchValue) => {
    // const searchValue = searchValue.current.value;
    if (searchValue.length > 0) {
      console.log(restaurantCards);
      const filteredList = restaurantCards.filter((restaurant) =>
        restaurant.info.name.toLowerCase().includes(searchValue.toLowerCase())
      );
      setFilteredData(filteredList);
    } else {
      setFilteredData(restaurantCards);
    }
  };

  return (
    <div className="body">
      {loading ? (
        <Shimmer />
      ) : (
        <>
          <div className="filter">
            <div className="search">
              <input
                type="search"
                className="search-box"
                ref={searchValue}
                onChange={(e) =>
                  e.target.value.length === 0 &&
                  setFilteredData(restaurantCards)
                }
              ></input>
              <button
                onClick={() => onSearchClickHandler(searchValue.current.value)}
              >
                Search
              </button>
            </div>
          </div>
          <div className="restaurant-container">
            {filteredData?.length > 0 &&
              filteredData.map((card) => (
                <RestaurantCard key={card.id} {...card.info} />
              ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Body;
