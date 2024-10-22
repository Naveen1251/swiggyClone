import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  
  

  const {
    cloudinaryImageId,
    name,
    avgRating,
    cuisines,
    sla,
    areaName
  } = resData?.info;

  return (
    <div className="m-4 p-4 md:w-[224px] lg:w-[309px] xl:w-[327px] rounded-lg  bg-gray-200 hover:shrink-10  h-200">
       <img
        className="rounded-lg md:w-[220px] lg:w-[304px] xl:w-[300px] h-[257px]"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      /> 
      <h3 className=" font-semibold py-4 text-lg truncate">{name}</h3>
      <h4>✪ {avgRating} . {sla?.slaString}  </h4>
      <h4 className=" truncate" >{cuisines.join(", ")}</h4>
      <h4>{areaName}</h4>
      
    </div>
  );
};

 export const withPromotedLabel = (RestaurantCard) =>{
  return (props)=>{
    return (
      <div>
        <label className=" absolute bg-gray-300 white-text font-bold rounded-lg ml-8 mt-5 p-2">Promoted</label>
        <RestaurantCard {...props }/>
      </div>
    )
  }
}

export default RestaurantCard;