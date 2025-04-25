import RestaurantCard from "./Restaurant";
import { useEffect, useState } from "react";
import ShimmerUI from "./ShimmerUI";

const Body = () => {
  const [toggle, setToggle] = useState(true);
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [searchText,setSearchText] = useState('');
  const [allRestaurantList , setAllRestaurantList] = useState([]);

  useEffect(() => {
    //Side-Effect function
    fetchData();
  }, []);

  const fetchData = async () => {
    const res = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.15451596634846&lng=72.99696508795024&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    
    const data = await res.json();
    const resList =
      data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
        console.log(resList)
    setListOfRestaurant(resList);
    setAllRestaurantList(resList);
  };

  const filterTopRestaurant = () => {
    if (toggle) {
      const filteredRestaurant = listOfRestaurant.filter(
        (restaurant) => restaurant.info.avgRating >= 4.5
      );
      setListOfRestaurant(filteredRestaurant);
    } else {
      fetchData();
    }
    setToggle(!toggle);
  };

  const searchRestaurant =async (searchText) => {
   
    const filteredRestaurant = allRestaurantList.filter((res)=>{
      return res.info.name.toLowerCase().includes(searchText.toLowerCase());
    })
    setListOfRestaurant(filteredRestaurant);
  }

  {
    return listOfRestaurant.length === 0 ? (
      <h1>
        <ShimmerUI />
      </h1>
    ) : (
      <div className="Body-containter">
        <div className="search-box">
          <input placeholder="Enter the restaurant to search" value={searchText} onChange={(e)=>setSearchText(e.target.value)}/>
          <button onClick={()=> searchRestaurant(searchText)}>Search</button>
          <button className="top-restaurant-btn" onClick={filterTopRestaurant}>
            {toggle ? "Top Restaurant" : "All Restaurant"}
          </button>
        </div>
        <div className="restaurant-container">
          {listOfRestaurant.map((item) => {
            return <RestaurantCard key={item.info.id} resData={item} />;
          })}
        </div>
      </div>
    );
  }
};

export default Body;
