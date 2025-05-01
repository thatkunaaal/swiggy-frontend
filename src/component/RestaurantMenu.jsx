import {useEffect, useState} from 'react';
import ShimmerUI from './ShimmerUI';
import { useParams } from 'react-router-dom';
import { MENU_URL } from '../utils/constant';
import useRestaurantInfo from '../utils/useRestaurantInfo';
import useOnlineStatus from '../utils/useOnlineStatus';

const RestaurantMenu = () => {
    const {resId} = useParams();
    const resData = useRestaurantInfo(resId);

    const isConnected = useOnlineStatus(); 
    
    if(!isConnected){
        return (
            <div style={{display: "flex", flexDirection : "column",justifyContent : "center" , alignItems : "center" , margin : "5vh"}}>
                <h1>You are not connected to internet :/</h1>
                <h3>Please check your connection.</h3>
            </div>
        )
    }

    

    if(resData === null )
        return <ShimmerUI />

    const {name,cuisines,costForTwoMessage,locality,totalRatingsString} = resData?.data?.cards[2]?.card?.card?.info;
    const {itemCards} = resData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
  
  
    return (
        <div className='Body-containter'>
            <h1>{name}</h1>
            <h3>{cuisines.join(", ")}</h3>
            
            <h4>{costForTwoMessage}</h4>
            <h5>{locality}</h5>
            <h6>{totalRatingsString}</h6>
            <h3>Menu:</h3>
            <div>
               { itemCards?.map((menu) => 
                    <li key={menu.card.info.id}>{menu.card.info.name}</li>
                )}        
            </div>
            
        </div>
    )
}

export default RestaurantMenu;