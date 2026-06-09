import {CLOUDINARY_IMAGE_URL, RESTAURANT_IMAGE_URL} from "../utils/constants";

const styleCard = {
    backgroundColor: '#f0f0f0',
};


const RestaurantCard = (props) => {
    const { name, cuisines, avgRating, sla, cloudinaryImageId } = props.restaurantDto;
    const { slaString } = sla || {};
    const fallbackImage = RESTAURANT_IMAGE_URL;
    const imageSrc = cloudinaryImageId
        ? (typeof cloudinaryImageId === 'string' && cloudinaryImageId.startsWith('http'))
            ? cloudinaryImageId
            : `${CLOUDINARY_IMAGE_URL}${cloudinaryImageId}`
        : fallbackImage;

    const handleImageError = (event) => {
        event.currentTarget.onerror = null;
        event.currentTarget.src = fallbackImage;
    };

    return (
        <div className='restaurant-card' style={styleCard}>
            <img
                src={imageSrc}
                alt={name || "restaurant"}
                className="resto-logo"
                onError={handleImageError}
            />
            <h3><strong>{name}</strong></h3>
            <p><strong>Cuisine:</strong> {Array.isArray(cuisines) ? cuisines.join(", ") : cuisines}</p>
            <p><strong>Rating:</strong> {avgRating}</p>
            <p><strong>Delivery Time:</strong> {slaString}</p>
        </div>
    );
}

export default RestaurantCard;