import RestaurantCard from './RestaurantCard';
import resList from '../utils/mockData';
import { useState } from 'react';

const Body = () => {
  // Local State Variable - Super powerful variable
  const [listOfRestaurants, setListOfRestaurants] = useState([
    {
      id: 1,
      resName: 'Meghana Foods',
      cuisine: ['Biryani', 'North Indian'],
      cloudinaryImageId:
        'RX_THUMBNAIL/IMAGES/VENDOR/2024/7/22/059c1c9b-6e04-475a-8aba-1cba2e61953f_426776.jpg',
      rating: '5.0 ⭐⭐⭐⭐⭐',
      deliveryTime: '30 minutes',
      src: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/iivuhjc2mswi9lublktf',
    },
    {
      id: 2,
      resName: 'KFC',
      cuisine: ['Biryani', 'North Indian'],
      rating: '4.0 ⭐⭐⭐⭐',
      deliveryTime: '25 minutes',
      src: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/4/17/69e69c55-d2bb-4207-8310-131fc693f78a_25620.JPG',
    },
    {
      id: 3,
      resName: "McDonald's",
      cuisine: ['Burger', 'North Indian'],
      rating: '3.0 ⭐⭐⭐',
      deliveryTime: '10 minutes',
      src: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/6/11/7f76a072-c1bc-4d74-ac56-33e0eea20c1e_5934.JPG',
    },
    {
      id: 4,
      resName: 'Dominos',
      cuisine: ['Pizza', 'Pasta', 'Italian Food'],
      rating: '4.0 ⭐⭐⭐⭐',
      deliveryTime: '20 minutes',
      src: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/96df50829eda0c0ffcc5169aeeb86a14',
    },
    {
      id: 5,
      resName: 'Burger King',
      cuisine: ['Burger', 'Fast Food'],
      rating: '3.0 ⭐⭐⭐',
      deliveryTime: '20 minutes',
      src: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/6/11/7f76a072-c1bc-4d74-ac56-33e0eea20c1e_5934.JPG',
    },
    {
      id: 6,
      resName: 'Narmada',
      cuisine: ['Biryani', 'North Indian'],
      rating: '4.0 ⭐⭐⭐⭐',
      deliveryTime: '20 minutes',
      src: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/iivuhjc2mswi9lublktf',
    },
  ]);

  // Normal JS Variable
  // let listOfRestaurants = null;

  // Normal JS Variable
  // let listOfRestaurants = [
  //   {
  //     id: 1,
  //     resName: 'Meghana Foods',
  //     cuisine: ['Biryani', 'North Indian'],
  //     cloudinaryImageId:
  //       'RX_THUMBNAIL/IMAGES/VENDOR/2024/7/22/059c1c9b-6e04-475a-8aba-1cba2e61953f_426776.jpg',
  //     rating: '5.0 ⭐⭐⭐⭐⭐',
  //     deliveryTime: '30 minutes',
  //     src: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/iivuhjc2mswi9lublktf',
  //   },
  //   {
  //     id: 2,
  //     resName: 'KFC',
  //     cuisine: ['Biryani', 'North Indian'],
  //     rating: '4.0 ⭐⭐⭐⭐',
  //     deliveryTime: '25 minutes',
  //     src: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/4/17/69e69c55-d2bb-4207-8310-131fc693f78a_25620.JPG',
  //   },
  //   {
  //     id: 3,
  //     resName: "McDonald's",
  //     cuisine: ['Burger', 'North Indian'],
  //     rating: '3.0 ⭐⭐⭐',
  //     deliveryTime: '10 minutes',
  //     src: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/6/11/7f76a072-c1bc-4d74-ac56-33e0eea20c1e_5934.JPG',
  //   },
  //   {
  //     id: 4,
  //     resName: 'Dominos',
  //     cuisine: ['Pizza', 'Pasta', 'Italian Food'],
  //     rating: '4.0 ⭐⭐⭐⭐',
  //     deliveryTime: '20 minutes',
  //     src: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/96df50829eda0c0ffcc5169aeeb86a14',
  //   },
  //   {
  //     id: 5,
  //     resName: 'Burger King',
  //     cuisine: ['Burger', 'Fast Food'],
  //     rating: '3.0 ⭐⭐⭐',
  //     deliveryTime: '20 minutes',
  //     src: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/6/11/7f76a072-c1bc-4d74-ac56-33e0eea20c1e_5934.JPG',
  //   },
  //   {
  //     id: 6,
  //     resName: 'Narmada',
  //     cuisine: ['Biryani', 'North Indian'],
  //     rating: '4.0 ⭐⭐⭐⭐',
  //     deliveryTime: '20 minutes',
  //     src: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/iivuhjc2mswi9lublktf',
  //   },
  // ];

  return (
    <div className="body">
      {/* <div className="search">Search</div> */}
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            // Filter logic here
            const filteredList = listOfRestaurants.filter(
              (res) => res.rating > 3.9
            );
            console.log(listOfRestaurants);
            setListOfRestaurants(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {/* Restaurant Cards */}
        {/* Bad Practice */}
        {/* <RestaurantCard
          resName="Meghana Foods"
          cuisine="Biryani, North Indian"
        />
        <RestaurantCard resName="KFC" cuisine="Burger, Fast Food" />
        <RestaurantCard resName="Subway" cuisine="Biryani, North Indian" />
        <RestaurantCard resName="Burger King" cuisine="Burger, Fast Food" />
        <RestaurantCard
          resName="Call Me Chow"
          cuisine="Biryani, North Indian"
        /> */}
        {/* Good Practice */}
        {/* {resList.map((restaurant, id) => (
          <RestaurantCard key={id} resData={restaurant} />
        ))} */}
        {listOfRestaurants.map((restaurant, id) => (
          <RestaurantCard key={id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};
export default Body;
