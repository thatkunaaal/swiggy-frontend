import RestaurantCard from "./Restaurant";
import {resList} from "../utils/mockData";

const Body = () => (
  <div className="Body-containter">
    <div className="search-box">
      <input placeholder="Enter the restaurant to search" />
      <button>Search</button>
    </div>
    <div className="restaurant-container">
      {
        resList.map((item)=>{
            return  (<RestaurantCard key={item.info.id}
            resData = {item}
           />)
        })
      }
     
    </div>
  </div>
);

export default Body;
