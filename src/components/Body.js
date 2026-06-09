import RestaurantCard from './RestaurantCard';
import { useEffect, useState } from 'react';
import Shimmer from './Shimmer';
import {Link} from 'react-router-dom';

const Body = () => {
    // local state variable
    const [restaurants, setRestaurants] = useState([]);

    const [filteredRestaurants, setFilteredRestaurants] = useState([]); 

    const [searchText, setSearchText] = useState("");

//whenever state variable changes, react re-renders the component and its children. useEffect is a hook that allows us to perform side effects in function components. It runs after the first render and after every update. By providing an empty dependency array, we can ensure that the effect runs only once when the component mounts.
    // Whenever state variable changes, react triggers a reconciliation cycle( re-renders the component).
    useEffect(() => {
        // This code will run when the component mounts
        fetchRestaurants();
    }, []); // The empty dependency array ensures this runs only once when the component mounts

    const fetchRestaurants = async () => {
        try {
            const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9219&lng=77.634071&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
            const json = await data.json();
            setRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
            setFilteredRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        } catch (error) {
            console.error('Failed to fetch restaurants (CORS or network issue):', error);
            // The Swiggy API endpoint blocks browser requests from a local app, so we keep using mock data here.
        }
    };

    // // Conditional rendering based on the restaurants state
    // if(restaurants.length === 0) {
    //     // return <h1>Loading...</h1>
    //     return (
    //         <Shimmer />
    //     )
    // }

    return restaurants.length === 0 ? (
        <Shimmer />
    ) : (
        <div className='body'> 
            <div className="filter" style={{padding: '10px'}}>
                <div className="search">
                    <input type="text" placeholder="Search for restaurants or cuisines" className="search-input" value={searchText} onChange={(e) => setSearchText(e.target.value)} />
                    <button className="search-btn" onClick={() => {
                        // Handle search functionality
                        const filteredRestaurants = restaurants.filter(restaurant => restaurant.info.name.toLowerCase().includes(searchText.toLowerCase()));
                        setFilteredRestaurants(filteredRestaurants);
                    }}>
                        Search
                    </button>
                </div>

                <button className="filter_btn" onClick={() =>{
                    const restaurantLists = restaurants.filter(restaurant => restaurant.info.avgRating > 4)
                    setFilteredRestaurants(restaurantLists);
                }}>
                    Top Rated Restaurants
                </button>
                <button className="reset_btn" onClick={() =>{
                    setFilteredRestaurants(restaurants);
                    setSearchText("");
                    }}>
                    Reset
                </button>
            </div>
            <div className='restaurant-container'>
                {filteredRestaurants.map((restaurant, index) => (
                    <Link to={`/restaurants/${restaurant.info.id}`} key={restaurant.info.id || index}>
                        <RestaurantCard
                            restaurantDto={restaurant.info}
                        />
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default Body;