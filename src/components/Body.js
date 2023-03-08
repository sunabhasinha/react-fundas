import { restaurantList } from '../contants';
import RestaurantCard from './RestaurantCard';
import { useEffect, useState } from 'react';
import Shimmer from './Shimmer';

function filterData(searchText, restaurants) {
	const filterData = restaurants.filter((restaurant) =>
		restaurant.data.name.includes(searchText)
	);

	return filterData;
}

const Body = () => {
	const [filteredREstaurants, setFilteredRestaurants] = useState([]);
	const [allRestaurants, setAllRestaurants] = useState([]);
	const [searchText, setSearchText] = useState('');

	/**
	 * first component renders then useEffect is called.
	 * empty dependency array => once after initial render
	 * dep array [searchText] => once after initial render + everytime after render (searchText changes)
	 */
	useEffect(() => {
		getRestaurantList();
	}, []);

	async function getRestaurantList() {
		const data = await fetch(
			'https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING'
		);
		const json = await data.json();
		setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
		setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
	}

	return allRestaurants.length === 0 ? (
		<Shimmer />
	) : (
		<>
			<div className="search-container">
				<input
					type="text"
					className="search-input"
					placeholder="Search"
					value={searchText}
					onChange={(e) => {
						setSearchText(e.target.value);
					}}
				/>
				<button
					className="search-btn"
					onClick={() => {
						//need to filter the data
						const data = filterData(searchText, allRestaurants);
						// update the state - restaurants
						setFilteredRestaurants(data);
					}}
				>
					Search
				</button>
			</div>
			<div className="restaurant-list">
				{filteredREstaurants.length ? (
					filteredREstaurants.map((restaurant) => {
						return (
							<RestaurantCard {...restaurant.data} key={restaurant.data.id} />
						);
					})
				) : (
					<h1>No Filtered Restaurants</h1>
				)}
			</div>
		</>
	);
};

export default Body;
