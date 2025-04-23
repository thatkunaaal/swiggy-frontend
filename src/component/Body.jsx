import RestaurantCard from "./Restaurant";
import { resList } from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  const [toggle,setToggle] = useState(true);
  const [listOfRestaurant,setListOfRestaurant] = useState(resList);
  const filterTopRestaurant = () => {
    if(toggle){
      const filteredRestaurant = listOfRestaurant.filter(restaurant => 
        restaurant.info.avgRating >= 4.5
      )
      setListOfRestaurant(filteredRestaurant);
    }
    else{
      setListOfRestaurant(resList);
    }
    setToggle(!toggle);
  }
  return (
    <div className="Body-containter">
      <div className="search-box">
        <input placeholder="Enter the restaurant to search" />
        <button>Search</button>
        <button className="top-restaurant-btn" onClick={filterTopRestaurant}>{toggle?"Top Restaurant":"All Restaurant"}</button>
      </div>
      <div className="restaurant-container">
        {listOfRestaurant.map((item) => {
          return <RestaurantCard key={item.info.id} resData={item} />;
        })}
      </div>
    </div>
  );
};

export default Body;
