import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import { MENU_API_URL } from "../utils/constants";

const RestraurantMenu = () => {
    const { id } = useParams();
    const restaurantId = id || 18973; // fallback if route param is missing
    const [restaurantInfo, setRestaurantInfo] = useState(null);

    useEffect(() => {
        console.log('RestraurantMenu mounted, restaurantId =', restaurantId);
        fetchRestaurantMenu();
    }, [restaurantId]);

    const fetchRestaurantMenu = async() => {
        // const response = await fetch(MENU_API_URL + restaurantId);
        // const json = await response.json();
        // setRestaurantInfo(json);
        try {
            const url = `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9219&lng=77.634071&restaurantId=${restaurantId}`;
            console.log('Requesting menu API:', url);
            const response = await fetch(url);
            console.log('Menu fetch response:', response);
            if (!response.ok) {
                throw new Error(`Request failed with status ${response.status}`);
            }
            const json = await response.json();
            console.log('Fetched restaurant menu data:', json);
            setRestaurantInfo(json);
        } catch (error) {
            console.log('Failed to fetch restaurant menu (CORS or network issue):', error);
        }
    };

    const { name, cuisines, avgRating, costForTwoMessage } = restaurantInfo?.data?.cards[0]?.card?.card?.info || {};
    const menuItems = restaurantInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.flatMap(card => card?.card?.card?.itemCards || []) || [];
    const { item } = menuItems[0]?.card?.card || {};

    return restaurantInfo === null ? <Shimmer /> : (
        <div>
            <h1>{name || 'Name Of Restaurant'}</h1>
            <p>{cuisines?.join(', ') || 'Cuisines'}</p>
            <p>Rating: {avgRating || 'N/A'}</p>
            <p>{costForTwoMessage || 'Cost for two'}</p>
            <h1>Menu</h1>
            <ul>
                {menuItems.length === 0 ? (
                    <li>No menu items available.</li>
                ) : (
                    menuItems.map((menuItem, index) => (
                        <li key={index}>{menuItem.card?.card?.item?.name || 'Item Name'} : {menuItem.card?.card?.item?.price ? `₹${(menuItem.card?.card?.item?.price / 100).toFixed(2)}` : 'Price not available'}</li>
                    ))
                )}
            </ul>

        </div>
    );
}

export default RestraurantMenu;