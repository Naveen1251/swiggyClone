import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategorey from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  const [showIndex, setShowIndex] = useState(1);
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);
  console.log(resInfo?.cards[5])

  if (resInfo === null) return <Shimmer />;
  

  const { name, cuisines, costForTwoMessage } =
  resInfo?.cards[2]?.card?.card?.info

  const categories =
    resInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    
    <div className=" text-center pt-28 ">
      <h1 className=" font-bold my-6 text-2xl">{name}</h1>
      <p className=" font-bold text-lg">
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      {categories.map((category, index) => (
        <RestaurantCategorey
          key={category?.card?.card.title}
          data={category?.card?.card}
          showItems={index === showIndex ? true : false}
          setShowIndex={() => setShowIndex(index)}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
