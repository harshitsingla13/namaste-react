import { IMAGE_URL_HREF } from "../../utils/constants";

const RestaurantCard = (props) => {
  console.log(props);
  const {
    id,
    name: resName,
    cuisines,
    avgRating,
    sla: { deliveryTime },
    cloudinaryImageId,
    areaName,
  } = props;
  return (
    <div className="restaurant-card">
      <div className="res1">
        <div className="res">
          <figure className="restaurant-logo-container">
            <img
              className="restaurant-logo"
              alt="restaurant-logo"
              src={IMAGE_URL_HREF + cloudinaryImageId}
            />
          </figure>
        </div>
      </div>
      <div>
        <div>{resName}</div>
        <div className="restaurant-delivery-container">
          <span className="restaurant-rating-container">
            {avgRating + " stars • "}
          </span>
          {deliveryTime}
        </div>
        <div className="restaurant-description-container">
          <div className="restaurant-cuisines-area">{cuisines.join(", ")}</div>
          <div className="restaurant-cuisines-area">{areaName}</div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
