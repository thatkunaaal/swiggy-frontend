import { CLOUD_URL } from "../utils/constant";


const RestaurantCard = (props) => {
    const {resData} = props;
    const {name,avgRating,cuisines,locality,cloudinaryImageId} = resData?.info;
    const {slaString} = resData.info.sla;
  return (
    <div className="res-card">
      <img src={CLOUD_URL+cloudinaryImageId} />
      <h3>{name}</h3>
      <div>⭐ {avgRating}  </div>
      <div>{slaString}</div>
      <div className="res-cards-description">
        {cuisines.join(", ")}
      </div>
      <div className="res-cards-location">{locality}</div>
    </div>
  );
};

export default RestaurantCard;