import React,{useState} from "react";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";


const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo=useRestaurantMenu(resId);
  const[showIndex,setShowIndex]=useState(null);

  if (resInfo === null) return <Shimmer />;

  const name = resInfo?.cards[0]?.card?.card?.info?.name;
  const cuisines = resInfo?.cards[0]?.card?.card?.info?.cuisines;
  const costForTwoMessage =
    resInfo?.cards[0]?.card?.card?.info?.costForTwoMessage;

  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
    // console.log(resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards)
    const categories=resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c)=>c.card?.["card"]?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
    // console.log(categories)
    return (
    <div className="text-center">
      <h2 className="font-bold my-6 text-2xl">{name}</h2>
      <p className="font-bold text">
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      {categories.map((category,index)=>(
        <RestaurantCategory key={category?.card?.card.title}
         data={category?.card?.card}
         showItems={index ===showIndex?true:false}
         setShowIndex={()=>setShowIndex(index)}/>
      
      ))}
      
    </div>
  );
};
export default RestaurantMenu;
